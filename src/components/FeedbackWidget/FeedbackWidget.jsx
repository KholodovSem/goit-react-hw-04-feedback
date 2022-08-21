import { useState } from 'react';
import Buttons from './Buttons';
import FeedbackSection from './FeedbackSection';
import Statistic from './StatisticList';
import Notification from './Notifacation';

function FeedbackWidget() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const {good, neutral, bad} = feedback;

  const tipFeedback = (name) => {
    setFeedback(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }))
    countTotalFeedback();
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round(good / countTotalFeedback() * 100);

  };

  return (
    <>
      <FeedbackSection title='Please leave feedback'>
        <div>
        {Object.keys(feedback).map((btn) => (
          <Buttons name={btn} tipFeedback={tipFeedback} key={btn}/>
        ))}
        </div>
      </FeedbackSection>
      {countTotalFeedback() > 0 ?
        <FeedbackSection title='Statistics'>
          <Statistic
            countBadFeedback={bad}
            countTotalFeedback={countTotalFeedback}
            countNeutralFeedback={neutral}
            countGoodFeedback={good}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        </FeedbackSection> :
        <Notification message='There is no feedback' />
      }
    </>
  );
}

export default FeedbackWidget;

import { useState } from 'react';
import Buttons from './Buttons';
import FeedbackSection from './FeedbackSection';
import Statistic from './StatisticList';
import Notifacation from './Notifacation';

function FeedbackWidget() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const tipGoodFeedback = () => {
    setGood((prevState) => prevState + 1);
    countTotalFeedback();
  };

  const tipNeutralFeedback = () => {
    setNeutral((prevState) => prevState + 1);
  };

  const tipBadFeedback = () => {
    setBad((prevState) => prevState + 1);
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
        <Buttons
          tipGoodFeedback={tipGoodFeedback}
          tipBadFeedback={tipBadFeedback}
          tipNeutralFeedback={tipNeutralFeedback}
        />
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
        <Notifacation message='There is no feedback' />
      }
    </>
  );
}

export default FeedbackWidget;

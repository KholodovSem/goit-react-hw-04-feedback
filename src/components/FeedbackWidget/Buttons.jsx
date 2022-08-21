import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({tipFeedback, name}) => (
<button onClick={(e) => {
  const name = e.currentTarget.name;

  tipFeedback(name);
}} name={name}>{name}</button>
)

Buttons.propTypes = {
  name: PropTypes.string.isRequired,
  tipFeedback: PropTypes.func.isRequired
}

export default Buttons;


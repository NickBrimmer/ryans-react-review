import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, ...props }) => (
  <button {...props}>{text}</button>

);

Button.propTypes = {
  test: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,

};

export default Button;

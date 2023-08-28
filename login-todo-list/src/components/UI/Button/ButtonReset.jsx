/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */

import React from 'react';
import './ButtonReset.css';

function ButtonReset(props) {
  return (
    <button
      className={`button_reset ${props.className}`}
      type={props.types || 'reset'}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default ButtonReset;

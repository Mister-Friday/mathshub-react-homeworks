import React from 'react';
import './ButtonReset.css';

function ButtonReset(props) {
  return (
    <button
      className="buttonAlt"
      type={props.type || 'reset'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default ButtonReset;

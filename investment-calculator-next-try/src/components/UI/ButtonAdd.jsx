import React from 'react';
import './ButtonAdd.css';

function ButtonAdd(props) {
  return (
    <button
      className="button"
      type={props.type || 'submit'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default ButtonAdd;

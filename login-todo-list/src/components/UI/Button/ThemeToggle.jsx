/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeProviders';
import './ThemeToggle.css';

function ThemeToggle() {
  const contextData = useContext(ThemeContext);

  return (
    <div className="container">
      <label id="switch" className="switch">
        <input
          type="checkbox"
          id="slider"
          checked={contextData.lightStyle}
          onChange={contextData.onChangeTheme}
        />
        <span className="slider round" />
      </label>
    </div>
  );
}

export default ThemeToggle;

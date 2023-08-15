import React from 'react';
import logo from '../assets/investment-calculator-logo.png';
import './Header.css';

function Header({ textTitle }) {
  return (
    <header className="header">
      <img src={logo} alt="логотип" />
      <h1>{textTitle}</h1>
    </header>
  );
}

export default Header;

/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';

import './Navigation.css';
import AuthContext from '../context/auth-context';
import ThemeToggle from '../UI/Button/ThemeToggle';

function Navigation() {
  const contextData = useContext(AuthContext);

  return (
    <nav className="nav">
      <ul>
        {contextData.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {contextData.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {contextData.isLoggedIn && (
          <li>
            <button onClick={contextData.onLogout}>Logout</button>
          </li>
        )}
        <ThemeToggle />
      </ul>
    </nav>
  );
}

export default Navigation;

/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/context/auth-context';
import ThemeContext from './components/context/ThemeProviders';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(true);

  useEffect(() => {
    const storageUserStatus = localStorage.getItem('isLoggedIn');

    if (storageUserStatus === 'true') {
      setIsLoggedIn(true);
    }

    const storageThemeStatus = localStorage.getItem('isLightTheme');

    if (storageThemeStatus === 'true') {
      setIsLightTheme(true);
    } else if (storageThemeStatus === 'false') {
      setIsLightTheme(false);
    }
  }, []);

  const loginHandler = (email, password) => {
    // Тут мы должны проверять логин и пароль
    // Но это всего лишь демо
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const changeThemeHandler = () => {
    localStorage.setItem('isLightTheme', String(!isLightTheme));
    setIsLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ lightStyle: isLightTheme, onChangeTheme: changeThemeHandler }}
    >
      <AuthContext.Provider
        value={{
          isLoggedIn,
          onLogout: logoutHandler,
        }}
      >
        <MainHeader />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CategoryPage from './pages/CategoryPage';
import TemplatePage from './pages/TemplatePage';
import { v4 as uuidv4 } from 'uuid';
import Statistics from './pages/Statistics';
import ErrorPage from './pages/404-Page';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

import './firebase';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TemplatePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      { path: '/category/:categoryId', element: <CategoryPage /> },
      { path: '/statistics', element: <Statistics /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/registration', element: <RegistrationPage /> },
    ],
  },
  { path: '/error', element: <ErrorPage /> },
]);

function App() {
  const userId = localStorage.getItem('userId');

  if (userId == null) {
    const generateId = uuidv4();
    localStorage.setItem('userId', generateId);
  }

  // console.log('userId=', userId);

  return <RouterProvider router={router} />;
}

export default App;

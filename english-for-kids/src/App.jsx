import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import CategoryPage from './components/pages/CategoryPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  { path: '/category/:categoryId', element: <CategoryPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

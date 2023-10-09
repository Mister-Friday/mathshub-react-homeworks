import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function TemplatePage() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
}

export default TemplatePage;

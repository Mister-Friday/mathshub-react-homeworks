import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <>
      <h1>404-Page</h1>;<p>Запрашиваемаы страница не существует!!</p>
      <Link to="/">На главную</Link>
    </>
  );
}

export default ErrorPage;

import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const categoriesItems = useSelector((store) => store.words.categories);

  return (
    <nav>
      <ul>
        {categoriesItems.map((item, index) => (
          <NavLink to={`/category/${index}`} key={index}>
            <li>{item.title}</li>
          </NavLink>
        ))}
        <li>
          <NavLink to="/statistics">Статистика</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

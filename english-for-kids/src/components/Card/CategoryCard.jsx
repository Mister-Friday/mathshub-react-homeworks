import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ id, title, image }) => {
  return (
    <Link to={`./category/${id}`}>
      <img src={image} alt="картинка в карточке" />
      <h4>{title}</h4>
    </Link>
  );
};

export default CategoryCard;

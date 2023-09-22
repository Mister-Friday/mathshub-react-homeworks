import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card({ image, word, id }) {
  // console.log('title=', title);
  return (
    <div className="card">
      <Link to={`./category/${id}`}>
        <img src={image} alt="картинка в карточке" />
        <h4>{word}</h4>
      </Link>
    </div>
  );
}

export default Card;

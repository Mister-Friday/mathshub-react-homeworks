import React from 'react';
import Card from '../Card/Card';
import './CardTemplate.css';

const CardTamplate = ({ cards }) => {
  // const cardsEntries = Object.entries(cards);
  return (
    <div className="cards_template">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          id={index}
        />
      ))}
    </div>
  );
};

export default CardTamplate;

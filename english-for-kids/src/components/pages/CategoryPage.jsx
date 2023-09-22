import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';

const CategoryPage = () => {
  const categoryId = useParams();
  const categoryValue = useSelector(
    (store) => store.words.categories[categoryId]
  );

  return (
    <div>
      <h2>Категрия {categoryValue.title} </h2>
      {cards.map((card, index) => (
        <Card
          key={index}
          word={card.word}
          imageUrl={card.imageUrl}
          id={index}
        />
      ))}
    </div>
  );
};

export default CategoryPage;

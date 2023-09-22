import React from 'react';
import { useSelector } from 'react-redux';
import CardTemplate from '../CardTemplate/CardTemplate';
import CategoryCard from '../Card/CategoryCard';

const MainPage = () => {
  const categoriesCards = useSelector((store) => store.words.categories);

  return (
    <>
      <div>
        MainPage
        <h2>Список кателгоий</h2>
      </div>
      <div className="cards_template">
        {categoriesCards.map((card, index) => (
          <CategoryCard
            key={index}
            title={card.title}
            imageUrl={card.imageUrl}
            id={index}
          />
        ))}
      </div>
    </>
  );
};

export default MainPage;

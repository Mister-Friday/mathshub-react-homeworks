import React from 'react';
import { useSelector } from 'react-redux';
// import CardTemplate from '../CardTemplate/CardTemplate';
import CategoryCard from '../components/Card/CategoryCard';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const categoriesCards = useSelector((store) => store.words.categories);
  const userEmail = useSelector((store) => store.userSlice.email);
  const navigate = useNavigate();

  if (!userEmail) {
    navigate('/login');
  }

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

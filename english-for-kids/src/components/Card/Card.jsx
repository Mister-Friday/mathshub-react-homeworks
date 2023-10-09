import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './Card.css';
import { BsSoundwave } from 'react-icons/bs';
import { IoIosRefreshCircle } from 'react-icons/io';
import Button from '../UI/Button';

function Card({ cardObject, gameClickHandler, flipCardFetcher }) {
  const [isFlip, setIsFlip] = useState(false);

  const isTrain = useSelector((store) => store.appState.appState);

  const playSoundHandler = () => {
    const soundObject = new Audio(`/src/static/${cardObject.audioSrc}`);
    soundObject.play();
  };

  const flipCardHandler = () => {
    setIsFlip((prev) => !prev);
    flipCardFetcher(cardObject);
  };

  return (
    <div
      className="cards_wrapper"
      onClick={() => {
        gameClickHandler(cardObject);
      }}
    >
      <div className="btns">
        {isTrain && (
          <Button type="button" onClick={playSoundHandler}>
            Слушать <BsSoundwave />
          </Button>
        )}

        {isTrain && (
          <Button type="button" onClick={flipCardHandler}>
            Перевести
            <IoIosRefreshCircle />
          </Button>
        )}
      </div>
      <div className="card">
        <div
          className={`card_side ${
            (isFlip && 'card_side_back card_side_back_2') || 'card_side_front_2'
          }`}
        >
          <div className="card_details">
            <h2>{cardObject.title}</h2>
          </div>
          <img
            src={`/src/static/${cardObject.image}`}
            alt="картинка в карточке"
          />
        </div>
      </div>
      <div className="card_details_back">
        <h2 className="translate_word">{cardObject.translation}</h2>
      </div>
    </div>
  );
}

export default Card;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../components/Card/Card';
import {
  appStateActions,
  stateGameOver,
  stateUserInput,
} from '../store/app-state-slice';
import { stateTrain } from '../store/app-state-slice';
import { stateSay } from '../store/app-state-slice';
import { stateCheck } from '../store/app-state-slice';
import { sha256 } from 'js-sha256';
import Button from '../components/UI/Button';
import Scores from '../components/Scores';
import './CategoryPage.css';
import Modal from '../components/UI/Modal';
import GameOver from '../components/GameOver';
import { Navigate } from 'react-router-dom';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const categoryValue = useSelector(
    (store) => store.words.categories[params.categoryId]
  );

  if (categoryValue === undefined) {
    return <Navigate to="/error" />;
  }
  const fireBaseUrl = useSelector((store) => store.fireBase.fireBaseUrl);
  const appState = useSelector((store) => store.appState.appState);
  const currentCard = useSelector((store) => store.appState.currentCard);

  const cards = categoryValue.cards;

  // let cards;

  // try {
  //   cards = categoryValue.cards;
  // } catch {
  //   return <Navigate to="/error" />;
  // }

  const gameCards = useSelector((store) => store.appState.cards);

  const startButtonHandler = () => {
    const payload = { cards: cards };
    dispatch(appStateActions.startGame(payload));
  };

  const repeatWordHandler = () => {
    if (appState !== stateUserInput) return;
    // console.log('isTrain=', appState);

    dispatch(appStateActions.changeState(stateSay));
  };

  function initSay() {
    if (appState === stateSay) {
      const repeatCard = gameCards[0];
      const soundObject = new Audio(`/src/static/${repeatCard.audioSrc}`);
      soundObject.play();
      dispatch(appStateActions.changeState(stateUserInput));
    }
  }
  // useEffect(initSay, [appState]);

  const CreateCardHash = ({ categoryTitle, word, translation }) => {
    const hashedString = `${categoryTitle}_ ${word}_${translation}`;
    const cardHash = sha256(hashedString);
    return cardHash;
  };

  const gameCardClickHandler = (cardObject) => {
    if (appState !== stateUserInput) return;

    const payload = {
      word: cardObject.title,
      translation: cardObject.translation,
      categoryId: categoryValue,
      isTrain: false,
    };

    dispatch(appStateActions.toCheck(payload));
  };

  const flipCardFetcher = async (cardObject) => {
    const payload = {
      word: cardObject.title,
      translation: cardObject.translation,
      categoryTitle: categoryValue.title,
      isTrain: true,
      isCorrect: null,
      date: new Date().getTime(),
      cardHash: CreateCardHash({
        categoryTitle: categoryValue.title,
        word: cardObject.title,
        translation: cardObject.translation,
      }),
    };

    const userId = localStorage.getItem('userId');
    const fetchUrl = `${fireBaseUrl}/userAnswers/${userId}.json`;
    const fetch_data = { ...payload, userId };

    const response = await fetch(fetchUrl, {
      method: 'POST',
      date: new Date().getTime(),
      body: JSON.stringify(fetch_data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('flipCardFetcher!');
  };

  async function initCheck() {
    if (appState === stateCheck) {
      const trueCard = gameCards[0];
      const trueWord = trueCard.title;
      // console.log('trueCard', trueCard);
      // console.log(`${trueWord}, ${word}`);
      const word = currentCard.word;

      const payload = {
        word: trueWord,
        translation: trueCard.translation,
        categoryTitle: categoryValue.title,
        isTrain: false,
        isCorrect: true,
        date: new Date().getTime(),
        cardHash: CreateCardHash({
          categoryTitle: categoryValue.title,
          word: trueWord,
          translation: trueCard.translation,
        }),
      };

      if (trueWord === word) {
        payload.isCorrect = true;
        dispatch(appStateActions.goodClick(payload));
      } else {
        payload.isCorrect = false;
        dispatch(appStateActions.badClick(payload));
      }

      const userId = localStorage.getItem('userId');

      const fetchUrl = `${fireBaseUrl}/userAnswers/${userId}.json`;
      const fetch_data = { ...payload, userId };

      const response = await fetch(fetchUrl, {
        method: 'POST',
        date: new Date().getTime(),
        body: JSON.stringify(fetch_data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }
  function initGameOver() {
    if (appState !== stateGameOver) return;

    // console.log('GAME OVER');
  }

  useEffect(() => {
    initSay();
    initCheck();
    initGameOver();
  }, [appState]);

  useEffect(() => {
    console.log('UseEffect сработал 1');
    if (appState !== stateTrain) {
      dispatch(appStateActions.finishGame());
      console.log('UseEffect сработал еще');
    }
  }, [params]);

  return (
    <>
      {appState === stateGameOver && (
        <Modal>
          <GameOver />
        </Modal>
      )}

      {appState !== stateTrain && (
        <div>
          <div>
            <Button type="button" onClick={startButtonHandler}>
              Старт
            </Button>
          </div>{' '}
          <div>
            <Button type="button" onClick={repeatWordHandler}>
              Повторить
            </Button>
          </div>
        </div>
      )}
      <h2>Категрия {categoryValue.title} </h2>
      <Scores />
      <div className="cards_grid">
        {cards.map((card, index) => (
          <Card
            cardObject={card}
            key={index}
            gameClickHandler={gameCardClickHandler}
            flipCardFetcher={flipCardFetcher}
          />
        ))}
      </div>
    </>
  );
};
export default CategoryPage;

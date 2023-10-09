import React from 'react';
import { BsBalloonHeartFill } from 'react-icons/bs';
import { BsBalloonHeart } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const Scores = () => {
  const gameScores = useSelector((store) => store.appState.userAnswersList);

  console.log('gameScores=', gameScores);

  return (
    <div className="game_scores">
      {gameScores.map((answer) => {
        if (answer.isCorrect) {
          return <BsBalloonHeartFill key={answer.date} />;
        } else {
          return <BsBalloonHeart key={answer.date} />;
        }
      })}
    </div>
  );
};

export default Scores;

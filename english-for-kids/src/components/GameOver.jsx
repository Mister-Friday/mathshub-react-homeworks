import React from 'react';
import Scores from './Scores';
import Button from './UI/Button';
import { useDispatch } from 'react-redux';
import { appStateActions } from '../store/app-state-slice';

function GameOver() {
  const dispatch = useDispatch();

  const onChangeState = () => {
    dispatch(appStateActions.finishGame());
  };

  return (
    <div className="game_over_score">
      <Scores />
      <Button onClick={onChangeState}>Ok</Button>
    </div>
  );
}

export default GameOver;

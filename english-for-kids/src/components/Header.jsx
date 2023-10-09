import React from 'react';
import NavBar from './Navigation/NavBar';
import { useDispatch } from 'react-redux';
import { appStateActions } from '../store/app-state-slice';
import { userStateActions } from '../store/user-slice';
import { stateTrain } from '../store/app-state-slice';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
// import { stateGame } from '../store/app-state-slice';

const Header = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector((store) => store.userSlice.email);

  const isTrain = useSelector((store) => store.appState.appState);

  let text = useMemo(() => {
    return isTrain === stateTrain ? 'ТРЕНИРОВКА' : 'ИГРА';
  }, [isTrain]);

  const changeStateHandler = () => {
    dispatch(appStateActions.toggleAppState());
  };

  const logoutHandler = () => {
    dispatch(userStateActions.removeUser());
  };

  return (
    <>
      <header>
        <NavBar />
        {text}
        <input type="checkbox" onChange={changeStateHandler} />
        <div>
          <p>{userEmail}</p>
        </div>
        {userEmail && (
          <button type="button" onClick={logoutHandler}>
            Выйти
          </button>
        )}
      </header>
    </>
  );
};

export default Header;

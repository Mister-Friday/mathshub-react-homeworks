import { createSlice } from '@reduxjs/toolkit';
export const stateTrain = 'train';
export const stateGame = 'game';
// export const statePlayback = 'playback';
export const stateUserInput = 'user_input';
export const stateGameOver = 'game over';
export const stateSay = 'state say';
export const stateCheck = 'check word';

const initialAppState = {
  appState: stateTrain,
  cards: [],
  currentCard: null,
  userAnswersList: [],
};

const sliceAppStateConfig = {
  name: 'appState',
  initialState: initialAppState,
  reducers: {
    toggleAppState(state) {
      if (state.appState !== stateTrain) {
        state.appState = stateTrain;
      } else {
        state.appState = stateGame;
        state.userAnswersList = [];
      }
    },

    startGame(state, action) {
      if (state.appState !== stateGame) return;

      const shuffle = (arr) => {
        const shuffledArr = structuredClone(arr);

        return shuffledArr;
      };
      const cards = shuffle(action.payload.cards);
      state.cards = cards;
      console.log('start Game, action.payload.cards= ', action.payload.cards);
      const firstCard = cards[0];
      console.log('firstCard=', firstCard);
      state.appState = stateSay;
    },

    // playbackWord(state) {},

    repeatWord(state) {
      if (state.appState !== stateUserInput) return;
      const repeatCardProxy = state.cards[0];
      const repeatCard = Object.fromEntries(Object.entries(repeatCardProxy));
      console.log('озвучиваем repeatCard=', repeatCard);
    },

    toSay(state) {
      state.appState = stateSay;
    },
    changeState(state, action) {
      const newStateName = action.payload;
      state.appState = newStateName;
    },
    toCheck(state, action) {
      const payload = action.payload;
      state.currentCard = payload;
      state.appState = stateCheck;
    },
    goodClick(state, action) {
      const payload = action.payload;
      // state.userCorrectAnswers = state.userCorrectAnswers + 1;
      state.userAnswersList.push(payload);
      const cardsCopy = state.cards.map((proxyCard) =>
        Object.fromEntries(Object.entries(proxyCard))
      );
      cardsCopy.shift();
      state.cards = cardsCopy;
      if (cardsCopy.length === 0) {
        state.appState = stateGameOver;
      } else {
        state.appState = stateSay;
      }
      // state.appState = stateUserInput;
    },

    badClick(state, action) {
      const payload = action.payload;
      state.userAnswersList.push(payload);
      state.appState = stateUserInput;
    },
    finishGame(state) {
      state.userAnswersList = [];
      state.appState = stateGame;
    },
  },
};

const appStateSlice = createSlice(sliceAppStateConfig);

export const appStateActions = appStateSlice.actions;

export default appStateSlice;

//Cтарый код.

// const initialAppState = {
//   trainState: true,
// };

// const sliceAppStateConfig = {
//   name: 'appState',
//   initialState: initialAppState,
//   reducers: {
//     toggleAppState(state) {
//       state.trainState = !state.trainState;
//     },
//   },
// };

// const appStateSlice = createSlice(sliceAppStateConfig);

// export const appStateActions = appStateSlice.actions;

// export default appStateSlice;

import { configureStore } from '@reduxjs/toolkit';
import titlesSlice from './words-slice';
import appStateSlice from './app-state-slice';
import fireBaseSlice from './firebase-slice';
import userStateSlice from './user-slice';

const store = configureStore({
  reducer: {
    words: titlesSlice.reducer,
    appState: appStateSlice.reducer,
    fireBase: fireBaseSlice.reducer,
    userSlice: userStateSlice.reducer,
  },
});

export default store;

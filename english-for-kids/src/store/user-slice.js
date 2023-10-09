import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  uid: null,
  email: null,
  token: null,
};

const sliceUserStateConfig = {
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser(state, action) {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    removeUser(state) {
      state.uid = null;
      state.email = null;
      state.token = null;
    },
  },
};

const userStateSlice = createSlice(sliceUserStateConfig);

export const userStateActions = userStateSlice.actions;

export default userStateSlice;

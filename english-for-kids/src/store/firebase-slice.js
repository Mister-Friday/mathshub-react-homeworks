import { createSlice } from '@reduxjs/toolkit';

const initialFireBase = {
  fireBaseUrl: `https://english-for-kids-43482-default-rtdb.europe-west1.firebasedatabase.app`,
};

const sliceFireBaseConfig = {
  name: 'FireBaseConfig',
  initialState: initialFireBase,
  reducers: {},
};

const fireBaseSlice = createSlice(sliceFireBaseConfig);

export default fireBaseSlice;

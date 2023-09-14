import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialPackageState = { packageList: [] };

const packageSlice = createSlice({
  name: 'package',
  initialState: initialPackageState,
  reducers: {
    packageAdd(state, action) {
      state.packageList = [...state.packageList, action.payload];

      console.log('state=', state.packageList);
    },
  },
});

const store = configureStore({
  reducer: packageSlice.reducer,
});

// const initialPackagesState = { counter: 0, showPackages: true };

// const packageSlice = createSlice({
//   name: 'package',
//   initialState: initialPackagesState,
//   redusers: {},
// });

// const counterReduser = (state = { counter: 0 }, action) => {
//   return {
//     counter: counter + 1,
//   };
// };

// const store = configureStore({
//   reducer: { counter: packageSlice.reducer },
// });

// export const packageActions = packageSlice.actions;

export const packageActions = packageSlice.actions;

export default store;

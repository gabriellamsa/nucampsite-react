import { configureStore } from '@reduxjs/toolkit';
import campsitesReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: campsitesReducer,
  }
});

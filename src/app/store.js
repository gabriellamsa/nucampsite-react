import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsitesSlice';

const store = configureStore({
  reducer: {
    campsites: campsitesReducer
  }
});

console.log(store.getState());

export default store;
import { configureStore } from '@reduxjs/toolkit';
import apiInfoReducer from './APISlice';

export const store = configureStore({
  reducer: {
    apiInfo: apiInfoReducer,
  },
});

export default store;

import { createSlice } from '@reduxjs/toolkit';
import {
  localStorageGetAPIInfo,
  localStorageSaveAPIInfo,
} from '../localstorage/localstorageService';

const initialState = localStorageGetAPIInfo(); // Ensure it's an array

const APIInfoSlice = createSlice({
  name: 'apiInfo',
  initialState,
  reducers: {
    addAPI: (state, action) => {
      const { apiProducer, apiVersion, apiKey } = action.payload;
      state.push({ producer: apiProducer, version: apiVersion, key: apiKey });
      localStorageSaveAPIInfo(state);
    },

    deleteAPI: (state, action) => {
      const { index } = action.payload;
      if (index >= 0 && index < state.length) {
        state.splice(index, 1);
        localStorageSaveAPIInfo(state);
      }
    },
  },
});

export const { addAPI, deleteAPI } = APIInfoSlice.actions;
export default APIInfoSlice.reducer;

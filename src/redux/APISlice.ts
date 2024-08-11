import { createSlice } from '@reduxjs/toolkit';
import {
  localStorageGetAPIInfo,
  localStorageSaveAPIInfo,
} from '../localstorage/localstorageService';

const initialState = localStorageGetAPIInfo(); 

const APIInfoSlice = createSlice({
  name: 'apiInfo',
  initialState,
  reducers: {
    addAPI: (state, action) => {
      const { apiProvider, apiVersion, apiKey } = action.payload;
      state.push({ provider: apiProvider, version: apiVersion, key: apiKey });
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

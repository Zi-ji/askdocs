import { configureStore } from '@reduxjs/toolkit';
import queriesReducer from './queriesSlice';

const store = configureStore({
  reducer: {
    queriesReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

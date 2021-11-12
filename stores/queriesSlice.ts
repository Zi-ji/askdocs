import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface SingleQuery {
  id: number;
  title: string;
  photos: string[];
  description: string;
  doctor: {} | undefined; // To do: type doctor object
  chat: {}[]; // To do: type message and chat object
  resolved: boolean;
}

interface QueriesState {
  queries: SingleQuery[];
}

const initialState: QueriesState = {
  queries: []
};

export const queriesSlice = createSlice({
  name: 'queries',
  initialState,
  reducers: {
    addQuery: (state, action: PayloadAction<SingleQuery>) => {
      state.queries = [...state.queries, action.payload];
    },
    removeQuery: (state, action: PayloadAction<number>) => {
      const newQueries = state.queries.filter((q) => q.id != action.payload);
      state.queries = [...newQueries];
    }
  }
});

export const { addQuery, removeQuery } = queriesSlice.actions;
export const selectQueries = (state: RootState) => state.queriesReducer.queries;

export default queriesSlice.reducer;

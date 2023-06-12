import { createSlice } from '@reduxjs/toolkit';
import database from '../../global';

const initialState = { data: database };

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.data.push(action.payload);
    },
    removeBook: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;

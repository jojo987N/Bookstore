import { createSlice } from '@reduxjs/toolkit';
import database from '../../global.json';
import objectPropsToCamelCase from '../../utils';

const initialState = { data: database.map((item) => objectPropsToCamelCase(item)) };

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.data.push({
        ...action.payload,
        category: 'Action',
      });
    },
    removeBook: (state, action) => {
      state.data = state.data.filter((item) => item.itemId !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;

import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import BASE_URL, { APP_ID } from '../../global';

export const getAppId = createAsyncThunk('books/getAppId', async (arg, { rejectWithValue }) => {
  try {
    const data = await axios.post(`${BASE_URL}apps`);
    return data.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getBooks = createAsyncThunk('books/getBooks', async (arg, { rejectWithValue }) => {
  try {
    const data = await axios.get(`${BASE_URL}apps/${APP_ID}/books`);
    return Object.entries(data.data);
  } catch (error) {
    return rejectWithValue(error);
  }
});
export const addBook = createAsyncThunk('books/addBook', async (arg, { rejectWithValue }) => {
  const book = {
    author: arg[1][0].author,
    title: arg[1][0].title,
    item_id: arg[1][0].item_id,
    category: 'Action',
  };
  try {
    const data = await axios.post(`${BASE_URL}apps/${APP_ID}/books`, book);
    return data.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (arg, { rejectWithValue }) => {
  try {
    const data = await axios.delete(`${BASE_URL}apps/${APP_ID}/books/${arg}`);
    console.log(data);
    return data.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const initialState = {
  appId: '',
  data: [],
  isLoading: false,
  error: undefined,
};
export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBookToStore: (state, action) => {
      state.data.push(action.payload);
    },
    removeBookFromStore: (state, action) => {
      state.data = state.data.filter((item) => item[0] !== action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { addBookToStore, removeBookFromStore } = booksSlice.actions;

export default booksSlice.reducer;

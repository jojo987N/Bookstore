import { createSlice } from '@reduxjs/toolkit';

const initialState = { categories: [], status: 'Under construction', checkStatus: true };

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.checkStatus = state.checkStatus === 'Under construction';
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;

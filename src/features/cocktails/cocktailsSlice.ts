import { createSlice } from '@reduxjs/toolkit';

import { fetchCocktails } from './cocktailsActions';
import { CocktailsState } from './cocktailsTypes';

const initialState: CocktailsState = {
  cocktailsByCode: {},
  loading: false,
  error: null,
};

const cocktailsSlice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCocktails.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktailsByCode[action.payload.cocktailCode] = action.payload.cocktails;
      })
      .addCase(fetchCocktails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch cocktails';
      });
  },
});

export default cocktailsSlice.reducer;

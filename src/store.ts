import { configureStore } from '@reduxjs/toolkit';

import cocktailsReducer from './features/cocktails/cocktailsSlice';

export const store = configureStore({
  reducer: {
    cocktails: cocktailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

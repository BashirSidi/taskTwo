import {configureStore} from '@reduxjs/toolkit'
import urlShortenerReducer from './features/urlShortenerSlice';

export const store = configureStore({
  reducer: {
    urlShortenerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { configureStore } from '@reduxjs/toolkit';
import AnimeSlice from './features/AnimeSlice';


export const store = configureStore({
    reducer: {
      anime: AnimeSlice,
    },
});

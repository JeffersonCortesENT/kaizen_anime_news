import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAnimeNews, fetchTop10Anime, fetchTop10Seasonal } from '../requests/externalApi';

const initialState = {
    aAnimeNews: [],
    aTop10Seasonal: [],
    bLoading: false,
};

export const getAnimeNews = createAsyncThunk(
    'anime/getAnimeNews',
    async (oParams) => {
        const oResponse = await fetchAnimeNews(oParams);
        return oResponse.data
    }
);

export const getTop10Seasonal = createAsyncThunk(
  'anime/getTop10Seasonal',
  async (oParams) => {
      const oResponse = await fetchTop10Seasonal(oParams);
      return oResponse.data
  }
);

export const getTop10Anime = createAsyncThunk(
  'anime/getTop10Anime',
  async (oParams) => {
      const oResponse = await fetchTop10Anime(oParams);
      return oResponse.data
  }
);

export const animeSlice = createSlice({
    name: 'anime',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAnimeNews.pending, (state) => {
                state.bLoading = true;
            })
            .addCase(getAnimeNews.fulfilled, (state, action) => {
                state.aAnimeNews = action.payload.data;
                state.bLoading = false;
            })
            .addCase(getTop10Seasonal.pending, (state) => {
              state.bLoading = true;
            })
            .addCase(getTop10Seasonal.fulfilled, (state, action) => {
                state.aTop10Seasonal = action.payload;
                console.log(state.aTop10Seasonal);
                state.bLoading = false;
            })
    }
});

// export const {
// } = getAnnReports.actions;

export const selectAnimeNews = (state) => state.anime.aAnimeNews;

export default animeSlice.reducer;

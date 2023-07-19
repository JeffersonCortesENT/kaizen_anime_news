import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAnimeNews, fetchTop10Anime, fetchTop10Seasonal, fetchUpcoming } from '../requests/externalApi';

const initialState = {
    aUpcoming: [],
    aAnimeNews: [],
    aTop10Seasonal: [],
    bLoading: false,
};

export const getUpcoming = createAsyncThunk(
  'anime/getUpcoming',
  async (oParams) => {
      const oResponse = await fetchUpcoming(oParams);
      return oResponse.data
  }
);

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
            .addCase(getUpcoming.pending, (state) => {
              state.bLoading = true;
            })
            .addCase(getUpcoming.fulfilled, (state, action) => {
                state.aUpcoming = action.payload.data.data;
                state.bLoading = false;
            })
            .addCase(getAnimeNews.pending, (state) => {
                state.bLoading = true;
            })
            .addCase(getAnimeNews.fulfilled, (state, action) => {
                state.aAnimeNews = action.payload.data.data;
                state.bLoading = false;
            })
            .addCase(getTop10Seasonal.pending, (state) => {
              state.bLoading = true;
            })
            .addCase(getTop10Seasonal.fulfilled, (state, action) => {
                state.aTop10Seasonal = action.payload.data.data;
                console.log(state.aTop10Seasonal);
                state.bLoading = false;
            })
    }
});

// export const {
// } = getAnnReports.actions;

export const selectUpcoming = (state) => state.anime.aUpcoming;
export const selectAnimeNews = (state) => state.anime.aAnimeNews;

export default animeSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAnimeNews, fetchAnimeSearch, fetchTop10Anime, fetchTop10Seasonal, fetchUpcoming } from '../requests/externalApi';
import sweetAlert from '../alertMessages';
import { DESC, SCORE_VALUE } from '../constants';

const initialState = {
    aUpcoming: [],
    aAnimeNews: [],
    aTop10Seasonal: [],
    oPagination: {
      last_visible_page: 0,
      has_next_page: false,
      current_page: 1,
    },
    aAnimeSearch: [],
    oSearchParams: {
      page: 1,
      order_by: SCORE_VALUE,
      type: '',
      status: '',
      rating: '',
      limit: 12,
      q: '',
      sort: DESC,
    },
    bLoading: true,
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

export const getAnimeSearch = createAsyncThunk(
  'anime/getAnimeSearch',
  async (oParams) => {
      const oResponse = await fetchAnimeSearch(oParams);
      return oResponse.data
  }
);

export const animeSlice = createSlice({
    name: 'anime',
    initialState,
    reducers: {
      setLoadingStatus: (state, action) => {
        const { value } = action.payload;
        state.bLoading = value;
      },
      setCurrentPage: (state, action) => {
        const { value } = action.payload;
        state.oSearchParams.page = value;
      },
      setSearchParams: (state, action) => {
        const { name, value } = action.payload;
        state.oSearchParams[name] = value;
      }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUpcoming.fulfilled, (state, action) => {
              state.aUpcoming = action.payload.data.data;
              state.bLoading = false;
            })
            .addCase(getUpcoming.rejected, (state, action) => {
              state.bLoading = false;
              throw action.error;
            })
            .addCase(getAnimeNews.fulfilled, (state, action) => {
              state.aAnimeNews = action.payload.data;
              state.bLoading = false;
            })
            .addCase(getAnimeNews.rejected, (state, action) => {
              state.bLoading = false;
              throw action.error;
            })
            .addCase(getTop10Seasonal.fulfilled, (state, action) => {
              state.aTop10Seasonal = action.payload.data.data;
              state.bLoading = false;
            })
            .addCase(getTop10Seasonal.rejected, (state, action) => {
              state.bLoading = false;
              throw action.error;
            })
            .addCase(getAnimeSearch.fulfilled, (state, action) => {
              state.bLoading = false;
              state.aAnimeSearch = action.payload.data.data;
              state.oPagination = action.payload.data.pagination;
            })
            .addCase(getAnimeSearch.rejected, (state) => {
              sweetAlert.error('Request Error', 'An error occured!');
              state.bLoading = false;
            })
    }
});

export const {
  setLoadingStatus,
  setCurrentPage,
  setSearchParams,
} = animeSlice.actions;

export const selectUpcoming = (state) => state.anime.aUpcoming;
export const selectAnimeNews = (state) => state.anime.aAnimeNews;
export const selectLoading = (state) => state.anime.bLoading;
export const selectTopSeasonal = (state) => state.anime.aTop10Seasonal;
export const selectAnimeSearch = (state) => state.anime.aAnimeSearch;
export const selectPagination = (state) => state.anime.oPagination;
export const selectSearchParams = (state) => state.anime.oSearchParams;

export default animeSlice.reducer;

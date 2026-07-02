import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/animeApi";

export const fetchTrendingAnimes = createAsyncThunk(
  "anime/fetchTrendingAnimes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/top/anime");
      return response.data.data;
      // console.log("test ",response.data.data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchSeasonalAnimes = createAsyncThunk(
  "anime/fetchSeasonalAnimes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/seasons/now");
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchAnimeList = createAsyncThunk(
  "anime/fetchAnimeList",
  async ({ search , type , genre }, { rejectWithValue }) => {
    try {
      const response = await api.get("/anime", {
        params: {
          q: search,
          type:type,
          genres: genre,
        },
      });

      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  trendingAnimes: [],
  trendingLoading: false,
  trendingError: null,

  seasonalAnimes: [],
  seasonalLoading: false,
  seasonalError: null,

  animeList: [],
  animeLoading: false,
  animeError: null,

  search: "",
  type: "",
  genre: "",
};

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },

    setType(state, action) {
      state.type = action.payload;
    },

    setGenre(state, action) {
      state.genre = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingAnimes.pending, (state) => {
        state.trendingLoading = true;
        state.trendingError = null;
      })

      .addCase(fetchTrendingAnimes.fulfilled, (state, action) => {
        state.trendingLoading = false;
        state.trendingAnimes = action.payload;
      })

      .addCase(fetchTrendingAnimes.rejected, (state, action) => {
        state.trendingLoading = false;
        state.trendingError = action.payload;
      })

      // *********************************

      .addCase(fetchSeasonalAnimes.pending, (state) => {
        state.seasonalLoading = true;
        state.seasonalError = null;
      })

      .addCase(fetchSeasonalAnimes.fulfilled, (state, action) => {
        state.seasonalLoading = false;
        state.seasonalAnimes = action.payload;
      })

      .addCase(fetchSeasonalAnimes.rejected, (state, action) => {
        state.seasonalLoading = false;
        state.seasonalError = action.payload;
      })

      // ****************************
      .addCase(fetchAnimeList.pending, (state) => {
        state.animeLoading = true;
        state.animeError = null;
      })

      .addCase(fetchAnimeList.fulfilled, (state, action) => {
        state.animeLoading = false;
        state.animeList = action.payload;
      })

      .addCase(fetchAnimeList.rejected, (state, action) => {
        state.animeLoading = false;
        state.animeError = action.payload;
      });
  },
});

export const { setSearch, setType, setGenre } = animeSlice.actions;
export default animeSlice.reducer;

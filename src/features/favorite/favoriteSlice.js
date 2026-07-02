import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import favoriteApi from "../../services/favoriteApi";


export const fetchFavorites = createAsyncThunk(
  "favorite/fetchFavorites",
  async (_, { rejectWithValue }) => {
    try {
      const response = await favoriteApi.get("/favorites");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const addFavorite = createAsyncThunk(
  "favorite/addFavorite",
  async (anime, { rejectWithValue }) => {
    try {
         const { data } = await favoriteApi.get("/favorites");   
         const exist = data.find(
            (item) => item.mal_id === anime.mal_id
        );
        if (exist) {
        return exist;
      }
      const response = await favoriteApi.post("/favorites", anime);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const deleteFavorite = createAsyncThunk(
  "favorite/deleteFavorite",
  async (id, { rejectWithValue }) => {
    try {
      await favoriteApi.delete(`/favorites/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



const initialState = {
  favorites: [],
  loading: false,
  error: null,
};


const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.favorites = action.payload;
      })

      .addCase(fetchFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //********* 

      .addCase(addFavorite.pending, (state) => {
        state.loading = true;
      })

      .addCase(addFavorite.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
            state.favorites.push(action.payload);
        }
      })

      .addCase(addFavorite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

    //   ********************


        .addCase(deleteFavorite.pending, (state) => {
            state.loading = true;
            state.error = null;
        })

        .addCase(deleteFavorite.fulfilled, (state, action) => {
            state.loading = false;
            state.favorites = state.favorites.filter(
                (favorite) => favorite.id !== action.payload
            );
        })

        .addCase(deleteFavorite.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
  },
});

export default favoriteSlice.reducer;
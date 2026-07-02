

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



const initialState = {
  favorites: [],
  loading: false,
  error: null,
};
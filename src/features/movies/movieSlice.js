import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMovie } from "./movieAPI";

const initialState = {
  status: "idle",
  error: null,
  movies: {},
};

export const fetchMovieByAsync = createAsyncThunk("movie/fetchMovie", () =>
  fetchMovie()
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieByAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieByAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.movies = action.payload;
      })
      .addCase(fetchMovieByAsync.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;

export const selectMovies = (state) => state.movie.movies;
export const selectMovieStatus = (state) => state.movie.status;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDetails, fetchMovie, fetchShow } from "./fetchAPIs";

const initialState = {
  status: "idle",
  error: null,
  movies: {},
  shows: {},
  details: {},
};

export const fetchMovieByAsync = createAsyncThunk("data/fetchMovie", () =>
  fetchMovie()
);

export const fetchShowByAsync = createAsyncThunk("data/fetchShow", () =>
  fetchShow()
);

export const fetchDetailsByAsync = createAsyncThunk("data/fetchDetails", (id) =>
  fetchDetails(id)
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.details = {};
    },
  },
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
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchShowByAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchShowByAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.shows = action.payload;
      })
      .addCase(fetchShowByAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchDetailsByAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDetailsByAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.details = action.payload;
      })
      .addCase(fetchDetailsByAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;

export const { removeSelectedMovieOrShow } = dataSlice.actions;
export const selectMovies = (state) => state.data.movies;
export const selectShows = (state) => state.data.shows;
export const selectStatus = (state) => state.data.status;
export const selectDetails = (state) => state.data.details;

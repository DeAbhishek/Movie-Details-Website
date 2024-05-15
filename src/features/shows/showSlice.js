import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchShow } from "./showAPI";

const initialState = {
  status: "idle",
  error: null,
  shows: {},
};

export const fetchShowByAsync = createAsyncThunk("show/fetchShow", () =>
  fetchShow()
);

const showSlice = createSlice({
  name: "show",
  initialState,
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export default showSlice.reducer;

export const selectShows = (state) => state.show.shows;
export const selectShowStatus = (state) => state.show.status;

import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "./movies/movieSlice";
import showReducer from "./shows/showSlice";

export const store = configureStore({
  reducer: { movie: movieReducer, show: showReducer },
});

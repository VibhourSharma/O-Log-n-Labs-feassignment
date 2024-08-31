import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherDataSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "../course/courseSlice";

export const store = configureStore({
  reducer: { course: courseReducer },
});

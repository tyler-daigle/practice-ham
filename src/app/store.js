import { configureStore } from "@reduxjs/toolkit";
import examTypeReducer from "./examSlice";

export default configureStore({
  reducer: {
    examType: examTypeReducer,
  },
});

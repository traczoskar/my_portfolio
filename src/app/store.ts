import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice";
import projectDetailsReducer from "../slices/projectDetailsSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    projectDetails: projectDetailsReducer,
  },
});

export default store;

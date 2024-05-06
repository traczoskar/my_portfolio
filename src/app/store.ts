import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice";
import projectDetailsReducer from "../slices/projectDetailsSlice";
import selectedProjectReducer from "../slices/selectedProjectSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    projectDetails: projectDetailsReducer,
    selectedProject: selectedProjectReducer,
  },
});

export default store;

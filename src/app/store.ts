import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice";
import languageReducer from "../slices/languageSlice";
import projectDetailsReducer from "../slices/projectDetailsSlice";
import selectedProjectReducer from "../slices/selectedProjectSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    projectDetails: projectDetailsReducer,
    selectedProject: selectedProjectReducer,
  },
});

export default store;

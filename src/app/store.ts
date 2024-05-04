import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice";
import modalReducer from "../slices/modalSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    modal: modalReducer,
  },
});

export default store;

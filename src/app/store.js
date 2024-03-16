import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../common/ThemeSwitch/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;

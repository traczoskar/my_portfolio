import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "../types/types";

const initialState: ThemeState = {
  isDarkTheme: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

const selectThemeState = (state: any) => state.theme;

export const selectIsDarkTheme = (state: any) =>
  selectThemeState(state).isDarkTheme;

export default themeSlice.reducer;

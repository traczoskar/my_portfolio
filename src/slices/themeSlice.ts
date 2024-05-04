import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  isDarkTheme: boolean;
}

const initialState: ThemeState = {
  isDarkTheme: false,
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

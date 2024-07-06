import { createSlice } from "@reduxjs/toolkit";
import { LanguageState } from "../types/types";
import { getLanguageStateFromLocalStorage } from "../utils/languageLocalStorage";

const initialState: LanguageState = {
  isLanguageEN: getLanguageStateFromLocalStorage(),
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.isLanguageEN = !state.isLanguageEN;
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;

const selectLanguageState = (state: any) => state.language;

export const selectIsLanguageEN = (state: any) =>
  selectLanguageState(state).isLanguageEN;

export default languageSlice.reducer;

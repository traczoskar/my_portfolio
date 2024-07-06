const localStorageKey = "language";

export const saveLanguageStateInLocalStorage = (isLanguageEN: boolean) =>
  localStorage.setItem(localStorageKey, JSON.stringify(isLanguageEN));

const languageFromLocalStorage = localStorage.getItem(localStorageKey);

export const getLanguageStateFromLocalStorage = (): boolean =>
  languageFromLocalStorage ? JSON.parse(languageFromLocalStorage) : true;

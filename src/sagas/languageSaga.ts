import { call, select, takeEvery } from "redux-saga/effects";
import { saveLanguageStateInLocalStorage } from "../utils/languageLocalStorage";
import { selectIsLanguageEN } from "../slices/languageSlice";

function* saveLanguageInLocalStorageHandler(): Generator<any, void, any> {
  const isLanguageEN = yield select(selectIsLanguageEN);
  yield call(saveLanguageStateInLocalStorage, isLanguageEN);
}

export function* languageSaga() {
  yield takeEvery("*", saveLanguageInLocalStorageHandler);
}

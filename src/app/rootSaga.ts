import { all } from "redux-saga/effects";
import { languageSaga } from "../sagas/languageSaga";

export default function* rootSaga() {
  yield all([languageSaga()]);
}

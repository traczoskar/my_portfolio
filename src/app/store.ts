import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice";
import languageReducer from "../slices/languageSlice";
import projectDetailsReducer from "../slices/projectDetailsSlice";
import selectedProjectReducer from "../slices/selectedProjectSlice";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware: SagaMiddleware<object> = createSagaMiddleware();

const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    projectDetails: projectDetailsReducer,
    selectedProject: selectedProjectReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;

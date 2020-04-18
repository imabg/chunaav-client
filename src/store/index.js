import { createStore, applyMiddleware, compose } from "redux";
// import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import rootReducer from "../reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
  // compose(
  //   applyMiddleware(sagaMiddleware)
  //   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);

sagaMiddleware.run(rootSaga);

export default store;

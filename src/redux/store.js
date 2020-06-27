import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV === "development") {
    middlewares.push();
  }

  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  sagaMiddleware.run(rootSaga);

  return store;
}

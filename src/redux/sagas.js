import { all } from "redux-saga/effects";
import { saga as productSaga } from "../pages/Products";

export default function* rootSaga() {
  yield all([productSaga()]);
}

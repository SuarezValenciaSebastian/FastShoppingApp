import { all } from "redux-saga/effects";
import { saga as productSaga } from "../pages/Products";
import { saga as checkoutSaga } from "../pages/Checkout";

export default function* rootSaga() {
  yield all([productSaga(), checkoutSaga()]);
}

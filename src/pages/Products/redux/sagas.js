import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { PRODUCTS_FETCH_API__START, productApiFetchSuccess } from "./actions";
import { actions as NotifierActions } from "../../../components/shared/Notifier";

function* getProducts({ payload }) {
  try {
    const response = yield call(axios.get, `/products?page=${payload}`);
    yield put(productApiFetchSuccess(response.data));
  } catch (error) {
    yield put(NotifierActions.pushNotification(JSON.stringify(error)));
    yield put(NotifierActions.pushNotification(JSON.stringify(error)));
  }
}

export default function* products() {
  yield takeLatest(PRODUCTS_FETCH_API__START, getProducts);
}

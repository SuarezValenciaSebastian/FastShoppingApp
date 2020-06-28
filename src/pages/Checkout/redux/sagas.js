import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { CUSTOMER_FETCH_API__START, costumerApiFetchSuccess } from "./actions";

function* getCustomer({ payload }) {
  try {
    const response = yield call(
      axios.get,
      `http://localhost:3001/api/customers/by-email/${payload}`
    );
    yield put(costumerApiFetchSuccess(response.data));
  } catch (error) {}
}

export default function* products() {
  yield takeLatest(CUSTOMER_FETCH_API__START, getCustomer);
}

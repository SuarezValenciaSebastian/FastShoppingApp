import {
  CHECKOUT_USER_TYPE__CHANGE,
  CUSTOMER_FETCH_API__SUCCESS,
  CUSTOMER_FETCH_API__RESET,
  CUSTOMER_ATTRIBUTE__CHANGE,
} from "./actions";

import { NEW } from "../constants/userType";

const initialState = {
  userType: NEW,
  fetched: false,
  id: null,
  name: "",
  identification: "",
  address: "",
  phone: "",
  email: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHECKOUT_USER_TYPE__CHANGE:
      return { ...initialState, userType: payload };
    case CUSTOMER_FETCH_API__SUCCESS:
      return { ...state, ...payload, fetched: true };
    case CUSTOMER_FETCH_API__RESET:
      return { ...initialState, userType: state.userType };
    case CUSTOMER_ATTRIBUTE__CHANGE: {
      const tempCustomer = { ...state };
      tempCustomer[payload.name] = payload.value;
      return { ...tempCustomer };
    }
    default:
      return state;
  }
};

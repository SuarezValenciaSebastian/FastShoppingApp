export const CHECKOUT_USER_TYPE__CHANGE = "CHECKOUT_USER_TYPE__CHANGE";
export const CUSTOMER_FETCH_API__START = "CUSTOMER_FETCH_API__START";
export const CUSTOMER_FETCH_API__SUCCESS = "CUSTOMER_FETCH_API__SUCCESS";
export const CUSTOMER_FETCH_API__RESET = "CUSTOMER_FETCH_API__RESET";
export const CUSTOMER_ATTRIBUTE__CHANGE = "CUSTOMER_ATTRIBUTE__CHANGE";

export const changeUserType = (payload) => ({
  type: CHECKOUT_USER_TYPE__CHANGE,
  payload,
});

export const startCustomerApiFetch = (payload) => ({
  type: CUSTOMER_FETCH_API__START,
  payload,
});

export const costumerApiFetchSuccess = (payload) => ({
  type: CUSTOMER_FETCH_API__SUCCESS,
  payload,
});

export const resetApiFetch = (payload) => ({
  type: CUSTOMER_FETCH_API__RESET,
  payload,
});

export const changeCustomerAttribute = (payload) => ({
  type: CUSTOMER_ATTRIBUTE__CHANGE,
  payload,
});

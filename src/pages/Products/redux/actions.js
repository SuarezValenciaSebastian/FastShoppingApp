export const PRODUCTS_FETCH_API__START = "PRODUCTS_FETCH_API__START";
export const PRODUCTS_FETCH_API__SUCCESS = "PRODUCTS_FETCH_API__SUCCESS";
export const PRODUCTS_SORT_BY__CHANGE = "PRODUCTS_SORT_BY__CHANGE";

export const startProductApiFetch = (payload) => ({
  type: PRODUCTS_FETCH_API__START,
  payload,
});

export const productApiFetchSuccess = (payload) => ({
  type: PRODUCTS_FETCH_API__SUCCESS,
  payload,
});

export const changeSortBy = (payload) => ({
  type: PRODUCTS_SORT_BY__CHANGE,
  payload,
});

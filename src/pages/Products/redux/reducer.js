import {
  PRODUCTS_FETCH_API__START,
  PRODUCTS_FETCH_API__SUCCESS,
  PRODUCTS_SORT_BY__CHANGE,
} from "./actions";

const initialState = {
  page: 1,
  count: 0,
  list: [],
  sortBy: "name",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_FETCH_API__START:
      return { ...state, page: payload };
    case PRODUCTS_FETCH_API__SUCCESS:
      return {
        ...state,
        list: payload.rows,
        count: payload.count,
      };
    case PRODUCTS_SORT_BY__CHANGE:
      return { ...state, sortBy: payload };
    default:
      return state;
  }
};

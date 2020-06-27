import {
  SHOPPING_CART_ITEM__ADD,
  SHOPPING_CART_ITEM__CHANGE_AMOUNT,
  SHOPPING_CART_ITEM__REMOVE,
} from "./actions";

const initialState = {
  list: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOPPING_CART_ITEM__ADD: {
      const tempList = { ...state.list };
      if (!tempList[payload.id]) {
        tempList[payload.id] = { ...payload, amount: 1 };
      }
      return { ...state, list: tempList };
    }
    case SHOPPING_CART_ITEM__CHANGE_AMOUNT: {
      const tempList = { ...state.list };
      tempList[payload.id].amount = payload.amount;
      return { ...state, list: tempList };
    }
    case SHOPPING_CART_ITEM__REMOVE: {
      const tempList = { ...state.list };
      delete tempList[payload];
      return { ...state, list: tempList };
    }
    default:
      return state;
  }
};

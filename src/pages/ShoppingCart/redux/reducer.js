import { SHOPPING_CART_ITEM__ADD } from "./actions";

const initialState = {
  list: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOPPING_CART_ITEM__ADD: {
      const tempList = { ...state.list };
      if (tempList[payload.id]) {
        tempList[payload.id].amount += 1;
      } else {
        tempList[payload.id] = { ...payload, amount: 1 };
      }
      return { ...state, list: tempList };
    }
    default:
      return state;
  }
};

export const SHOPPING_CART_ITEM__ADD = "SHOPPING_CART_ITEM__ADD";
export const SHOPPING_CART_ITEM__REMOVE = "SHOPPING_CART_ITEM__REMOVE";
export const SHOPPING_CART_ITEM__CHANGE_AMOUNT =
  "SHOPPING_CART_ITEM__CHANGE_AMOUNT";

export const addItem = (payload) => ({
  type: SHOPPING_CART_ITEM__ADD,
  payload,
});

export const removeItem = (payload) => ({
  type: SHOPPING_CART_ITEM__REMOVE,
  payload,
});

export const changeAmount = (payload) => ({
  type: SHOPPING_CART_ITEM__CHANGE_AMOUNT,
  payload,
});

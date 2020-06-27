export const SHOPPING_CART_ITEM__ADD = "SHOPPING_CART_ITEM__ADD";

export const addItem = (payload) => ({
  type: SHOPPING_CART_ITEM__ADD,
  payload,
});

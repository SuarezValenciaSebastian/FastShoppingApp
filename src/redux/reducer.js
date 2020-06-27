import { combineReducers } from "redux";
import { reducer as productsReducer } from "../pages/Products";
import { reducer as shoppingCartReducer } from "../pages/ShoppingCart";

export default combineReducers({
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
});

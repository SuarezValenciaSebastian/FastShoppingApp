import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { reducer as productsReducer } from "../pages/Products";
import { reducer as shoppingCartReducer } from "../pages/ShoppingCart";
import { reducer as checkoutReducer } from "../pages/Checkout";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["shoppingCart"],
};

const reducer = combineReducers({
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
  checkout: checkoutReducer,
});

export default persistReducer(persistConfig, reducer);

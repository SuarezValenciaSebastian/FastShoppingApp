import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { reducer as productsReducer } from "../pages/Products";
import { reducer as shoppingCartReducer } from "../pages/ShoppingCart";

const persistConfig = {
  key: "roor",
  storage,
  whitelist: ["shoppingCart"],
};

const reducer = combineReducers({
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
});

export default persistReducer(persistConfig, reducer);

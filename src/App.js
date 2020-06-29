import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import Thanks from "./pages/Thanks";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/thanks">
            <Thanks />
          </Route>
          <Route path="/shopping-cart">
            <ShoppingCart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Products />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

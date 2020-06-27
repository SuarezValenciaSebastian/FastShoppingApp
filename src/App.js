import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/shopping-cart">
            <ShoppingCart />
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

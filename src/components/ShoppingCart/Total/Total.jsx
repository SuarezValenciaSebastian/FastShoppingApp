import React from "react";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";

const Total = () => {
  const products = useSelector((state) =>
    Object.values(state.shoppingCart.list)
  );
  return (
    <Typography variant="h5" component="span" display="block">
      Total: $
      {products.reduce(
        (acc, product) => acc + product.price * product.amount,
        0
      )}
    </Typography>
  );
};

export default Total;

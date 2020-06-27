import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import ProductSummary from "./Card";

const List = () => {
  const products = useSelector((state) => state.shoppingCart.list);

  return (
    <Grid container direction="column" spacing={3}>
      {Object.values(products).map((product) => (
        <Grid key={`sc-product-${product.id}`} item xs={12}>
          <ProductSummary product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default List;

import React from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import ProductCard from "../Card";

const List = () => {
  const products = useSelector((state) => state.products.list);
  const sortBy = useSelector((state) => state.products.sortBy);

  return (
    <Grid container spacing={1}>
      {_.sortBy(products, sortBy).map((product) => {
        return (
          <Grid key={`product-${product.id}`} item xs={12} lg={6}>
            <ProductCard product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default List;

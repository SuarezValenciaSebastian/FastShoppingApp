import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MuiContainer from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Header from "../../components/shared/Header";
import ProductsListSort from "../../components/Products/SortSelect";
import ProductsList from "../../components/Products/List";
import ProductsListPagination from "../../components/Products/Pagination";
import { startProductApiFetch } from "./redux/actions";

const Container = styled(MuiContainer)`
  padding: 1rem 0;
`;

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startProductApiFetch(1));
  });

  return (
    <>
      <Header variant="home" />
      <Container component="main">
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Grid container justify="flex-end">
              <Grid item>
                <ProductsListSort />
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <ProductsList />
          </Grid>

          <Grid item>
            <Grid container justify="center">
              <Grid item>
                <ProductsListPagination />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Products;

import React from "react";
import { Link } from "react-router-dom";
import MuiContainer from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import styled from "styled-components";
import Header from "../../components/shared/Header";
import CartList from "../../components/ShoppingCart/List";
import CartTotal from "../../components/ShoppingCart/Total";
import CheckoutButton from "../../components/ShoppingCart/CheckoutButton";

const Container = styled(MuiContainer)`
  padding: 1.6rem 0;
`;

const ShoppingCart = () => {
  return (
    <>
      <Header />
      <Container component="main">
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <Typography variant="h3">Shopping Cart</Typography>
              <Box ml="auto" mr={0}>
                <CheckoutButton />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <CartList />
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <MuiLink component={Link} to="/">
                Continue Shopping
              </MuiLink>
              <Box ml="auto" mr={0}>
                <CartTotal />
                <CheckoutButton />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ShoppingCart;

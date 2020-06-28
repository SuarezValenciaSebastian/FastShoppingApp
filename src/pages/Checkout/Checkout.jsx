import React from "react";
import { useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Header from "../../components/shared/Header";
import CheckoutCustomerInformation from "../../components/Checkout/CustomerInformation";
import CheckoutOrderSummary from "../../components/Checkout/OrderSummary";
import CartTotal from "../../components/shared/Total";

const validateCustomer = (customer) => {
  return !(
    customer.name !== "" &&
    customer.identification !== "" &&
    customer.address !== "" &&
    customer.phone !== "" &&
    customer.email !== ""
  );
};

const Checkout = () => {
  const customer = useSelector((state) => state.checkout);

  return (
    <>
      <Header />
      <Container component="main">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <CheckoutCustomerInformation />
          </Grid>
          <Grid item xs={12} lg={6}>
            <CheckoutOrderSummary />
            <Box display="flex" mt={3}>
              <Box ml="auto" mr="0">
                <CartTotal />
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  disabled={validateCustomer(customer)}
                >
                  Place order
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Checkout;

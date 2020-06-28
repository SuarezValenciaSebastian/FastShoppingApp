import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const CheckoutButton = () => {
  return (
    <Button
      color="primary"
      variant="contained"
      component={Link}
      to="/checkout"
      fullWidth
    >
      Checkout
    </Button>
  );
};

export default CheckoutButton;

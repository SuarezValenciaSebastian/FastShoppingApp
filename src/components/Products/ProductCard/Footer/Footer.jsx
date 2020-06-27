import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { addItem } from "../../../../pages/ShoppingCart/redux/actions";

const Footer = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <Grid container>
      <Grid item xs={9}>
        <Button color="primary" size="small" onClick={handleAddToCart}>
          Add to the cart
        </Button>
      </Grid>
      <Grid item>
        <Typography align="right">${product.price}</Typography>
      </Grid>
    </Grid>
  );
};

Footer.propTypes = {
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Footer;

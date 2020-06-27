import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import ProductName from "./Text";
import QuantitySelect from "./QuantitySelect";
import ProductImage from "./71L2iBSyyOL._AC_SX679_.jpg";

const Image = styled.img`
  object-fit: contain;
  height: 100px;
  width: 100px;
`;

const GrownGridItem = styled(Grid)`
  flex-grow: 1;
`;

const Card = ({ product: { id, price, amount } }) => {
  return (
    <Paper>
      <Grid container>
        <Grid item>
          <Image src={ProductImage} />
        </Grid>
        <GrownGridItem item>
          <Grid container>
            <Grid item xs={9}>
              <ProductName id={id} />
            </Grid>
            <Grid item xs={1}>
              <Typography>Unit price</Typography>
              <Typography>${price}</Typography>
            </Grid>
            <Grid item xs={1}>
              <QuantitySelect id={id} value={amount} />
            </Grid>
            <Grid item xs={1}>
              <Typography>${Number(price) * amount}</Typography>
            </Grid>
          </Grid>
        </GrownGridItem>
      </Grid>
    </Paper>
  );
};

Card.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number,
    amount: PropTypes.number,
  }).isRequired,
};

export default Card;

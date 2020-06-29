import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import ProductName from "./Text";
import QuantitySelect from "./QuantitySelect";
import { API_URL } from "../../../../config/default";

const Image = styled.img`
  object-fit: contain;
  height: 100px;
  width: 100px;
`;

const GrownGridItem = styled(Grid)`
  flex-grow: 1;
`;

const Card = ({ product: { id, image, name, Categories, price, amount } }) => {
  return (
    <Paper>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Image src={`${API_URL}/images/${image}`} />
        </Grid>
        <GrownGridItem item>
          <Box p={1}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={9}>
                <ProductName id={id} name={name} categories={Categories} />
              </Grid>
              <Grid item xs={12} lg={1}>
                <Typography>Unit price</Typography>
                <Typography>${price}</Typography>
              </Grid>
              <Grid item xs={12} lg={1}>
                <QuantitySelect id={id} value={amount} />
              </Grid>
              <Grid item xs={12} lg={1}>
                <Typography>${Number(price) * amount}</Typography>
              </Grid>
            </Grid>
          </Box>
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

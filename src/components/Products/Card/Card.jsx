import React from "react";
import PropTypes from "prop-types";
import MuiPaper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import ProductName from "./Name";
import Categories from "./Categories";
import ProductDescription from "./Description";
import ProductFooter from "./Footer";
import ProductImage from "./71L2iBSyyOL._AC_SX679_.jpg";

const Paper = styled(MuiPaper)`
  width: 600px;
  height: 200px;
  padding: 1rem;
`;

const Image = styled.img`
  object-fit: contain;
  height: 200px;
  width: 200px;
`;

const GrownGridItem = styled(Grid)`
  flex-grow: 1;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Card = ({ product }) => {
  return (
    <Paper>
      <Grid container wrap="nowrap" spacing={3}>
        <Grid item>
          <Image src={ProductImage} alt="product" />
        </Grid>
        <GrownGridItem item>
          <CardContent>
            <GrownGridItem item>
              <Grid container direction="column" wrap="nowrap" spacing={1}>
                <Grid item>
                  <ProductName name={product.name} />
                </Grid>
                <Grid item>
                  <Categories />
                </Grid>
                <GrownGridItem item>
                  <ProductDescription description={product.description} />
                </GrownGridItem>
              </Grid>
            </GrownGridItem>
            <Grid item>
              <ProductFooter product={product} />
            </Grid>
          </CardContent>
        </GrownGridItem>
      </Grid>
    </Paper>
  );
};

Card.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
};

export default Card;

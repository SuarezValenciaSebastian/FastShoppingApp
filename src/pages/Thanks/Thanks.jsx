import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const FullHeightGridContainer = styled(Grid)`
  height: 100vh;
`;

const Thanks = () => {
  return (
    <FullHeightGridContainer
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item>
        <Typography variant="h1" align="center">
          Thanks for your purchase
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" align="center">
          John, we have created your order ... Your items will be soon at your
          door.
        </Typography>
      </Grid>
      <Grid item>
        <Typography align="center">Stay safe</Typography>
      </Grid>
      <Grid item>
        <div>
          <Button color="primary" variant="contained" component={Link} to="/">
            Start Again
          </Button>
        </div>
      </Grid>
    </FullHeightGridContainer>
  );
};

export default Thanks;

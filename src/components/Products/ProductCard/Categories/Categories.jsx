import React from "react";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";

const Categories = () => {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <Chip label="Category 1" size="small" />
      </Grid>
      <Grid item>
        <Chip label="Category 2" size="small" />
      </Grid>
    </Grid>
  );
};

export default Categories;

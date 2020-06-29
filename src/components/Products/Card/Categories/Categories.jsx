import React from "react";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";

const Categories = ({ categories }) => {
  return (
    <Grid container spacing={1}>
      {categories.map((category) => (
        <Grid key={`category-${category.id}`} item>
          <Chip label={category.name} size="small" />
        </Grid>
      ))}
    </Grid>
  );
};

export default Categories;

import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Chip from "@material-ui/core/Chip";
import { removeItem } from "../../../../../pages/ShoppingCart/redux/actions";

const Text = ({ id, name, categories }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <Grid container>
        <Grid item xs={11}>
          {name}
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        {categories.map((category) => (
          <Grid key={`category-${category.id}`} item>
            <Chip label={category.name} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

Text.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Text;

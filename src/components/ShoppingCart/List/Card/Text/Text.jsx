import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import { removeItem } from "../../../../../pages/ShoppingCart/redux/actions";

const Text = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <Grid container>
        <Grid item>Name</Grid>
        <Grid item>
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Typography>Categories</Typography>
    </>
  );
};

Text.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Text;

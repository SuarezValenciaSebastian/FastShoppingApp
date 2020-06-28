import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { startCustomerApiFetch } from "../../../../../../pages/Checkout/redux/actions";

const Form = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const handleLookup = () => {
    dispatch(startCustomerApiFetch(email));
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <TextField
          label="Email*"
          fullWidth
          value={email}
          onChange={handleEmailChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="flex-end">
          <Button color="primary" variant="contained" onClick={handleLookup}>
            Lookup
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Form;

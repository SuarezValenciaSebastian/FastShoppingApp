import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { changeCustomerAttribute } from "../../../../../pages/Checkout/redux/actions";

const New = () => {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.checkout);

  const handleInputChange = (event) => {
    dispatch(
      changeCustomerAttribute({
        name: event.target.name,
        value: event.target.value,
      })
    );
  };

  const { name, identification, address, phone, email } = customer;

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Full Name*"
            fullWidth
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="ID*"
            fullWidth
            name="identification"
            value={identification}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address*"
            fullWidth
            name="address"
            value={address}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone Number"
            name="phone"
            fullWidth
            value={phone}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email*"
            fullWidth
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default New;

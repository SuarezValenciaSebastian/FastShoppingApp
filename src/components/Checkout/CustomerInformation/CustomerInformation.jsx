import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import styled from "styled-components";
import NewCustomerForm from "./Forms/New";
import ExistingCustomerFrom from "./Forms/Existing";
import { NEW, EXISTING } from "../../../pages/Checkout/constants/userType";
import { changeUserType } from "../../../pages/Checkout/redux/actions";

const Container = styled(Paper)`
  padding: 16px;
`;

const CustomerInformation = () => {
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.checkout.userType);

  const handleUserChange = (event) => {
    dispatch(changeUserType(event.target.value));
  };

  return (
    <>
      <Typography variant="h4">Customer information</Typography>
      <Container>
        <FormControl component="fieldset">
          <FormLabel component="legend">Are you?</FormLabel>
          <RadioGroup row value={userType} onChange={handleUserChange}>
            <FormControlLabel
              value={NEW}
              control={<Radio />}
              label="New Customer"
            />
            <FormControlLabel
              value={EXISTING}
              control={<Radio />}
              label="Existing Customer"
            />
          </RadioGroup>
        </FormControl>
        {userType === NEW && <NewCustomerForm />}
        {userType === EXISTING && <ExistingCustomerFrom />}
      </Container>
    </>
  );
};

export default CustomerInformation;

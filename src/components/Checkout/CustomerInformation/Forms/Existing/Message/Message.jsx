import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { resetApiFetch } from "../../../../../../pages/Checkout/redux/actions";

const Message = () => {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.checkout);

  const handleLookupAgain = () => {
    dispatch(resetApiFetch());
  };

  return (
    <div>
      <Box mt={2} mb={5}>
        <Typography variant="h5" component="p">
          Welcome back, {customer.name}
        </Typography>
      </Box>
      <Box mb={5}>
        <Typography>ID: {customer.identification}</Typography>
        <Typography>Address: {customer.address}</Typography>
        <Typography>Phone: {customer.phone}</Typography>
        <Typography>Email: {customer.email}</Typography>
      </Box>
      <Link onClick={handleLookupAgain}>Not {customer.name}? Lookup again</Link>
    </div>
  );
};

export default Message;

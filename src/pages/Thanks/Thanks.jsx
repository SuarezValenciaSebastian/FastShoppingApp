import React from "react";
import { Typography, Button } from "@material-ui/core";

const Thanks = () => {
  return (
    <div>
      <Typography>Thanks for your purchase</Typography>
      <Typography>
        John, we have created your order ... Your items will be soon at your
        door.
      </Typography>
      <Typography>Stay safe</Typography>
      <Button>Start Again</Button>
    </div>
  );
};

export default Thanks;

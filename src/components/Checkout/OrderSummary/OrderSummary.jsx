import React from "react";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const OrderSummary = () => {
  const products = useSelector((state) =>
    Object.values(state.shoppingCart.list)
  );

  return (
    <>
      <Typography variant="h4">Order Summary</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="center">Unit Price</TableCell>
              <TableCell align="center">Units</TableCell>
              <TableCell align="center">Total price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => {
              const { id, name, price, amount } = product;
              return (
                <TableRow key={`row-${id}`}>
                  <TableCell>{name}</TableCell>
                  <TableCell>${price}</TableCell>
                  <TableCell>{amount}</TableCell>
                  <TableCell>${price * amount}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default OrderSummary;

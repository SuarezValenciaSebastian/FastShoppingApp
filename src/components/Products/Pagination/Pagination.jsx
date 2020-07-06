import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MuiPagination from "@material-ui/lab/Pagination";
import { startProductApiFetch } from "../../../pages/Products/redux/actions";

const Pagination = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.products.count);
  const page = useSelector((state) => state.products.page);

  const handlePageChange = (_event, value) => {
    dispatch(startProductApiFetch(value));
  };

  return count > 20 ? (
    <MuiPagination
      count={Math.ceil(count / 20)}
      page={page}
      onChange={handlePageChange}
    />
  ) : null;
};

export default Pagination;

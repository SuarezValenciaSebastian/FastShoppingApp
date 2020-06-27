import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { changeSortBy } from "../../../pages/Products/redux/actions";

const SortSelect = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state.products.sortBy);

  const handleSortByChange = (event) => {
    dispatch(changeSortBy(event.target.value));
  };

  return (
    <FormControl variant="outlined">
      <InputLabel id="sort-label">Sort by</InputLabel>
      <Select
        labelId="sort-label"
        value={sortBy}
        onChange={handleSortByChange}
        label="Sort By"
      >
        <MenuItem value="name">Alphabetical</MenuItem>
        <MenuItem value="price">Lowest price</MenuItem>
        <MenuItem value="id">Most recent</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortSelect;

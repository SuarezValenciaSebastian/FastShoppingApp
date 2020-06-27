import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { changeAmount } from "../../../../../pages/ShoppingCart/redux/actions";

const QuantitySelect = ({ value, id, max }) => {
  const dispatch = useDispatch();

  const handleAmountChange = (event) => {
    dispatch(changeAmount({ id, amount: event.target.value }));
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel id="quantity-select">Quantity</InputLabel>
      <Select
        value={value}
        onChange={handleAmountChange}
        labelId="quantity-select"
        label="Quantity"
      >
        {Array(max)
          .fill(null)
          .map((_value, index) => (
            <MenuItem key={`quantity-option-${index}`} value={index + 1}>
              {index + 1}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

QuantitySelect.propTypes = {
  value: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  max: PropTypes.number,
};

QuantitySelect.defaultProps = {
  max: 4,
};

export default QuantitySelect;

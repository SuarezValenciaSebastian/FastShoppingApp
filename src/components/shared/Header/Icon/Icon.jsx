import React from "react";
import PropTypes from "prop-types";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import styled from "styled-components";

const ToolbarIcon = styled(IconButton)`
  margin-left: auto;
  margin-right: 0;
`;

const Icon = ({ shoppingCartItems }) => {
  return (
    <ToolbarIcon color="inherit">
      <Badge badgeContent={shoppingCartItems} color="error">
        <ShoppingCartIcon />
      </Badge>
    </ToolbarIcon>
  );
};

Icon.propTypes = {
  shoppingCartItems: PropTypes.number.isRequired,
};

export default Icon;

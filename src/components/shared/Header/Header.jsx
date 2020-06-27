import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import styled from "styled-components";
import ImageLogo from "./logo.png";

const Logo = styled.img`
  object-fit: cover;
  width: 48px;
  height: 48px;
`;

const ToolbarIcon = styled(IconButton)`
  margin-left: auto;
  margin-right: 0;
`;

const Header = ({ variant }) => {
  const shoppingCartItems = useSelector(
    (state) => Object.keys(state.shoppingCart.list).length
  );

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Logo src={ImageLogo} alt="logo" />
          <Typography variant="h6">Fast Shopping App</Typography>
          {variant === "home" && (
            <ToolbarIcon color="inherit" component={Link} to="/shopping-cart">
              <Badge badgeContent={shoppingCartItems} color="error">
                <ShoppingCartIcon />
              </Badge>
            </ToolbarIcon>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

Header.propTypes = {
  variant: PropTypes.oneOf(["default", "home"]),
};

Header.defaultProps = {
  variant: "default",
};

export default Header;

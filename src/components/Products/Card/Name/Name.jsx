import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const FormattedString = styled(Typography)`
  max-height: 3.6rem; // TODO: use MUI utilities for font size
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Name = ({ name }) => {
  return (
    <FormattedString variant="h6" component="h2" display="block">
      {name}
    </FormattedString>
  );
};

Name.propType = {
  name: PropTypes.string.isRequired,
};

export default Name;

import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const FormattedString = styled(Typography)`
  max-height: 3.6rem;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Description = ({ description }) => {
  return <FormattedString variant="body2">{description}</FormattedString>;
};

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;

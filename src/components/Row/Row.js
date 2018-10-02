import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classnames from "classnames";

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;

  &.__reversed {
    flex-direction: row-reverse;
  }
`;

const Row = props => {
  const { children, className, reverse, ...rest } = props;
  const classes = classnames(reverse && "__reversed", className);

  return (
    <StyledRow className={classes} {...rest}>
      {children}
    </StyledRow>
  );
};

Row.propTypes = {
  reverse: PropTypes.bool
};

export default Row;

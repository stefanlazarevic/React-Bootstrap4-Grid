import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;

const Row = props => {
  const { children, ...rest } = props;

  return <StyledRow {...rest}>{children}</StyledRow>;
};

Row.propTypes = {
  reverse: PropTypes.bool
};

export default Row;

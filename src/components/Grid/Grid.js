import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;

  ${props =>
    !props.fluid
      ? `
      /* Prefix: sm */
      @media screen and (min-width: 576px) {
        max-width: 540px;
      }

      /* Prefix: md */
      @media screen and (min-width: 768px) {
        max-width: 720px;
      }

      /* Prefix: lg */
      @media screen and (min-width: 992px) {
        max-width: 960px;
      }

      /* Prefix: xlg */
      @media screen and (min-width: 1200px) {
        max-width: 1140px;
      }
    `
      : ''};
`;

const Grid = props => {
  const { children, ...rest } = props;

  return <StyledGrid {...rest}>{children}</StyledGrid>;
};

Grid.propTypes = {
  fluid: PropTypes.bool,
  noGutter: PropTypes.bool
};

export default Grid;

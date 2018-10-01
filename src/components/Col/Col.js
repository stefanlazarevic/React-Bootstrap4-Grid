import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const percentage = base => `${base}%`;
const colWidth = base => percentage((base / 12) * 100);

const StyledColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${props => (props.reverse ? 'column-reverse' : 'column')};
  padding-left: ${props => (props.noGutter ? 0 : '15px')};
  padding-right: ${props => (props.noGutter ? 0 : '15px')};
  flex: ${props => (props.auto ? '0 1 auto;' : '0 1 100%')}
  max-width: ${props => (props.width ? `${props.width}%` : '100%')}
  ${props => (props.offset ? `margin-left: ${colWidth(props.offset)}` : '')}
    ${props =>
      props.xs && !props.auto && !props.width
        ? `
        flex: 0 1 ${colWidth(props.xs)}; 
        max-width: ${colWidth(props.xs)};
        `
        : ``}
    ${props =>
      props.sm && !props.auto && !props.width
        ? `
      @media screen and (min-width: 576px) { 
        flex: 0 1 ${colWidth(props.sm)}; 
        max-width: ${colWidth(props.sm)};
        ${props =>
          props.smOffset ? `margin-left: ${colWidth(props.smOffset)}` : ''}
      }
      `
        : ``}
    ${props =>
      props.md && !props.auto && !props.width
        ? `
      @media screen and (min-width: 768px) {
        flex: 0 1 ${colWidth(props.md)}; 
        max-width: ${colWidth(props.md)};
        ${props =>
          props.mdOffset ? `margin-left: ${colWidth(props.mdOffset)}` : ''}
      }
      `
        : ``}
    ${props =>
      props.lg && !props.auto && !props.width
        ? `
      @media screen and (min-width: 992px) {
        flex: 0 1 ${colWidth(props.lg)}; 
        max-width: ${colWidth(props.lg)};
        ${props =>
          props.lgOffset ? `margin-left: ${colWidth(props.lgOffset)}` : ''}
      }
      `
        : ``}
    ${props =>
      props.xlg && !props.auto && !props.width
        ? `
      @media screen and (min-width: 1200px) {
        flex: 0 1 ${colWidth(props.xlg)}; 
        max-width: ${colWidth(props.xlg)};
        ${props =>
          props.xlgOffset ? `margin-left: ${colWidth(props.xlgOffset)}` : ''}
      }
      `
        : ``};
`;

const Column = props => {
  const { children, ...rest } = props;

  return <StyledColumn {...rest}>{children}</StyledColumn>;
};

Column.propTypes = {
  reverse: PropTypes.bool,
  auto: PropTypes.bool,
  noGutter: PropTypes.bool,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xlg: PropTypes.number,
  width: PropTypes.number,
  offset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xlgOoffset: PropTypes.number
};

export default Column;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classnames from "classnames";
import media from "../../util/media";

const width = base => `
  flex: 0 1 ${(base / 12) * 100}%
  max-width: ${(base / 12) * 100}%
`;

const ColumnBase = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 1 100%;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;

  &.__reversed {
    flex-direction: column-reverse;
  }

  &.__noGutter {
    padding-left: 0;
    padding-right: 0;
  }

  &.__auto {
    flex: 0 1 auto;
  }
`;

const StyledColumn = styled(ColumnBase)`
  ${({ xs }) => xs && width(xs)}

  ${({ sm }) => sm && media.mobileLandscape`${width(sm)}`}

  ${({ md }) => md && media.tablet`${width(md)}`}

  ${({ lg }) => lg && media.desktop`${width(lg)}`}

  ${({ xlg }) => xlg && media.desktopLarge`${width(xlg)}`}
`;

const Column = props => {
  const {
    children,
    reverse,
    auto,
    noGutter,
    width,
    className,
    ...rest
  } = props;

  const classes = classnames(
    reverse && "__reversed",
    auto && "__auto",
    noGutter && "__noGutter",
    className
  );

  return (
    <StyledColumn style={{ width }} className={classes} {...rest}>
      {children}
    </StyledColumn>
  );
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

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import media from "../../util/media";

const ContainerFluid = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
`;

const ContainerFixed = styled(ContainerFluid)`
  /* Prefix: sm */
  ${media.mobileLandscape`
    max-width: 540px;
  `}

  /* Prefix: md */
  ${media.tablet`
     max-width: 720px
  `}

  /* Prefix: lg */
  ${media.desktop`
    max-width: 960px;
  `}

  /* Prefix: xlg */
  ${media.desktopLarge`
    max-width: 1140px;
  `}
`;

const Container = props => {
  const { children, fluid, ...rest } = props;
  const ContainerTag = fluid ? ContainerFluid : ContainerFixed;
  return <ContainerTag {...rest}>{children}</ContainerTag>;
};

Container.propTypes = {
  fluid: PropTypes.bool
};

export default Container;

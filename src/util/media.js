import { css } from "styled-components";

const sizes = {
  mobileLandscape: 576,
  tablet: 768,
  desktop: 992,
  desktopLarge: 1200
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
      @media screen and (min-width: ${sizes[label]}px) {
        ${css(...args)}
      }
  `;

  return acc;
}, {});

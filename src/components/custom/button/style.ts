import styled from 'styled-components';
import { GV } from '@/utils/style.util';

export type StyledButtonType = {
  bg?: string;
  color?: string;
  p?: string;
  w?: string;
  h?: string;
  fsize?: string;
  radius?: string;
  shadow?: string;
  border?: string;
};

export const StyledButton = styled.button<StyledButtonType>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  font-family: ${GV('font3')};
  transition: all ease-in-out 0.2s;
  letter-spacing: 1px;

  ${({ w }) => (w ? `width: ${w};` : ``)}
  /* ${({ h }) => `line-height: ${h ? h : '4.5rem'};`} */
  ${({ h }) => `min-height: ${h ? h : '4.5rem'};`}
  ${({ p }) => `padding: ${p ?? '0 6.65rem'};`}
  ${({ color }) => (color ? `color: ${color};` : ``)}
  ${({ bg }) =>
    `background: ${
      bg ??
      `var(--gradient,linear-gradient(216deg, #f75bb1 1.04%, #c392dc 45.73%, #008782 100%))`
    } !important;`}
  ${({ fsize }) => `font-size: ${fsize ?? GV('font-size-3')};`}
  ${({ radius }) => `border-radius: ${radius ?? '0.5rem'};`}
  ${({ shadow }) => `box-shadow: ${shadow ?? '0px 4px 12px 0px rgba(0, 0, 0, 0.25)'};`}
  ${({ border, bg }) => `border:  1px solid ${border ?? bg ?? 'transparent'};`}
`;

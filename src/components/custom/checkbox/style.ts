import styled from "styled-components";
import { GV } from "@/utils/style.util";

export const CheckboxContainer = styled.div<{ isChecked: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  ${({ isChecked }) =>
    isChecked ? `color: #430E41;` : `color: ${GV("white")};`}
  ${({ isChecked }) => (isChecked ? `font-weight: 600;` : ``)}
    font-size: 20px;
`;

export const StyledCheckbox = styled.div<{ isChecked: boolean, width?: string, height?: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${({ width }) => width ? `width: ${width};` : `width: 18px;`}
  ${({ height }) => height ? `width: ${height};` : `width: 18px;`}
  height: 18px;
  ${({ isChecked }) =>
    isChecked ? `background-color: #780640;` : `background-color: #232323;`}
  ${({ isChecked }) =>
    isChecked ? `box-shadow: 0px 1px 0px 0px #552493 inset;` : ``}
    filter: drop-shadow(0px 2px 5px rgba(109, 34, 229, 0.12)) drop-shadow(0px 0px 0px #25004A) drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.14));
  border-radius: 4px;
  cursor: pointer;
`;

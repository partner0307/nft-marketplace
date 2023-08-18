import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const StyledTh = styled.div<{ width?: string }>`
  flex: ${({ width }) => (width ? `1 1 ${width}px` : `1 1 100%`)};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  ${({ width }) => (width ? `width: ${width};` : ``)}
  font-size: ${GV("font-size-5")};
`;

export const StyledTd = styled.div<{ align?: string; width?: string }>`
  flex: ${({ width }) => (width ? `1 1 ${width}px` : `1 1 100%`)};
  display: flex;
  ${({ align }) => (align ? `align-items: ${align};` : ``)}
  ${({ width }) => (width ? `width: ${width};` : ``)}
`;

export const StyledTr = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: #191919;
  height: 4.5rem;
`;

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TableContainer = styled.div`
  width: 100%;
  background: #0d0d0d;
  border-radius: ${GV("radius-md")};
  overflow: hidden;

  ${StyledTr}:nth-child(even) {
    background: #131313;
  }
`;

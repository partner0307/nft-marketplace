import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const StyledTh = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  text-transform: uppercase;
`;

export const StyledTd = styled.div<{align?: string}>`
  flex: 1;
  display: flex;
  ${({ align }) => align ? `align-items: ${align};` : ``}
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
`;

export const TableContainer = styled.div`
  width: 100%;
  border-radius: ${GV("radius-md")};
  overflow: hidden;

  ${StyledTr}:nth-child(even) {
    background: #131313;
  }
`;

import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const ActionContainer = styled.div`
  display: flex;
  padding-right: 0px;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  gap: 20px;
`;

export const Content = styled.span`
  font-family: ${GV("font3")};
  white-space: nowrap;
`;

export const ItemContainer = styled.a`
  height: 2.5rem;
  padding: 0 .75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: ${GV("font-size")};
  white-space: nowrap;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background: #111;
    border-color: #1c1c1c;
    border-radius: 8px;
  }
`;
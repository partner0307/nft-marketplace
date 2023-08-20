import styled from "styled-components";
import { GV } from "@/utils/style.util";

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  padding: 0 2rem;
  gap: 2px;
`;

export const Content = styled.div`
font-family: ${GV("font3")};
`;

export const ItemContainer = styled.a`
  height: 2.5rem;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
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

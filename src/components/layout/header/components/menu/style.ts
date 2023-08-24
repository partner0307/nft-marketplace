import styled from "styled-components";
import { GV } from "@/utils/style.util";

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  padding: 0 2rem;
  gap: 2rem;
`;

export const Content = styled.div`
font-family: ${GV("font3")};
`;

export const ItemContainer = styled.a<{ isActive?: boolean }>`
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  font-size: ${GV("font-size")};
  white-space: nowrap;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  ${({ isActive }) => isActive ? `background: #950554;` : ``}

  &:hover {
    ${({ isActive }) => isActive ? `background: #950554;` : `background: #111;`}
    border-color: #1c1c1c;
    border-radius: 8px;
  }
`;

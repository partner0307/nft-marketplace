import styled from 'styled-components';
import { GV } from '@/utils/style.util';
import { Link } from 'react-router-dom';

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  padding: 0 2rem;
  gap: 1.12rem;
`;

export const Content = styled.div`
  font-family: ${GV('font3')};
`;

export const DropdownMenuContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  min-width: 100%;
  padding: 0.5rem;
  background: ${GV("bg")};
  border: 1px solid #1C1C1C;
  border-radius: ${GV("radius-sm")};
  transition: all ease-in-out .3s;
`;

export const DropdownMenuItem = styled(Link)`
  padding: 0.25rem 0.5rem;
  border-radius: ${GV("radius-sm")};
  transition: all ease-in-out .3s;

  &:hover {
    background: #000;
  }
`;

export const MenuItemContainer = styled.div<{ $isBg?: boolean, $isActived?: boolean, $isDropdown?: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  height: 2.5rem;
  line-height: 2.5rem;
  padding: 0 0.75rem;
  font-size: ${GV('font-size')};
  font-family: ${GV('font3')};
  white-space: nowrap;
  border: 1px solid transparent;
  border-radius: ${GV("radius-xs")};
  transition: all ease-in-out .5s;
  ${({ $isBg }) => $isBg ? `
    border: 1px solid #1C1C1C;
    background: #111;
  ` : `
    &:hover {
      border: 1px solid #1C1C1C;
      background: #111;
    }
  `}
  ${({ $isActived }) => $isActived ? `
    border: 1px solid #1C1C1C;
    background: #950554;
  ` : `
    &:hover {
      border: 1px solid #1C1C1C;
      background: #111;
    }
  `}
`;

export const ItemContainer = styled.a<{ isActive?: boolean }>`
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  font-size: ${GV('font-size')};
  white-space: nowrap;
  border-radius: 8px;
  padding: 0 0.5rem;
  border: 1px solid transparent;
  cursor: pointer;
  ${({ isActive }) => (isActive ? `background: #950554;` : ``)}

  &:hover {
    ${({ isActive }) => (isActive ? `background: #950554;` : `background: #111;`)}
    border-color: #1c1c1c;
    border-radius: 8px;
  }
`;

export const SearchInputContainer = styled.div`
  display: flex;
`;

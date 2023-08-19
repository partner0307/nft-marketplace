import styled, { keyframes } from 'styled-components';

import Background from '@/assets/img/screen.png';

export const ListContainer = styled.div`
  cursor: pointer;
`

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const SidebarContainer = styled.div<{ slideOpened: boolean; opened: boolean }>`
  position: fixed;
  top: 64px;
  left: 0;
  /* display: flex; */
  display: ${({ opened }) => (opened ? `flex` : `none`)};
  flex-direction: column;
  max-width: 300px;
  height: calc(100vh - 64px);
  background: #780640;
  animation: ${({ slideOpened }) => (slideOpened ? fadeIn : fadeOut)} .4s;
  z-index: 999;
`;

export const Title = styled.div`
  min-height: 90px;
  background: no-repeat url(${Background});
  background-position: top center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemIcon = styled.img`
  width: 40px;
  height: 100%;
`;

export const ListItemContainer = styled.div<{ isOpened: boolean }>`
  ${({ isOpened }) => isOpened ? `background: #600031;` : `background: #780640;`}
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const NestedItemList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const NestedItem = styled.div<{ isSelected: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  padding: 16px 24px;
  border-left: 2px solid #780640;
  ${({ isSelected }) => isSelected ? `background: #32001A;` : ``}

  &:hover {
    background: #32001A;
  }
`;

export const Dot = styled.div`
  position: absolute;
  top: 24px;
  left: -7px;
  width: 12px;
  height: 12px;
  border-radius: 200px;
  background-color: #780640;
`
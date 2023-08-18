import styled, { keyframes } from 'styled-components';

import Background from '@/assets/img/screen.png';

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
  background: rgb(140, 0, 0);
  animation: ${({ slideOpened }) => (slideOpened ? fadeIn : fadeOut)} .4s;
  z-index: 999;
`;

export const ListContainer = styled.div``;

export const Title = styled.div`
  height: 90px;
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

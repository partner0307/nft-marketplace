import styled, { keyframes } from 'styled-components';

import Background from '@/assets/img/community.png';

export const ListContainer = styled.div`
  cursor: pointer;
`;

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
  animation: ${({ slideOpened }) => slideOpened ? fadeIn : fadeOut } .5s;
  flex-direction: column;
  max-width: 300px;
  height: calc(100vh - 64px);
  background: #780640;
  overflow: auto;
  z-index: 999;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const titleAnimation = keyframes`
  0% {
    transform: scale(1.6) rotate(-7deg);
  }
  5% {
    transform: scale(1.6) rotate(-7deg);
  }
  15% {
    transform: scale(1) rotate(0);
  }
  60% {
    transform: scale(1) rotate(0);
  }
  80% {
    transform: scale(1.4) rotate(-7deg)
  }
  100% {
    transform: scale(1.4) rotate(-7deg)
  }
`

export const Title = styled.div`
  position: relative;
  min-height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: no-repeat url(${Background});
    background-position: top center;
    background-size: cover;
    animation: ${titleAnimation} 7s infinite;
    z-index: -1;
    content: "";
  }
`;

export const ItemIcon = styled.img`
  width: 40px;
  height: 100%;
`;

export const ListItemContainer = styled.div<{ isOpened: boolean }>`
  ${({ isOpened }) => (isOpened ? `background: #600031;` : `background: #780640;`)}
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;

  &:hover {
    background: #600031;
  }
`;

export const NestedItemList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NestedItem = styled.div<{ isSelected: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  padding: 16px 24px;
  border-left: 2px solid #780640;
  ${({ isSelected }) => (isSelected ? `background: #32001A;` : ``)}

  &:hover {
    background: #32001a;
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
`;

export const SlideHand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
`

export const SlideItem = styled.div<{ $isNFTOpened: boolean }>`
  width: 100%;
  max-width: 300px;
  height: 0px;
  overflow: hidden;
  padding: 0 0 0 3rem;
  transition: all ease-in-out .3s;
`;

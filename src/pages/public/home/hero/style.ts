import styled, { keyframes } from 'styled-components';
import Background from '@/assets/img/background.png';
import { motion } from 'framer-motion';
import { Heading } from '@/components/basic';
import { Button } from '@/components/custom';
import { GV } from '@/utils/style.util';

const headHover = keyframes`
    0% {
      text-shadow: none;
    }
    50% {
      text-shadow: 0px 0px 8px rgba(61, 255, 243, 0.7);
    }
    100% {
      text-shadow: none;
    }
`;

export const HoveredHeading = styled(Heading)`
  max-width: 34.875rem;
  text-transform: uppercase;
  text-align: center;
  transition: all ease-in-out 0.5s;
  animation: ${headHover} 2s infinite linear;

  &:hover {
    text-shadow: 0px 0px 8px rgba(61, 255, 243, 0.7);
  }
`;

export const CustomButton = styled(Button)`
  &:before {
    /* background: linear-gradient(180deg, #C392DC 0%, #008782 100%) !important; */
  }
`

export const HeroContainer = styled.div`
  position: relative;
  background: no-repeat url(${Background});
  background-position: top center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 0 2rem 4rem;

  > div:first-child {
    position: absolute;
    top: 3rem;
    left: 50%;
    width: 100%;
    transform: translate(-50%);
    @media (min-height: 960px) {
      top: 5rem;
    }
    @media (min-height: 1000px) {
      top: 3rem;
    }
    @media (min-height: 1050px) {
      top: 4%.5;
    }
    @media (min-height: 1100px) {
      top: 6rem;
    }
    @media (min-height: 1200px) {
      top: 7rem;
    }
  }
  > div:nth-child(2) {
    height: calc(100vh - 64px - 5rem);
    min-height: 750px;
    max-height: 1020px;
  }
`;

export const HeroWrapper = styled.div`
  max-width: 1440px;
  align-self: center;
  display: flex;
  align-items: flex-end;
  gap: 2rem;
`;

export const CenterRect = styled.div`
  position: relative;
  align-self: center;
  margin-top: -1rem;
  width: 1.25rem;
  height: 4.6875rem;
  background: rgba(198, 245, 255, 0.5);
  z-index: 1;
`;

export const LeftSide = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const DownButton = styled.a`
  display: flex;
  height: 112px;
  margin: 38px 0 86px 0;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  border: 1px solid rgba(198, 224, 255, 0.5);
  background: rgba(9, 82, 168, 0.2);
  backdrop-filter: blur(10px);

  &:hover {
    box-shadow: none;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #fff;
    border-radius: 18px;
    transition: opacity 0.3s, border 0.3s;
  }

  &:hover::before {
    opacity: 0;
  }
  
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(198, 224, 255, 0.5);
    border-radius: 18px;
    opacity: 0;
    z-index: -1;
    transform: scaleX(1.1) scaleY(1.3);
    transition: transform 0.3s, opacity 0.3s;
  }
  
  &:hover::after {
    opacity: 1;
    transform: scaleX(1) scaleY(1);
  }
`;

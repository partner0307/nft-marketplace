import styled, { keyframes } from 'styled-components';
import Background from '@/assets/img/background.png';
import { motion } from 'framer-motion';
import { Heading } from '@/components/basic';

const prevAnime = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`;

export const HoveredHeading = styled(Heading)`
  max-width: 34.875rem;
  text-transform: uppercase;
  text-align: center;
`;

export const HeroContainer = styled.div`
  position: relative;
  background: no-repeat url(${Background});
  background-position: top center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 0 2rem 4rem;

  >div:first-child {
    position: absolute;
    top: 3rem;
    left: 50%;
    transform: translate(-50%);
  }
  >div:nth-child(2) {
    height: calc(100vh - 64px - 5rem);
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
  align-self: center;
  margin-top: -1rem;
  width: 1.25rem;
  height: 4.6875rem;
  background: rgba(198, 245, 255, 0.5);
`;

export const LeftSide = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const DownButton = styled.button`
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
`;

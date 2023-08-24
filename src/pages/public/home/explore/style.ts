import styled from 'styled-components';
import { GV } from '@/utils/style.util';

import Background from '@/assets/img/explore-bg.png';

export const ExploreContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: no-repeat url(${Background});
  background-position: top center;
  background-size: cover;
  padding: 120px 32px;
  gap: 80px;
`;

export const Content = styled.span`
  background-image: ${GV('gradient')};
  -webkit-background-clip: text;
  color: transparent;
`;

export const TabButton = styled.button<{ isSelected: boolean }>`
  background: #191919;
  border-radius: 100px;
  padding: 12px 24px;
  /* transition: all ease-in-out .2s; */
  ${({ isSelected }) =>
    isSelected
      ? `
      background: ${GV('gradient')};
      border: 1px solid #2B2928;
      font-weight: ${GV('weight-lg')};
    ` : ``}
`;

export const AnimatedTableContainer = styled.div`
  padding: 1.5rem 0 0;
`

export const ContentColor = styled.div`
  color: #3dfff3;
  text-transform: uppercase;
`;

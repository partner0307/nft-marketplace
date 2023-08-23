import styled from 'styled-components';

import Backgound from '@/assets/img/hire_bg.png';
import { GV } from '@/utils/style.util';

export const HireContainer = styled.div`
  display: flex;
  justify-content: center;
  background: url(${Backgound});
  background-position: top center;
  background-size: cover;
  height: 100%;
`;

export const HireWrapper = styled.div`
  /* max-width: 1440px; */
  overflow: hidden;
  padding: 7rem 2rem;
  .swiper-backface-hidden .swiper-slide {
    width: fit-content;
  }
  .swiper {
    overflow: auto;
    padding-bottom: 2rem;
  }
  .swiper-button-prev {
  }
  .swiper-button-next {
  }
`;

export const Item = styled.div<{ isChecked: boolean }>`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  width: 154px;
  border-radius: 32px;
  border: 1px solid #2b2928;
  ${({ isChecked }) => (isChecked ? `background-color: ${GV('white')};` : ``)}
  transition: all ease-in-out .2s;
`;

export const ItemList = styled.div`
  max-width: 568px;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  padding: 12px 24px;
  border-radius: 12px;
  border: 1px solid #2b2928;
  background: #000;
  transition: all ease-in-out .2s;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  margin-left: -15px;
  border-radius: 100px;
  border: 1px solid #f2f1f1;
`;

export const ImageWrapper = styled.div`
  margin-left: -20%;
`;

export const ArrowButton = styled.div<{ isFill: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  border: 1px solid transparent;
  cursor: pointer;
  background:
    linear-gradient(#430f41, #430f41) padding-box,
    linear-gradient(264.4deg, #f75bb1 -6.74%, #c392dc 43.26%, #008782 103.97%) border-box;

  ${({ isFill }) => (isFill ? `background: ${GV('gradient')}` : ``)}
`;

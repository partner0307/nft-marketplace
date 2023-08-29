import styled from 'styled-components';

import Background from '@/assets/img/metaverse/overview.png'

export const DetailsWrapper = styled.div`
    padding: 0 32px;
    display: flex;
    flex-direction: column;
`;

export const CustomFont = styled.div<{ family?: string }>`
    ${({ family }) => family ? `font-family: 'Aeonik';` : ``}
    color: #8D8E8D;
`;

export const HeroContainer = styled.div`
    display: flex;
    height: 365px;
    padding: 0px 32px;
    justify-content: space-between;
    align-items: flex-end;
    border-radius: 12px;
    background: no-repeat url(${Background});
    background-position: top center;
    background-size: cover;
`;

export const MarkContainer = styled.div`
    width: 155px;
    height: 142px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px 12px 0px 0px;
    background: rgba(0, 0, 0, 0.87);
`;

export const CustomButton = styled.button`
    font-size: 14px;
    color: #000;
    font-weight: 600;
    padding: 18px 54px;
    border-radius: 8px;
    background: #F75BB1;
    backdrop-filter: blur(7.5px);
`;

export const CustomButton1 = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 0 16px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #1C1C1C;
    background: rgba(0, 0, 0, 0.80);
    backdrop-filter: blur(7.5px);
`;

export const StatusBar = styled.div`
    width: 440px;
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    border-radius: 16px;
    border: 1px solid #1A1A1A;
    background: #0C0C0C;
`;

export const PageButton = styled.div<{ isActive?: false }>`
    display: flex;
    padding: 4px 12px;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    font-size: 20px;
    ${({ isActive }) => isActive ? `color: #3D3D3E;` : `color: #ffffff;`}
    ${({ isActive }) => isActive ? `background: #1E1E20;` : ``}
`;

export const LinearButton = styled.button`
    font-size: 20px;
    font-weight: 600;
    width: 100%;
    padding: 12px 0;
    border-radius: 8px;
    background: linear-gradient(216deg, #F75BB1 1.04%, #C392DC 45.73%, #008782 100%);
`

export const ResidencStatusBar = styled.div`
    padding: 12px 0px;
    width: 100%;
`;

export const Main = styled.div`
    display: flex;
    padding: 32px 24px;
    flex-direction: column;
    gap: 48px;
    border-radius: 16px;
    background: #121112;

    
  .swiper-backface-hidden .swiper-slide {
    width: fit-content;
  }

  .swiper-button-prev {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translate(0, -50%);
    display: inline-block;
    width: 30px;
    height: 30px;
    background: #666;
    z-index: 1;

    &:after {
        position: absolute;
        top: 25%;
        left: 50%;
        transform: rotate(45deg);
        width: 50%;
        height: 2px;
        background: #fff;
        border-radius: 999px;
        content: "";
    }

    &:before {
        position: absolute;
        bottom: 25%;
        left: 50%;
        transform: rotate(-45deg);
        width: 50%;
        height: 2px;
        background: #fff;
        border-radius: 999px;
        content: "";
    }

    &.swiper-button-disabled {
        display: none;
    }
  }
`;

export const CustomTab = styled.button<{ isActive?: boolean }>`
    padding: 12px 18px;
    gap: 4px;
    border-radius: 32px;
    white-space: nowrap;
    ${({ isActive }) => isActive ? `background: #D96BFF;` : `background: #191919;`}
    ${({ isActive }) => !isActive ? `border: 1px solid #2B2928;` : ``}
    ${({ isActive }) => isActive ? `font-weight: 600; color: #0C0D0E;` : ``}
`;

export const CustomColor = styled.div`
    color: #1FDD00;
`;

export const Similars = styled.div`
    display: flex;
    padding: 32px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    border-radius: 16px;
    border: 1px solid #1A1A1A;
    background: rgba(12, 12, 12, 0.90);
`

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background: #1A1A1A;
`;
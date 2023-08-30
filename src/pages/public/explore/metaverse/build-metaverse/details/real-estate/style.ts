import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export const RealEstateContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 29px;
    width: 100%;
    padding: 24px 32px;
    border-radius: 16px;
    border: 1px solid #3D3D3E;
    background: rgba(25, 25, 25, 0.80);
    backdrop-filter: blur(7.5px);
`;

export const CustomDropdown = styled.div`
    display: flex;
    width: 300px;
    padding: 8px 12px;
    border-radius: 12px;
    border: 1px solid #2B2928;
    background: #191919;
`;

export const MenuContainer = styled.div`
    display: flex;
    padding: 8px 4px;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    border-radius: 16px;
    background: #121112;
    width: 270px;

    @media (max-width: 1024px) {
        width: 200px;
    }
`;

export const MenuItem = styled.div<{ isSelected?: boolean, isLast?: boolean }>`
    width: 100%;
    display: flex;
    padding: 12px;
    align-items: center;
    gap: 12px;
    border-radius: 4px;
    border-bottom: 1px solid #2A282B;
    ${({ isSelected }) => isSelected ? `color: #C40941;` : `color: #fff;`}
    ${({ isLast }) => isLast ? `border: none;` : ``}
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background: #2A282B;
`;

export const HeroImage = styled.div`
    flex: 1;
    border-radius: 16px 0px 0px 16px;
    position: relative;
`;

export const ImageLoader = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 16px 0 0 16px;
`

export const IconBar = styled.div`
    position: absolute;
    top: 15px;
    left: 20px;
    display: flex;
    padding: 4px 8px;
    align-items: center;
    gap: 20px;
    border-radius: 4px;
    background: rgba(12, 13, 14, 0.20);
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px 24px 8px;
    background: #780640;
    border-radius: 0 16px 0 0;
    flex: 1;
`;

export const HeroContentLine = styled.div`
    height: 1px;
    width: 100%;
    background: #D03A67;
`;

export const TourButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0C0D0E;
    border-radius: 0 0 16px 0;
    font-size: ${GV('font-size-3')};
    padding: 20px;
`

export const CustomFont = styled.div`
    color: #EDB3C4;
    font-size: ${GV('font-size')};
`
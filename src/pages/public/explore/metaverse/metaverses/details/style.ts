import styled from 'styled-components';

import Background from '@/assets/img/metaverse/overview.png'

export const DetailsContainer = styled.div`
    background: #0C0D0E;
`

export const DetailsWrapper = styled.div`
    padding: 0 32px;
    display: flex;
    flex-direction: column;
`;

export const DetailsContent = styled.div`
    max-width: 1440px;
    width: 100%;
`

export const CustomFont = styled.div<{ family?: string }>`
    ${({ family }) => family ? `font-family: 'Aeonik';` : ``}
    color: #8D8E8D;
`;

export const CustomColor = styled.div`
    color: #E85051;
`

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

export const CustomeButton2 = styled.button`
    height: 64px;
    padding: 0px 24px;
    border: 1px solid #D96BFF;
    border-radius: 12px;
    background: #0C0C0C;
    color: #D96BFF;
    font-size: 20px;
    font-weight: 600;
`;

export const CustomTab = styled.button<{ isActive?: boolean }>`
    padding: 12px 18px;
    gap: 4px;
    border-radius: 32px;
    ${({ isActive }) => isActive ? `background: #D96BFF;` : `background: #191919;`}
    ${({ isActive }) => !isActive ? `border: 1px solid #2B2928;` : ``}
    ${({ isActive }) => isActive ? `font-weight: 600; color: #0C0D0E;` : ``}
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
    margin-bottom: -100px;
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background: #1A1A1A;
`;

export const VLine = styled.div`
    background: #B6B6B6;
    width: 1px;
    height: 16px;
`
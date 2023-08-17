import styled from 'styled-components';

import Background from '../../../../../../assets/img/metaverse/overview.png'

export const DetailsContainer = styled.div`
    background: #0C0D0E;
`

export const DetailsWrapper = styled.div`
    padding: 0 32px;
`

export const CustomFont = styled.div`
    font-family: 'Aeonik';
    color: #8D8E8D;
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
`
import styled from 'styled-components';

import Backgound from '../../../../../assets/img/hire_bg.png';
import { GV } from '../../../../../utils/style.util';

export const HireContainer = styled.div`
    display: flex;
    justify-content: center;
    background: url(${Backgound});
    background-position: top center;
    background-size: cover;
    height: 100%;
    padding: 7rem 2rem;
`;

export const HireWrapper = styled.div`
    /* max-width: 1440px; */
`

export const Item = styled.div<{ isChecked: boolean }>`
    display: flex;
    padding: 8px 16px;
    align-items: center;
    gap: 8px;
    width: 154px;
    border-radius: 32px;
    border: 1px solid #2B2928;
    ${({ isChecked }) => isChecked ? `background-color: ${GV('white')};` : ``}
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
    border: 1px solid #2B2928;
    background: #000;
`;

export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    margin-left: -15px;
    border-radius: 100px;
    border: 1px solid #F2F1F1;
`

export const ImageWrapper = styled.div`
    margin-left: -20%;
`;

export const ArrowButton = styled.div<{ isFill: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 0.5px solid ${GV('gradient')};
    border-radius: 100px;
    ${({ isFill }) => isFill ? `background: ${GV('gradient')}` : ``}
`
import styled from 'styled-components';
import { GV } from '../../../../../utils/style.util';

import Background from '../../../../../assets/img/main-blog.png';

export const SubHeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 24px 32px;
    background: no-repeat url(${Background});
    background-position: top center;
    background-size: cover;
`;

export const TabGroup = styled.div`
    align-self: center;
    display: flex;
    gap: 20px;
`

export const TabButton = styled.button<{ isSelected: boolean }>`
    background: #191919;
    border-radius: 100px;
    padding: 12px 18px;
    color: #BEBCBE;
    ${({ isSelected }) => isSelected ? `background: #D96BFF; font-weight: 600; color: #000` : ``};
    ${({ isSelected }) => !isSelected ? `border: 1px solid #2B2928;` : `` }
`

export const ItemContainer = styled.div<{ max: string }>`
    height: 2.5rem;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    ${({ max }) => max ? `max-width: ${max}` : ``};
    gap: 0.3rem;
    font-size: ${GV('font-size')};
    border: 1px solid #2B2928;
    cursor: pointer;
    background: #191919;
    border-radius: 12px;
`;
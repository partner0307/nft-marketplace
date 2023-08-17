import styled from 'styled-components';
import { GV } from '@/utils/style.util';

import Background from '@/assets/img/explore-bg.png';

export const ExploreContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items : center;
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
        ${({ isSelected }) => isSelected ? `background: ${GV('gradient')};` : ``};
        ${({ isSelected }) => !isSelected ? `border: 1px solid #2B2928;` : `` }
    `

export const ContentColor = styled.div`
    color: #3DFFF3;
    text-transform: uppercase;
`
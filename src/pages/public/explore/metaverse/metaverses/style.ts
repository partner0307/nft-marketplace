import styled from 'styled-components';
import { GV } from '@/utils/style.util';

export const MetaversesContainer = styled.div`
    background: #0C0D0E;
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const MetaverseWrapper = styled.div`
    align-self: center;
    max-width: 1440px;
    width: 100%;
`

export const ItemContainer = styled.div`
    height: 2.5rem;
    padding: 0 1rem;
    max-width: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    font-size: ${GV('font-size')};
    border: 1px solid #2B2928;
    cursor: pointer;
    background: #191919;
    border-radius: 12px;
`;

export const CustomFont = styled.div`
    font-family: 'Aeonik';
    color: #8D8E8D;
`

export const PageStep = styled.div`
    display: flex;
    padding: 10px 14px;
    align-items: center;
    border-radius: 16px;
    border: 1px solid #E7E8E7;
`;

export const PaginationWrapper = styled.div`
    padding: 0 35px 128px;
`

export const StepButton = styled.button<{ isActive?: boolean, padding?: string }>`
    border-radius: 9.919px;
    ${({ padding}) => padding ? `padding: ${padding};` : `padding: 8px;`}
    ${({ isActive }) => isActive ? `background: #D100BC;` : `background: #2B2B2B;`}
`

export const Rect = styled.div`
    position: absolute;
    top: 441px;
    right: -197px;
    width: 700px;
    height: 708px;
    border-radius: 708px;
    background: rgba(235, 104, 198, 0.20);
    filter: blur(150px);
`;

export const Rect1 = styled.div`
    position: absolute;
    left: 231px;
    bottom: 331px;
    width: 700px;
    height: 708px;
    border-radius: 708px;
    background: rgba(104, 125, 235, 0.20);
    filter: blur(150px);
`
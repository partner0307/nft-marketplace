import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export const MarketplaceContainer = styled.div`
    background: #0c0d0e;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 2rem;
`;

export const StatusBar = styled.div`
    display: flex;
    height: 4rem;
    padding: 0rem 2rem;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    background: rgba(41, 41, 41, 0.30);
    backdrop-filter: blur(8px);
`;

export const StatusItem = styled.div`
    height: 2.5rem;
    display: flex;
    padding: 0rem 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #1E1E20;
    font-size: 14px;
`;

export const CustomTab = styled.button<{ isActive?: boolean }>`
    padding: 12px 18px;
    gap: 4px;
    border-radius: 32px;
    ${({ isActive }) => isActive ? `background: #D96BFF;` : `background: #191919;`}
    ${({ isActive }) => !isActive ? `border: 1px solid #2B2928;` : ``}
    ${({ isActive }) => isActive ? `font-weight: 600; color: #fff;` : ``}
`;

export const ItemContainer = styled.div`
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 0.3rem;
    font-size: ${GV("font-size")};
    border: 1px solid #2b2928;
    cursor: pointer;
    background: #191919;
    border-radius: 12px;
`;
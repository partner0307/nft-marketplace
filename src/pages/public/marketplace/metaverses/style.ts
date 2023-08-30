import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export const StatusCard = styled.div`
    display: flex;
    padding: 1.5rem;
    align-items: flex-start;
    gap: 1rem;
    border-radius: 1rem;
    border: 1px solid #3D3D3E;
    background: #1E1E20;
`;

export const CustomFont = styled.div`
    color: #8D8E8D;
    font-size: ${GV('font-size-3')};
`

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

export const ImageLoader = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`
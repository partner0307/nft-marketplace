import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export const StatusCard = styled.div`
    display: flex;
    width: 28rem;
    padding: 0.875rem 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    border-radius: 1rem;
    border: 1px solid #3D3D3E;
    background: #1E1E20;
`;

export const CustomFont = styled.div`
    color: #8D8E8D;
    font-size: ${GV('font-size-3')};
`;

export const CustomSpan = styled.div`
    color: #8F9090;
    font-size: ${GV('font-size-5')};
`

export const CustomButton = styled.button`
    padding: 0.75rem 1.125rem;
    border-radius: 2rem;
    border: 1px solid #2B2928;
    background: #191919;
    font-size: ${GV('font-size-5')};
    color: #BEBCBE;
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
`;

export const IconLoader = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 100rem;
    border: 1px solid #7A8799;
`

export const CustomLine = styled.div`
    width: 100%;
    height: 0.0625rem;
    background: #3D3D3E;
`
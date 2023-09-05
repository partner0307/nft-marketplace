import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BuildDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    padding: 24px 32px;
`;

export const BuildDetailsWrapper = styled.div`
    display: flex;
    gap: 32px;
    padding: 0 0 200px;
`;

export const Rect = styled.div`
    position: absolute;
    top: 283px;
    left: 59px;
    width: 450px;
    height: 447px;
    flex-shrink: 0;
    border-radius: 450px;
    background: rgba(235, 104, 198, 0.20);
`;

export const MenuItem = styled(Link)<{ $isActive?: boolean }>`
    display: flex;
    width: 96px;
    height: 96px;
    padding: 24px;
    align-items: center;
    gap: 12px;
    border-radius: 16px;
    border: 1px solid #3D3D3E;
    background: rgba(25, 25, 25, 0.80);
    backdrop-filter: blur(7.5px);
    transition: all ease-in-out .3s;
    ${({ $isActive }) => $isActive ? `
        background: #780640;
    ` : `
        &:hover {
            background: #4c092c; 
        }
    `}
`;

export const CustomFont = styled.span`
    color: '#8D8E8D'
`

export const Rect1 = styled.div`
    position: absolute;
    top: 199px;
    right: -253px;
    width: 450px;
    height: 447px;
    flex-shrink: 0;
    border-radius: 450px;
    background: rgba(104, 196, 235, 0.20);
`
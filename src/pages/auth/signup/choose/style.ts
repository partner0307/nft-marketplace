import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export const AuthForm = styled.div`
    display: flex;
    max-width: 43.875rem;
    padding: 2rem;
    flex-direction: column;
    gap: 2rem;
    border-radius: 2rem;
    border: 1px solid #5C5D5E;
    background: linear-gradient(205deg, rgba(98, 178, 204, 0.20) 0%, rgba(138, 62, 164, 0.20) 44.79%, rgba(87, 11, 70, 0.20) 100%);
    backdrop-filter: blur(3px);
`;

export const CardOption = styled.div`
    position: relative;
    width: 18.9375rem;
    height: 16.9375rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    cursor: pointer;
`;


export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    max-width: 15rem;
    z-index: 1;
`;

export const TalentCardImageContainer = styled.div<{ option?: number }>`
    width: 6rem;
    height: 6rem;
    border-radius: 6rem;
    ${({ option }) => option === 1 ? `background: #B12773;` : `background: #575757;`}
`;

export const ClientCardImageContainer = styled.div<{ option?: number }>`
    width: 6rem;
    height: 6rem;
    border-radius: 6rem;
    ${({ option }) => option === 2 ? `background: #0D8095;` : `background: #575757;`}
`

export const SubmitButton = styled.button<{ isActive?: boolean }>`
    height: 3.5rem;
    border-radius: 0.75rem;
    padding: 0rem 1.5rem;
    gap: 0.5rem;
    align-self: stretch;
    font-size: 1.25rem;
    font-weight: 600;
    border: 1px solid #3D3D3E;
    ${({ isActive }) => isActive ? `background: ${GV('gradient')};border: none;` : ``}
`;

export const CustomFont = styled.div`
    color: #8F9090;
`;

export const CustomFont1 = styled.div`
    color: #A192A4;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 1.25rem;
`
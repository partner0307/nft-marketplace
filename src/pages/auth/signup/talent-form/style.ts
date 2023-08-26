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

export const SubmitButton = styled.button`
    height: 3.5rem;
    border-radius: 0.75rem;
    padding: 0rem 1.5rem;
    gap: 0.5rem;
    align-self: stretch;
    font-size: 1.25rem;
    font-weight: 600;
    border: 1px solid #3D3D3E;
    background: ${GV('gradient')};
`;

export const CustomFont = styled.div`
    color: #A192A4;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 1.25rem;
`;

export const CustomLine = styled.div`
    width: 48%;
    height: 0.0625rem;
    background: #F1B0EA;
`;

export const LetterContainer = styled.div`
    width: 2.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CustomButton = styled.button`
    display: flex;
    height: 3rem;
    padding: 0.75rem 1.125rem;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    background:
        linear-gradient(#430f41, #430f41) padding-box,
        linear-gradient(264.4deg, #f75bb1 -6.74%, #c392dc 43.26%, #008782 103.97%) border-box;
`;
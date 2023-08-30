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

export const ItemContainer = styled.div`
  height: 2.5rem;
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0.3rem;
  font-size: ${GV("font-size")};
  border: 1px solid #2b2928;
  cursor: pointer;
  background: #191919;
  border-radius: 1rem;
`;

export const SubmitButton = styled.button`
    height: 3.5rem;
    border-radius: 0.75rem;
    padding: 0rem 1.5rem;
    gap: 0.5rem;
    align-self: stretch;
    font-size: ${GV('font-size-3')};
    font-weight: ${GV('weight-lg')};
    border: 1px solid #3D3D3E;
    background: ${GV('gradient')};
`;

export const CustomFont = styled.div`
    color: #A192A4;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: ${GV('font-size-3')};
`
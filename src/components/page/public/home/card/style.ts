import styled from 'styled-components';
import { GV } from '../../../../../utils/style.util';

export const CardContainer = styled.div`
    min-width: 300px;
    border-radius: 18px;
    background: #F4EDF8;
    position: relative;
    display: flex;
    padding: 30px 16px 18px 20px;
    color: ${GV('black')}
`;

export const CardMark = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.25rem 1.5rem 0.25rem 1rem;
    background: ${GV('primary-green')};
    color: ${GV('white')};
    border-radius: 999px;
`;

export const Avatar = styled.img`
    width: 96px;
    height: 96px;
    border-radius: 500px;
    border: 1px solid #F2F1F1;
`;

export const ReviewContainer = styled.div`
    display: flex;
    border-radius: 6px;
    gap: 10px;
    padding: 4px 8px;
    background: #E1DBE4;
`;

export const Category = styled.div`
    display: flex;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border-radius: 30px;
    background-color: #C1EBED;
`;

export const ProfileButton = styled.button`
    background: #000;
    color: ${GV('white')};
    font-weight: 600;
    padding: 0.7rem 1rem;
    border-radius: 0.5rem;
`
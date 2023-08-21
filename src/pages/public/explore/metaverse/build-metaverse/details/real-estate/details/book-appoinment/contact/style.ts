import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export const ProfileCard = styled.div`
    display: flex;
    padding: 18px 12px;
    flex-direction: column;
    align-items: center;
    gap: 9px;
    border-radius: 12px;
    border: 1px solid #5C5D5E;
    background: #2A282B;
`;

export const ProfileAvatar = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 120px;
`;

export const BookButton = styled.button`
    padding: 12px 24px;
    border-radius: 8px;
    background: ${GV('gradient')};
    font-size: 20px;
    font-weight: 600;
    height: 100%;
`;
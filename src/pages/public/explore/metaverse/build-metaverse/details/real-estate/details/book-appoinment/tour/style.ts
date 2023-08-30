import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export const ProfileCard = styled.div`
    display: flex;
    padding: 18px 12px;
    align-items: center;
    gap: 9px;
    border-radius: 12px;
    border: 1px solid #5C5D5E;
    background: #2A282B;
`;

export const CustomButton = styled.button`
    padding: 12px 24px;
    border-radius: 8px;
    background: ${GV('gradient')};
    font-size: ${GV('font-size-3')};
    font-weight: ${GV('weight-lg')};
`;

export const ProfileAvatar = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 48px;
`
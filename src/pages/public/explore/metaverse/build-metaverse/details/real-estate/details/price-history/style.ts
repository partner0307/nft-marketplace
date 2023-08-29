import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export const ActionButton = styled.button<{ isListed?: boolean }>`
    display: flex;
    width: 120px;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    border-radius: 24px;
    ${({ isListed }) => isListed ? `border: 1px solid ${GV('info')};` : `border: 1px solid #1FDD00;`}
`
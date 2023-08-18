import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export const TitleBar = styled.div`
    display: flex;
    width: 902px;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    border-radius: 16px;
    background: #0C0C0C;
`;

export const NFTs = styled.div`
    width: 100%;
    padding: 32px 0;
    border-radius: 16px;
    border: 1px solid #1A1A1A;
    background: rgba(12, 12, 12, 0.90);
`;

export const ItemContainer = styled.div<{ max?: string }>`
  height: 2.5rem;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${({ max }) => (max ? `max-width: ${max}` : ``)};
  gap: 0.3rem;
  font-size: ${GV("font-size")};
  border: 1px solid #2b2928;
  cursor: pointer;
  background: #191919;
  border-radius: 12px;
`;

export const Options = styled.div`
    display: flex;
    width: 440px;
    flex: 1;
    padding: 24px 24px 32px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    border-radius: 16px;
    background: #0C0C0C;
`;

export const CustomButton = styled.button`
    padding: 12px 18px;
    border-radius: 8px;
    border: 1px solid ${GV('purple')};
`

export const CustomTab = styled.button<{ isActive?: boolean }>`
    padding: 12px 18px;
    border-radius: 32px;
    ${({ isActive }) => isActive ? `background: #D96BFF;` : `background: #191919;`}
    ${({ isActive }) => !isActive ? `border: 1px solid #2B2928;` : ``}
    ${({ isActive }) => isActive ? `font-weight: 600; color: #0C0D0E;` : ``}
`;

export const Eclipse = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 20px;
    background: #1FDD00;
    filter: drop-shadow(0px 0px 4px #1FDD00);
`
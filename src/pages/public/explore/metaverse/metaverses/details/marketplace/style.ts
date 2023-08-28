import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export const MarketplaceContainer = styled.div`
    position: relative;
`

export const TitleBar = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    border-radius: 16px;
    background: #0C0C0C;
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
    padding: 24px 24px 32px 24px;
    flex-direction: column;
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

export const CustomImage = styled.img<{ w?: string, h?: string, r?: string }>`
    ${({ w }) => w ? `width: ${w};` : ``}
    ${({ h }) => h ? `width: ${h};` : ``}
    ${({ r }) => r ? `border-radius: ${r};` :  ``}
    border: 1px solid #7A8799;
`;

export const CustomText = styled.div`
    padding: 1rem 0 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const Eclipse = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 20px;
    background: #1FDD00;
    filter: drop-shadow(0px 0px 4px #1FDD00);
`;

export const Rect = styled.div`
    position: absolute;
    left: 142px;
    bottom: 522px;
    width: 700px;
    height: 749px;
    flex-shrink: 0;
    border-radius: 749px;
    background: rgba(235, 104, 198, 0.15);
    filter: blur(150px);
`
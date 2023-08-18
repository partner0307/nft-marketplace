import { GV } from '@/utils/style.util';
import styled from 'styled-components';

export const CommentContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;

export const ItemContainer = styled.div<{ max: string }>`
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

export const CustomButton = styled.button`
    display: flex;
    padding: 12px 18px;
    gap: 8px;
    border-radius: 32px;
    border: 1px solid #2B2928;
    background: #191919;
`

export const Avatar = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 1000px;
    border: 1px solid #F2F1F1;
`

export const Line = styled.div`
    background: #3D3D3E;
    width: 100%;
    height: 1px;
`;

export const Rect = styled.div`
    position: absolute;
    right: -193px;
    bottom: 261px;
    width: 700px;
    height: 749px;
    flex-shrink: 0;
    border-radius: 749px;
    background: rgba(235, 104, 198, 0.15);
    filter: blur(150px);
`
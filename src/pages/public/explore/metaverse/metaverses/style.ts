import styled from 'styled-components';
import { GV } from '@/utils/style.util';

export const MetaversesContainer = styled.div`
  background: #0c0d0e;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const MetaverseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 24px 0 48px 35px;
  align-self: center;
  max-width: 1200px;
  width: 100%;
`;

export const ItemContainer = styled.div`
  height: 2.5rem;
  padding: 0 1rem;
  max-width: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  font-size: ${GV('font-size')};
  border: 1px solid #2b2928;
  cursor: pointer;
  background: #191919;
  border-radius: 12px;
`;

export const Rect = styled.div`
  position: absolute;
  top: 441px;
  right: -197px;
  width: 700px;
  height: 708px;
  border-radius: 708px;
  background: rgba(235, 104, 198, 0.2);
  filter: blur(150px);
`;

export const Rect1 = styled.div`
  position: absolute;
  left: 231px;
  bottom: 331px;
  width: 700px;
  height: 708px;
  border-radius: 708px;
  background: rgba(104, 125, 235, 0.2);
  filter: blur(150px);
`;

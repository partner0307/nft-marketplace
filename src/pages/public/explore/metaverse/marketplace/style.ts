import styled from 'styled-components';

export const MarketplaceContainer = styled.div`
  background: #0c0d0e;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const MarketplaceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 24px 0 48px 35px;
  align-self: center;
  max-width: 1440px;
  width: 100%;
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

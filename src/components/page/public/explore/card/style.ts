import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;
  border: 1px solid #191919;
  background: rgba(0, 0, 0, 1);
  padding: 16px 12px;
`;

export const ImageLoader = styled.img`
  width: 312px;
  height: 200px;
  border-radius: 16px;
  border: 1px solid #b5b5b5;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1000px;
  border: 1px solid var(--new-styles-grays-bg, #f2f1f1);
`;

export const IconLoader = styled.img`
  width: 24px;
  height: 24px;
`;

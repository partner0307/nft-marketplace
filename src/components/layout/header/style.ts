import styled from "styled-components";

export const HeaderContainer = styled.header<{ isTop: boolean }>`
  position: fixed;
  transform: translate(-50%, 0);
  /* ${({ isTop }) =>
    !isTop
      ? `position: fixed; transform: translate(-50%, 0);`
      : `position: relative`} */
  top: 0;
  left: 50%;
  z-index: 8000;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
`;

export const HeaderWrapper = styled.menu`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;

  > div {
    > :not(:first-child) {
      @media screen and (max-width: 600px) {
        display: none;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

import styled from "styled-components";

export const FooterWrapper = styled.div`
  background: #161616;
  /* margin: -10rem 0 0; */
  padding: 10rem 0 0;
  display: flex;
  justify-content: flex-start;
  /* margin-left: 300px; */
`;

export const FooterContainer = styled.footer`
  max-width: 1440px;
  width: 100%;
  margin: auto;

  @media (max-width: 992px) {
    padding: 2rem 2rem 2rem;
  }
`;

export const ContentColor = styled.div`
  color: #6ed8d2;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Logo = styled.img`
  width: 74px;
  height: 100%;
`;

export const Line = styled.div`
  height: 1px;
  background: #9f96a7;
  width: 100%;
`;

import styled from "styled-components";

export const FooterWrapper = styled.div`
    background: #161616;
    width: 100%;
    margin: -10rem 0 0;
    padding: 15rem 0 0;
`

export const FooterContainer = styled.footer`
    max-width: 1440px;
    margin: auto;

    @media (max-width: 992px) {
        padding: 2rem 2rem 2rem;
    }
`

export const ContentColor = styled.div`
    color: #6ED8D2;
    font-weight: 600;
    text-transform: uppercase;
`;

export const Line = styled.div`
    height: 1px;
    background: #9F96A7;
    width: 100%;
    margin: 20px 0;
`
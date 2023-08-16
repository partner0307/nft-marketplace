import { Link } from "react-router-dom";
import styled from "styled-components";

export type StyledLinkPropsType = {
    offset?: string
    color?: string
    decorator?: 'overline' | 'underline',
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize'
}

export const StyledLink = styled(Link) <StyledLinkPropsType>`
    display: inline-flex;
    align-items: center;
    font-size: 0.875rem;
    ${({ decorator }) => decorator ? `text-decoration: ${decorator};` : ``}
    ${({ offset }) => offset ? `text-underline-offset: ${offset};` : ``}
    ${({ textTransform }) => textTransform ? `text-transform: ${textTransform};` : ``}
    ${({ color }) => color ? `color: ${color};` : ``}

    @media (max-width: 768px) {
        font-size: 0.5rem;
    }
`
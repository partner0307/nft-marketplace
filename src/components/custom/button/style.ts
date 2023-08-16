import styled from "styled-components";
import { GV } from "../../../utils/style.util";

export type StyledButtonType = {
    bg?: string
    color?: string
    p?: string
    w?: string
    h?: string
    fsize?: string
    radius?: string
    border?: string
}

export const StyledButton = styled.button<StyledButtonType>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    /* text-transform: uppercase; */
    font-size: ${GV("font-size")};
    transition: all ease-in-out .1s;

    ${({ w }) => w ? `width: ${w};` : ``}
    ${({ h }) => `line-height: ${h ? h : '2.69rem'};`}
    ${({ h }) => `min-height: ${h ? h : '2.69rem'};`}
    ${({ p }) => `padding: ${p ?? '0 1rem'};`}
    ${({ color }) => color ? `color: ${color};` : ``}
    ${({ bg }) => bg ? `background-image: ${bg} !important;` : ``}
    ${({ fsize }) => fsize ? `font-size: ${fsize};` : ``}
    ${({ radius }) => radius ? `border-radius: ${radius} !important;` : ``}
    ${({ border, bg }) => `border:  1px solid ${border ?? bg ?? "transparent"};`}

    &:hover {
        background: #111;
        border-color: #1c1c1c;
        border-radius: 8px;
    }
`

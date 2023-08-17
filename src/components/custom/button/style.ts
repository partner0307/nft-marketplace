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
    shadow?: string
    border?: string
}

export const StyledButton = styled.button<StyledButtonType>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    font-size: ${GV("font-size")};
    transition: all ease-in-out .1s;
    letter-spacing: 1px;

    ${({ w }) => w ? `width: ${w};` : ``}
    ${({ h }) => `line-height: ${h ? h : '2.69rem'};`}
    ${({ h }) => `min-height: ${h ? h : '2.69rem'};`}
    ${({ p }) => `padding: ${p ?? '0 1rem'};`}
    ${({ color }) => color ? `color: ${color};` : ``}
    ${({ bg }) => bg ? `background: ${bg} !important;` : ``}
    ${({ fsize }) => fsize ? `font-size: ${fsize};` : ``}
    ${({ radius }) => radius ? `border-radius: ${radius} !important;` : ``}
    ${({ shadow }) => shadow ? `box-shadow: ${shadow}` : ``}
    ${({ border, bg }) => `border:  1px solid ${border ?? bg ?? "transparent"};`}
`

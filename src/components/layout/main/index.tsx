import React from "react";
import styled from "styled-components";

export const Main = styled.main<{ slideOpened?: boolean }>`
    position: relative;
    min-height: 100vh;
    padding-top: 64px;
    margin-left: ${({ slideOpened }) => !slideOpened ? `0px` : `300px`};
    transition: all ease-in .3s;
`

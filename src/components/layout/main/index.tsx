import React from "react";
import styled from "styled-components";

export const Main = styled.main<{ slideOpened?: boolean }>`
    position: relative;
    min-height: 100vh;
    padding-top: 64px;
    transition: all ease-in .5s;
    
    @media (min-width: 1025px) {
        margin-left: ${({ slideOpened }) => !slideOpened ? `0px` : `300px`};
    }
`

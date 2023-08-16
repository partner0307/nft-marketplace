import React, { useEffect, useState } from "react";
import { HeaderContainer, HeaderWrapper } from "./style";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useScroll from "../../../hooks/useScroll";
import Menu from "./components/menu";
import Actions from "./components/actions";
import LogoContainer from "./components/logo";

const Header = () => {

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Menu />
                <LogoContainer />
                <Actions />
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header;

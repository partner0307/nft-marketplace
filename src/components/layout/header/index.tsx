import React, { useEffect, useState } from "react";
import { HeaderContainer, HeaderWrapper } from "./style";
import useScroll from "@/hooks/useScroll";
import Menu from "./components/menu";
import Actions from "./components/actions";
import LogoContainer from "./components/logo";

const Header = () => {
    const [, scrollY,] = useScroll();

    return (
        <HeaderContainer isTop={!(scrollY > 50)}>
            <HeaderWrapper>
                <Menu />
                <LogoContainer />
                <Actions />
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header;

import React, { useEffect, useState } from "react";
import { HeaderContainer, HeaderWrapper } from "./style";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useScroll from "../../../hooks/useScroll";
import Menu from "./components/menu";
import Actions from "./components/actions";

import Logo from "../../../assets/img/logo.png"
import { Flex } from "../../basic";
import { Icon } from "../../custom";

const Header = () => {

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Menu />
                <Link to='/'>
                    <Flex $style={{
                        w: '200px',
                        p: '4px 24px',
                        hAlign: 'space-between'
                    }}>
                        <img src={Logo} />
                        <Icon icon='Logo' />
                    </Flex>
                </Link>
                <Actions />
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header;

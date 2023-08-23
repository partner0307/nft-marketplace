import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Content, ItemContainer, MenuContainer } from './style';
import { Icon, Input, Dropdown } from '@/components/custom';
import { usePublicLayoutContext } from '@/layouts/PublicLayout/context';
import { Link } from 'react-router-dom';

const Menu = () => {
    const { hash, pathname, search } = useLocation();
    const { slideOpened, dispatch } = usePublicLayoutContext();
    const [keyword, setKeyword] = useState('');
    const location = useLocation();
    useEffect(() => {
        if (location.pathname.split("/")[2] && location.pathname.split("/")[2] !== "") {
            dispatch({ type: "toggleMenu", value: { slideOpened: false } });
        }
    }, [location])
    return (
        <MenuContainer>
            {pathname === '/'
            ? <ItemContainer onClick={() => dispatch({ type: "toggleMenu", value: {slideOpened: !slideOpened} })}>
                <Content>Explore</Content><Icon icon='Explore' />
            </ItemContainer>
            : <Link to='/'><ItemContainer onClick={() => dispatch({ type: "toggleMenu", value: {slideOpened: false} })}>
                <Icon icon='ArrowColorLeft' /><Content>Home</Content>
            </ItemContainer></Link>}
            <ItemContainer>
                <Dropdown initialLabel={<Content>Marketplaces</Content>} />
            </ItemContainer>
            <ItemContainer>
                <Content>Academy</Content>
            </ItemContainer>
            <Input value={keyword} placeholder='Search...' padding='6px 12px' helpSide={<Icon icon='Search' />} onChange={(e: any) => setKeyword(e.target.value)} />
        </MenuContainer>
    )
}

export default Menu;

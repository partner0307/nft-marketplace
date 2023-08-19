import React from 'react';
import { useLocation } from 'react-router-dom';
import { Content, ItemContainer, MenuContainer } from './style';
import { Icon, Input, Dropdown } from '@/components/custom';
import { usePublicLayoutContext } from '@/layouts/PublicLayout/context';
import { Link } from 'react-router-dom';

const Menu = () => {
    const { hash, pathname, search } = useLocation();
    const { slideOpened, dispatch } = usePublicLayoutContext();
    return (
        <MenuContainer>
            {pathname === '/'
            ? <ItemContainer onClick={() => dispatch({ type: "toggleMenu", value: {} })}>
                <Content>Explore</Content><Icon icon='Explore' />
            </ItemContainer>
            : <Link to='/'><ItemContainer onClick={() => dispatch({ type: "toggleMenu", value: {} })}>
                <Icon icon='ArrowLeft' /><Content>Home</Content>
            </ItemContainer></Link>}
            <ItemContainer>
                <Dropdown initialLabel={<Content>Marketplaces</Content>} />
            </ItemContainer>
            <ItemContainer>
                <Content>Academy</Content>
            </ItemContainer>
            <Input value='' placeholder='Search...' padding='6px 12px' helpSide={<Icon icon='Search' />}></Input>
        </MenuContainer>
    )
}

export default Menu;

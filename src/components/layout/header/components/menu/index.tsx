import React from 'react';
import { Content, ItemContainer, MenuContainer } from './style';
import { Icon, Input, Dropdown } from '@/components/custom';
import { usePublicLayoutContext } from '@/layouts/PublicLayout/context';

const Menu = () => {
    const { slideOpened, dispatch } = usePublicLayoutContext();
    return (
        <MenuContainer>
            <ItemContainer onClick={() => dispatch({ type: "toggleMenu", value: {} })}>
                <Content>Explore</Content><Icon icon='Explore' />
            </ItemContainer>
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

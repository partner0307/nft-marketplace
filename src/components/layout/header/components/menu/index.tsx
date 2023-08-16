import React from 'react';
import { MenuContainer } from './style';
import { Button, Icon, Input, Dropdown } from '../../../../custom';
import { Flex } from '../../../../basic';

const Menu = () => {
    return <MenuContainer>
        <Button $style={{
            h: '2.5rem',
            p: '0 1rem',
        }}>Explore<Icon icon='Explore'></Icon>
        </Button>
        <Dropdown initialLabel='Marketplaces' />
        <Button $style={{
            h: '2.5rem',
            p: '0 1rem',
        }}>Academy
        </Button>
        <Input value='' placeholder='Search...' helpSide={<Icon icon='Search' />}></Input>
    </MenuContainer>
}

export default Menu;
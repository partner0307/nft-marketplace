import React from 'react';
import { SubMenuContainer, TabButton } from './style';

const SubMenu = () => {
    return <SubMenuContainer>
        <TabButton>Marketplace</TabButton>
        <TabButton>NFTs</TabButton>
        <TabButton isActive>Metaverse</TabButton>
        <TabButton>Hire Talents</TabButton>
        <TabButton>DApps</TabButton>
        <TabButton>Avatar</TabButton>
    </SubMenuContainer>
}

export default SubMenu;
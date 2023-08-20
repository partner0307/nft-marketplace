import { Flex, P } from '@/components/basic';
import React from 'react';
import { Link } from 'react-router-dom';
import { BuildDetailsContainer, BuildDetailsWrapper, Rect, Rect1 } from './style';
import MenuList from '@/components/page/public/explore/menu-list';
import SubMenu from '@/components/page/public/explore/submenu';
import RealEstate from './real-estate';

const BuildDetails = () => {
    return <>
        <Rect />
        <Rect1 />
        <SubMenu />
        <Flex $style={{ hAlign: 'center' }}>
            <BuildDetailsContainer>
                <P><Link to='/metaverses'>Metaverse / </Link><Link to='/build-metaverse'>Build Metaverse / </Link>Real Estate</P>
                <BuildDetailsWrapper>
                    <MenuList />
                    <RealEstate />
                </BuildDetailsWrapper>
            </BuildDetailsContainer>
        </Flex>
    </>
}

export default BuildDetails;
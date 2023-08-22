import React from 'react';
import SubHeader from '@/components/page/public/explore/subheader';
import { Dropdown, Icon } from '@/components/custom';
import { DropdownContainer, DropdownItem, ItemContainer, MetaverseWrapper, MetaversesContainer, Rect, Rect1 } from './style';
import { Flex, P } from '@/components/basic';
import Card from '@/components/page/public/explore/metaverse-card';
import Pagination from '@/components/custom/pagination';

import Image1 from '@/assets/img/metaverse/1.png';
import Image2 from '@/assets/img/metaverse/2.png';
import Image3 from '@/assets/img/metaverse/3.png';
import Avatar from '@/assets/img/metaverse/avatar.png';
import Avatar1 from '@/assets/img/metaverse/avatar1.png';
import Ether from '@/assets/img/metaverse/ether.png';
import Mana from '@/assets/img/metaverse/mana.png';
import Mana1 from '@/assets/img/metaverse/mana1.png';
import { Link } from 'react-router-dom';

const tabList = [
    { name: 'All Categories' },
    { name: 'Games' },
    { name: 'Gambling' },
    { name: 'Social' },
    { name: 'Collectibles' },
    { name: 'Marketplace' },
    { name: 'Real Estate' }
]

const Metaverses = () => {
    return <>
        <MetaversesContainer>
            <Rect />
            <Rect1 />
            <SubHeader title='Top Metaverses' tabList={tabList} isSearch rightComponent={
            <ItemContainer>
                <Dropdown initialLabel='All Chains' container={() => (
                    <DropdownContainer>
                        <DropdownItem>Item</DropdownItem>
                        <DropdownItem>Item</DropdownItem>
                    </DropdownContainer>
                )} />
            </ItemContainer>} />
            <MetaverseWrapper>
                <Flex $style={{ hAlign: 'center', fWrap: 'wrap', gap: '32px' }}>
                    <Link to='/metaverse-details'><Card title='Decentraland' image={Image1} avatar={Avatar} icon1={Mana} icon2={Ether} /></Link>
                    <Link to='/metaverse-details'><Card title='Decentraland' image={Image2} avatar={Avatar1} icon1={Mana1} icon2={Ether} /></Link>
                    <Link to='/metaverse-details'><Card title='Decentraland' image={Image3} avatar={Avatar} icon1={Mana} icon2={Ether} /></Link>
                    <Link to='/metaverse-details'><Card title='Decentraland' image={Image1} avatar={Avatar} icon1={Mana1} icon2={Ether} /></Link>
                    <Link to='/metaverse-details'><Card title='Decentraland' image={Image2} avatar={Avatar} icon1={Mana} icon2={Ether} /></Link>
                    <Link to='/metaverse-details'><Card title='Decentraland' image={Image3} avatar={Avatar} icon1={Mana1} icon2={Ether} /></Link>
                    <Link to='/metaverse-details'><Card title='Decentraland' image={Image1} avatar={Avatar} icon1={Mana} icon2={Ether} /></Link>
                    <Link to='/metaverse-details'><Card title='Decentraland' image={Image2} avatar={Avatar} icon1={Mana1} icon2={Ether} /></Link>
                    <Link to='/metaverse-details'><Card title='Decentraland' image={Image3} avatar={Avatar} icon1={Mana} icon2={Ether} /></Link>
                    <Link to='/metaverse-details'><Card title='Decentraland' image={Image1} avatar={Avatar} icon1={Mana1} icon2={Ether} /></Link>
                    <Link to='/metaverse-details'><Card title='Decentraland' image={Image2} avatar={Avatar} icon1={Mana} icon2={Ether} /></Link>
                    <Link to='/metaverse-details'><Card title='Decentraland' image={Image3} avatar={Avatar} icon1={Mana1} icon2={Ether} /></Link>
                    <Link to='/metaverse-details'><Card title='Decentraland' image={Image1} avatar={Avatar} icon1={Mana} icon2={Ether} /></Link>
                    <Link to='/metaverse-details'><Card title='Decentraland' image={Image2} avatar={Avatar} icon1={Mana1} icon2={Ether} /></Link>
                    <Link to='/metaverse-details'><Card title='Decentraland' image={Image3} avatar={Avatar} icon1={Mana} icon2={Ether} /></Link>
                </Flex>
                <Pagination />
            </MetaverseWrapper>
        </MetaversesContainer>
    </>
}

export default Metaverses;
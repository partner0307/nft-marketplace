import React from 'react';
import SubHeader from '@/components/page/public/explore/subheader';
import { Dropdown, Icon } from '@/components/custom';
import { ItemContainer, MetaverseWrapper, MetaversesContainer, Rect, Rect1 } from './style';
import { Flex, P } from '@/components/basic';
import Card from '@/components/page/public/explore/card';

import Image1 from '@/assets/img/metaverse/1.png';
import Image2 from '@/assets/img/metaverse/2.png';
import Image3 from '@/assets/img/metaverse/3.png';
import Avatar from '@/assets/img/metaverse/avatar.png';
import Avatar1 from '@/assets/img/metaverse/avatar1.png';
import Ether from '@/assets/img/metaverse/ether.png';
import Mana from '@/assets/img/metaverse/mana.png';
import Mana1 from '@/assets/img/metaverse/mana1.png';
import Pagination from '@/components/custom/pagination';


const Metaverses = () => {
    return <MetaversesContainer>
        <SubHeader title='Top Metaverses' isSearch rightComponent={
        <ItemContainer>
            <Dropdown initialLabel='All Chains' />
        </ItemContainer>} />
        <MetaverseWrapper>
            <Flex $style={{ maxW: '1440px', fDirection: 'row', fWrap: 'wrap', gap: '32px' }}>
                <Card title='Decentraland' image={Image1} avatar={Avatar} icon1={Mana} icon2={Ether} />
                <Card title='Decentraland' image={Image2} avatar={Avatar1} icon1={Mana1} icon2={Ether} />
                <Card title='Decentraland' image={Image3} avatar={Avatar} icon1={Mana} icon2={Ether} />
                <Card title='Decentraland' image={Image1} avatar={Avatar} icon1={Mana1} icon2={Ether} />
                <Card title='Decentraland' image={Image2} avatar={Avatar} icon1={Mana} icon2={Ether} />
                <Card title='Decentraland' image={Image3} avatar={Avatar} icon1={Mana1} icon2={Ether} />
                <Card title='Decentraland' image={Image1} avatar={Avatar} icon1={Mana} icon2={Ether} />
                <Card title='Decentraland' image={Image2} avatar={Avatar} icon1={Mana1} icon2={Ether} />
                <Card title='Decentraland' image={Image3} avatar={Avatar} icon1={Mana} icon2={Ether} />
                <Card title='Decentraland' image={Image1} avatar={Avatar} icon1={Mana1} icon2={Ether} />
                <Card title='Decentraland' image={Image2} avatar={Avatar} icon1={Mana} icon2={Ether} />
                <Card title='Decentraland' image={Image3} avatar={Avatar} icon1={Mana1} icon2={Ether} />
                <Card title='Decentraland' image={Image1} avatar={Avatar} icon1={Mana} icon2={Ether} />
                <Card title='Decentraland' image={Image2} avatar={Avatar} icon1={Mana1} icon2={Ether} />
                <Card title='Decentraland' image={Image3} avatar={Avatar} icon1={Mana} icon2={Ether} />
            </Flex>
            <Pagination />
        </MetaverseWrapper>
        <Rect />
        <Rect1 />
    </MetaversesContainer>
}

export default Metaverses;
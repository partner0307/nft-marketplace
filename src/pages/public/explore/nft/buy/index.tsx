import React from 'react';
import SubHeader from '@/components/page/public/explore/subheader';
import { ItemContainer } from './style';
import { Dropdown } from '@/components/custom';
import { Flex, Grid } from '@/components/basic';
import CardItem from '@/components/page/public/home/carditem';

const tabList = [
    { name: 'Popular', active: true },
    { name: 'Art', active: false },
    { name: 'Games', active: false},
    { name: 'Sport', active: false},
    { name: 'Photography', active: false},
    { name: 'Nature', active: false},
    { name: 'Sci-fi', active: false },
    { name: 'PFPs', active: false },
    { name: 'Music', active: false },
    { name: 'Others', active: false }
]

import Image from '@/assets/img/avatar1.png';
import Avatar from '@/assets/img/avatar1.png';
import Pagination from '@/components/custom/pagination';
import { Link } from 'react-router-dom';
import { routerer } from '@/utils/util';

const BuyNFT = () => {
    return <Flex $style={{ fDirection: 'column', gap: '24px' }}>
        <SubHeader
        title='NFT Collections'
        description='Discover the top NFT collections across multiple chains including Ethereum, BNB Chain, Polygon etc.'
        tabList={tabList}
        isSearch
        isNFT
        rightComponent={
        <ItemContainer>
            <Dropdown initialLabel='All Chains' />
        </ItemContainer>} />
        <Grid $style={{ columns: '3', gap: '1.5rem', p: '2rem' }}>
            <Link to={routerer('nft_details', 'nft_collections')}><CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' /></Link>
            <Link to={routerer('nft_details', 'nft_collections')}><CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' /></Link>
            <Link to={routerer('nft_details', 'nft_collections')}><CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' /></Link>
            <Link to={routerer('nft_details', 'nft_collections')}><CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' /></Link>
            <Link to={routerer('nft_details', 'nft_collections')}><CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' /></Link>
            <Link to={routerer('nft_details', 'nft_collections')}><CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' /></Link>
            <Link to={routerer('nft_details', 'nft_collections')}><CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' /></Link>
            <Link to={routerer('nft_details', 'nft_collections')}><CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' /></Link>
            <Link to={routerer('nft_details', 'nft_collections')}><CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' /></Link>
            <Link to={routerer('nft_details', 'nft_collections')}><CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' /></Link>
            <Link to={routerer('nft_details', 'nft_collections')}><CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' /></Link>
            <Link to={routerer('nft_details', 'nft_collections')}><CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' /></Link>
            <Link to={routerer('nft_details', 'nft_collections')}><CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' /></Link>
            <Link to={routerer('nft_details', 'nft_collections')}><CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' /></Link>
            <Link to={routerer('nft_details', 'nft_collections')}><CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' /></Link>
            <Link to={routerer('nft_details', 'nft_collections')}><CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' /></Link>
        </Grid>
        <Flex $style={{ p: '32px 48px' }}>
            <Pagination />
        </Flex>
    </Flex>
}

export default BuyNFT;
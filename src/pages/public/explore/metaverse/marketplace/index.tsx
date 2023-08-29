import React from 'react';
import { MarketplaceContainer, Rect, Rect1 } from './style';
import SubHeader from '@/components/page/public/explore/subheader';
import { ItemContainer } from './style';
import { Dropdown } from '@/components/custom';
import Pagination from '@/components/custom/pagination';
import { Flex } from '@/components/basic';
import MetaverseTable from '@/pages/public/home/explore/tables/metaverse';

const tabList = [
    { name: 'All Categories', active: true },
    { name: 'Games', active: false },
    { name: 'Gambling', active: false},
    { name: 'Social', active: false},
    { name: 'Collectibles', active: false},
    { name: 'Marketplace', active: false},
    { name: 'Real Estate', active: false }
]


const Marketplace = () => {
    return <MarketplaceContainer>
        <Rect />
        <Rect1 />
        <SubHeader title='Top Metaverses' tabList={tabList} isSearch rightComponent={
        <ItemContainer>
            <Dropdown initialLabel='All Chains' />
        </ItemContainer>} />
        <Flex $style={{ fDirection: "column", p: '32px', w: '100%' }}>
            <MetaverseTable />
        </Flex>
        <Flex $style={{ p: '0 32px 48px' }}>
            <Pagination />
        </Flex>
    </MarketplaceContainer>
}

export default Marketplace;
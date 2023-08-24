import React from 'react';
import { MarketplaceContainer, Rect, Rect1 } from './style';
import SubHeader from '@/components/page/public/explore/subheader';
import { ItemContainer } from '../metaverses/style';
import { Dropdown } from '@/components/custom';
import Pagination from '@/components/custom/pagination';
import Table, { TableFieldInterface } from '@/components/custom/table';
import { Flex, Span } from '@/components/basic';
import { tokillo } from '@/utils/util';
import { metaverses } from '@/constants/mockup/metaverses';
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
        <Flex $style={{ p: '32px' }}>
            <MetaverseTable />
        </Flex>
        <Flex $style={{ p: '0 32px 48px' }}>
            <Pagination />
        </Flex>
    </MarketplaceContainer>
}

export default Marketplace;
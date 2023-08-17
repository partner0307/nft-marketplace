import React from 'react';
import { MarketplaceContainer, Rect, Rect1 } from './style';
import SubHeader from '../../../../../components/page/public/explore/subheader';
import { ItemContainer } from '../metaverses/style';
import { Dropdown } from '../../../../../components/custom';

const Marketplace = () => {
    return <MarketplaceContainer>
        <SubHeader title='Top Metaverses' isSearch rightComponent={
        <ItemContainer>
            <Dropdown initialLabel='All Chains' />
        </ItemContainer>} />
        <Rect />
        <Rect1 />
    </MarketplaceContainer>
}

export default Marketplace;
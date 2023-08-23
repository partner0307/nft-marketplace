import React from 'react';
import { BuildContainer, BuildWrapper } from './style';
import SubHeader from '@/components/page/public/explore/subheader';
import { Icon, Input } from '@/components/custom';
import { Flex, P } from '@/components/basic';
import Builder from '@/components/page/public/explore/builder';

import RealEstate from '@/assets/img/build-metaverse/real-estate.png';
import RealEstateIcon from '@/assets/img/build-metaverse/real-estate-icon.png';
import Ecommerce from '@/assets/img/build-metaverse/ecommerce.png';
import EcommerceIcon from '@/assets/img/build-metaverse/ecommerce-icon.png';
import Entertainment from '@/assets/img/build-metaverse/entertainment.png';
import EntertainmentIcon from '@/assets/img/build-metaverse/entertainment-icon.png';
import { Link } from 'react-router-dom';
import _ROUTERS from '@/constants/route.constant';
import { routerer } from '@/utils/util';

const Build = () => {
    const [keyword, setKeyword] = React.useState('');
    return <BuildContainer>
        <SubHeader title='Build Metaverse' rightComponent={
            <Flex $style={{ maxW: '200px' }}>
                <Input value={keyword} placeholder='Search' padding='6px 12px' helpSide={<Icon icon='Search' />} onChange={(e: any) => setKeyword(e.target.value)} />
            </Flex>
        } />
        <BuildWrapper>
            <P $style={{ size: '20px', weight: '600' }}>Please select a metaverse area to build in</P>
            <Flex $style={{ hAlign: 'center', fDirection: 'row', fWrap: 'wrap', gap: '32px' }}>
                <Link to={routerer("build_metaverse", "real_estate")}><Builder title='Real Estate' image={RealEstate} icon={RealEstateIcon} /></Link>
                <Link to={routerer("build_metaverse", "ecommerce")}><Builder title='Ecommerce' image={Ecommerce} icon={EcommerceIcon} /></Link>
                <Link to={routerer("build_metaverse", "entertainment")}><Builder title='Entertainment' image={Entertainment} icon={EntertainmentIcon} /></Link>
                <Link to={routerer("build_metaverse", "automobile")}><Builder title='Automobile' image={RealEstate} icon={RealEstateIcon} /></Link>
                <Link to={routerer("build_metaverse", "sport_nutritions")}><Builder title='Sport & Nutrition' image={Ecommerce} icon={EcommerceIcon} /></Link>
                <Link to={routerer("build_metaverse", "education")}><Builder title='Education' image={Entertainment} icon={EntertainmentIcon} /></Link>
                <Link to={routerer("build_metaverse", "gaming")}><Builder title='Gaming' image={RealEstate} icon={RealEstateIcon} /></Link>
                <Link to={routerer("build_metaverse", "dispensary")}><Builder title='Dispensary' image={Ecommerce} icon={EcommerceIcon} /></Link>
                <Link to={routerer("build_metaverse", "cryptocurrency")}><Builder title='Cryptocurrency' image={Entertainment} icon={EntertainmentIcon} /></Link>
                <Link to={routerer("build_metaverse", "hotel")}><Builder title='Hotel' image={RealEstate} icon={RealEstateIcon} /></Link>
                <Link to={routerer("build_metaverse", "restaurant")}><Builder title='Restaurant' image={Ecommerce} icon={EcommerceIcon} /></Link>
                <Link to={routerer("build_metaverse", "marketplace")}><Builder title='Marketplace' image={Entertainment} icon={EntertainmentIcon} /></Link>
            </Flex>
        </BuildWrapper>
    </BuildContainer>
}

export default Build;
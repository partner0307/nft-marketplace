import React from 'react';
import { BuildContainer, BuildWrapper } from './style';
import SubHeader from '@/components/page/public/explore/subheader';
import { Icon, Input } from '@/components/custom';
import { Flex, Grid, P } from '@/components/basic';
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
import { GV } from '@/utils/style.util';

const Build = () => {
    const [keyword, setKeyword] = React.useState('');
    return <BuildContainer>
        <SubHeader title='Build Metaverse' rightComponent={
            <Flex $style={{ maxW: '200px' }}>
                <Input value={keyword} placeholder='Search' padding='6px 12px' helpSide={<Icon icon='Search' />} onChange={(e: any) => setKeyword(e.target.value)} />
            </Flex>
        } />
        <BuildWrapper>
            <P $style={{ size: GV('font-size-3'), weight: GV('weight-lg') }}>Please select a metaverse area to build in</P>
            <Grid $style={{ columns: "3", gap: "2rem" }}>
                <Builder to={routerer("build_metaverse", "real_estate")} title='Real Estate' image={RealEstate} icon={RealEstateIcon} />
                <Builder to={routerer("build_metaverse", "ecommerce")} title='Ecommerce' image={Ecommerce} icon={EcommerceIcon} />
                <Builder to={routerer("build_metaverse", "entertainment")} title='Entertainment' image={Entertainment} icon={EntertainmentIcon} />
                <Builder to={routerer("build_metaverse", "automobile")} title='Automobile' image={RealEstate} icon={RealEstateIcon} />
                <Builder to={routerer("build_metaverse", "sport_nutritions")} title='Sport & Nutrition' image={Ecommerce} icon={EcommerceIcon} />
                <Builder to={routerer("build_metaverse", "education")} title='Education' image={Entertainment} icon={EntertainmentIcon} />
                <Builder to={routerer("build_metaverse", "gaming")} title='Gaming' image={RealEstate} icon={RealEstateIcon} />
                <Builder to={routerer("build_metaverse", "dispensary")} title='Dispensary' image={Ecommerce} icon={EcommerceIcon} />
                <Builder to={routerer("build_metaverse", "cryptocurrency")} title='Cryptocurrency' image={Entertainment} icon={EntertainmentIcon} />
                <Builder to={routerer("build_metaverse", "hotel")} title='Hotel' image={RealEstate} icon={RealEstateIcon} />
                <Builder to={routerer("build_metaverse", "restaurant")} title='Restaurant' image={Ecommerce} icon={EcommerceIcon} />
                <Builder to={routerer("build_metaverse", "marketplace")} title='Marketplace' image={Entertainment} icon={EntertainmentIcon} />
            </Grid>
        </BuildWrapper>
    </BuildContainer>
}

export default Build;
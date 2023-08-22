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

const Build = () => {
    return <BuildContainer>
        <SubHeader title='Build Metaverse' rightComponent={
            <Flex $style={{ maxW: '200px' }}>
                <Input value='' placeholder='Search' padding='6px 12px' helpSide={<Icon icon='Search' />} />
            </Flex>
        } />
        <BuildWrapper>
            <P $style={{ size: '20px', weight: '600' }}>Please select a metaverse area to build in</P>
            <Flex $style={{ hAlign: 'center', fDirection: 'row', fWrap: 'wrap', gap: '32px' }}>
                <Link to='/real-estate'><Builder title='Real Estate' image={RealEstate} icon={RealEstateIcon} /></Link>
                <Link to='/real-estate'><Builder title='Ecommerce' image={Ecommerce} icon={EcommerceIcon} /></Link>
                <Link to='/real-estate'><Builder title='Entertainment' image={Entertainment} icon={EntertainmentIcon} /></Link>
                <Link to='/real-estate'><Builder title='Real Estate' image={RealEstate} icon={RealEstateIcon} /></Link>
                <Link to='/real-estate'><Builder title='Ecommerce' image={Ecommerce} icon={EcommerceIcon} /></Link>
                <Link to='/real-estate'><Builder title='Entertainment' image={Entertainment} icon={EntertainmentIcon} /></Link>
                <Link to='/real-estate'><Builder title='Real Estate' image={RealEstate} icon={RealEstateIcon} /></Link>
                <Link to='/real-estate'><Builder title='Ecommerce' image={Ecommerce} icon={EcommerceIcon} /></Link>
                <Link to='/real-estate'><Builder title='Entertainment' image={Entertainment} icon={EntertainmentIcon} /></Link>
                <Link to='/real-estate'><Builder title='Real Estate' image={RealEstate} icon={RealEstateIcon} /></Link>
                <Link to='/real-estate'><Builder title='Ecommerce' image={Ecommerce} icon={EcommerceIcon} /></Link>
                <Link to='/real-estate'><Builder title='Entertainment' image={Entertainment} icon={EntertainmentIcon} /></Link>
            </Flex>
        </BuildWrapper>
    </BuildContainer>
}

export default Build;
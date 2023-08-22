import React, { useState } from 'react';
import { Banner, BannerContent, BannerImage, CustomDropdown, CustomFont, EcommerceContainer, IconBar, Line } from './style';
import { Flex, P, Span } from '@/components/basic';
import { Dropdown, Icon, Input } from '@/components/custom';
import EcommerceMenu from '@/components/page/public/explore/ecommerce-menu';

import Image from '@/assets/img/home.png';

const Ecommerce = () => {
    return <EcommerceContainer>
    <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
        <P $style={{ size: '32px', weight: '700' }}>Ecommerce</P>
        <Flex $style={{ gap: '12px', vAlign: 'center' }}>
            <Input value='' placeholder='Search...' padding='6px 12px' helpSide={<Icon icon='Search' />} />
            <CustomDropdown>
                <Dropdown initialLabel='Newly Listed' />
            </CustomDropdown>
        </Flex>
    </Flex>
    <Flex $style={{ gap: '32px' }}>
        <EcommerceMenu />
        <Flex $style={{ fDirection: 'column', gap: '1.62rem', w: '100%' }}>
            <Flex>
                <Banner>
                    <BannerImage src={Image} />
                    <IconBar>
                        <Icon icon='Share' />
                        <Icon icon='Bookmark' />
                        <Icon icon='ShopCart' />
                    </IconBar>
                </Banner>
                <BannerContent>
                    <P $style={{ size: '1.25rem', weight: '700' }}>Single Family Residential</P>
                    <P $style={{ size: '1rem' }}>
                        Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.
                    </P>
                    <Flex $style={{ hAlign: 'space-between' }}>
                        <Flex $style={{ vAlign: 'center' }}>
                            <CustomFont>$197</CustomFont>
                            <P $style={{ size: '2rem', weight: '600' }}>$197</P>
                        </Flex>
                        <Flex $style={{ vAlign: 'center' }}>
                            <Flex $style={{ vAlign: 'center', gap: '0.25rem' }}>
                                <Icon icon='Star' />
                                <Span>4.5</Span>
                            </Flex>
                            <Line />
                            <Span>12</Span>
                        </Flex>
                    </Flex>
                </BannerContent>
            </Flex>
        </Flex>
    </Flex>
</EcommerceContainer>
}

export default Ecommerce;
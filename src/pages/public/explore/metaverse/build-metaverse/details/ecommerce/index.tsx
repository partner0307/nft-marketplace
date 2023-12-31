import React, { useState } from 'react';
import { Banner, BannerContent, BannerImage, CustomDropdown, CustomFont, EcommerceContainer, IconBar, Line } from './style';
import { Flex, Grid, P, Span } from '@/components/basic';
import { Dropdown, Icon, Input } from '@/components/custom';
import EcommerceMenu from '@/components/page/public/explore/ecommerce-menu';

import Image from '@/assets/img/home.png';
import EcommerceCard from '@/components/page/public/explore/ecommerce-card';
import { GV } from '@/utils/style.util';

const Ecommerce = () => {
    return <EcommerceContainer>
    <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
        <P $style={{ size: GV('font-size-2'), weight: GV('weight-xl') }}>Ecommerce</P>
        <Flex $style={{ gap: '12px', vAlign: 'center' }}>
            <Input value='' placeholder='Search...' padding='6px 12px' helpSide={<Icon icon='Search' />} />
            <CustomDropdown>
                <Dropdown initialLabel='Newly Listed' />
            </CustomDropdown>
        </Flex>
    </Flex>
    <Flex $style={{ gap: '32px' }}>
        <EcommerceMenu />
        <Flex $style={{ fDirection: 'column', flex: '1', gap: '1.62rem', w: '100%' }}>
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
                    <P $style={{ size: GV('font-size-3'), weight: GV('weight-xl') }}>Single Family Residential</P>
                    <P $style={{ size: GV('font-size') }}>
                        Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.
                    </P>
                    <Flex $style={{ hAlign: 'space-between' }}>
                        <Flex $style={{ vAlign: 'center' }}>
                            <CustomFont>$197</CustomFont>
                            <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg')}}>$197</P>
                        </Flex>
                        <Flex $style={{ vAlign: 'center', gap: '0.5rem' }}>
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
            <Grid $style={{  columns: '3', gap: '2rem' }}>
                <EcommerceCard title='Golden Runner' description='Forem ipsum dolor sit amet, cons ectetur adipiscing elit. Nunkkkkrt' reduce_price='$197' current_price='$197' rate={4.5} visitors={12} />
                <EcommerceCard title='Golden Runner' description='Forem ipsum dolor sit amet, cons ectetur adipiscing elit. Nunkkkkrt' reduce_price='$197' current_price='$197' rate={4.5} visitors={12} />
                <EcommerceCard title='Golden Runner' description='Forem ipsum dolor sit amet, cons ectetur adipiscing elit. Nunkkkkrt' reduce_price='$197' current_price='$197' rate={4.5} visitors={12} />
                <EcommerceCard title='Golden Runner' description='Forem ipsum dolor sit amet, cons ectetur adipiscing elit. Nunkkkkrt' reduce_price='$197' current_price='$197' rate={4.5} visitors={12} />
                <EcommerceCard title='Golden Runner' description='Forem ipsum dolor sit amet, cons ectetur adipiscing elit. Nunkkkkrt' reduce_price='$197' current_price='$197' rate={4.5} visitors={12} />
                <EcommerceCard title='Golden Runner' description='Forem ipsum dolor sit amet, cons ectetur adipiscing elit. Nunkkkkrt' reduce_price='$197' current_price='$197' rate={4.5} visitors={12} />
                <EcommerceCard title='Golden Runner' description='Forem ipsum dolor sit amet, cons ectetur adipiscing elit. Nunkkkkrt' reduce_price='$197' current_price='$197' rate={4.5} visitors={12} />
                <EcommerceCard title='Golden Runner' description='Forem ipsum dolor sit amet, cons ectetur adipiscing elit. Nunkkkkrt' reduce_price='$197' current_price='$197' rate={4.5} visitors={12} />
                <EcommerceCard title='Golden Runner' description='Forem ipsum dolor sit amet, cons ectetur adipiscing elit. Nunkkkkrt' reduce_price='$197' current_price='$197' rate={4.5} visitors={12} />
                <EcommerceCard title='Golden Runner' description='Forem ipsum dolor sit amet, cons ectetur adipiscing elit. Nunkkkkrt' reduce_price='$197' current_price='$197' rate={4.5} visitors={12} />
            </Grid>
        </Flex>
    </Flex>
</EcommerceContainer>
}

export default Ecommerce;
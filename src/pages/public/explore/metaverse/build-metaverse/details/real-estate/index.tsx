import React from 'react';
import { CustomDropdown, CustomFont, HeroContent, HeroContentLine, HeroImage, IconBar, ImageLoader, Line, MenuContainer, MenuItem, RealEstateContainer, TourButton } from './style';
import { Flex, List, ListItem, P } from '@/components/basic';
import { Dropdown, Icon, Input } from '@/components/custom';

import HomeImage from '@/assets/img/home.png';
import RealEstateCard from '@/components/page/public/explore/real-estate-card';

const RealEstate = () => {
    return <RealEstateContainer>
        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
            <P $style={{ size: '32px', weight: '700' }}>Real Estate</P>
            <Flex $style={{ gap: '12px', vAlign: 'center' }}>
                <Input value='' placeholder='Search...' padding='6px 12px' />
                <CustomDropdown>
                    <Dropdown initialLabel='Newly Listed' />
                </CustomDropdown>
            </Flex>
        </Flex>
        <Flex $style={{ gap: '32px' }}>
            <MenuContainer>
                <MenuItem isSelected>All</MenuItem>
                <Line />
                <MenuItem>Residential</MenuItem>
                <Line />
                <MenuItem>Commercial</MenuItem>
                <Line />
                <MenuItem>New Condo</MenuItem>
                <Line />
                <MenuItem>Land</MenuItem>
            </MenuContainer>
            <Flex $style={{ fDirection: 'column', gap: '24px', flex: '1' }}>
                <Flex>
                    <HeroImage>
                        <ImageLoader src={HomeImage} />
                        <IconBar>
                            <Icon icon='Zoom' />
                            <Icon icon='Share' />
                            <Icon icon='Bookmark' />
                            <Icon icon='Like' />
                        </IconBar>
                    </HeroImage>
                    <Flex $style={{ fDirection: 'column', flex: '1' }}>
                        <HeroContent>
                            <P $style={{ size: '20px', weight: '700' }}>Single Family Residential</P>
                            <HeroContentLine />
                            <List dir='column'>
                                <ListItem><CustomFont>Built in 1989</CustomFont></ListItem>
                                <ListItem><CustomFont>Electric, heat pump</CustomFont></ListItem>
                                <ListItem><CustomFont>Central air</CustomFont></ListItem>
                                <ListItem><CustomFont>2 garage spaces</CustomFont></ListItem>
                                <ListItem><CustomFont>9,466sqft</CustomFont></ListItem>
                                <ListItem><CustomFont>2% buyers agency fee</CustomFont></ListItem>
                            </List>
                            <HeroContentLine />
                            <Flex $style={{ fDirection: 'column' }}>
                                <P $style={{ size: '32px', weight: '700' }}>$197</P>
                                <CustomFont>price/sqft</CustomFont>
                            </Flex>
                        </HeroContent>
                        <TourButton>Take A Tour</TourButton>
                    </Flex>
                </Flex>
                <Flex $style={{ fWrap: 'wrap', gap: '32px' }}>
                    <RealEstateCard />
                    <RealEstateCard />
                    <RealEstateCard />
                    <RealEstateCard />
                </Flex>
            </Flex>
        </Flex>
    </RealEstateContainer>
}

export default RealEstate;
import React from 'react';
import { CustomDropdown, CustomFont, HeroContent, HeroContentLine, HeroImage, IconBar, ImageLoader, Line, MenuContainer, MenuItem, RealEstateContainer, TourButton } from './style';
import { Flex, Grid, List, ListItem, P } from '@/components/basic';
import { Dropdown, Icon, Input } from '@/components/custom';

import HomeImage from '@/assets/img/home.png';
import RealEstateCard from '@/components/page/public/explore/real-estate-card';
import { Link } from 'react-router-dom';
import { routerer } from '@/utils/util';

const RealEstate = () => {
    const [tabIndex, setTabIndex] = React.useState(1);

    return <RealEstateContainer>
        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
            <P $style={{ size: '32px', weight: '700' }}>Real Estate</P>
            <Flex $style={{ gap: '12px', vAlign: 'center' }}>
                <Input value='' placeholder='Search...' padding='6px 12px' helpSide={<Icon icon='Search' />} />
                <CustomDropdown>
                    <Dropdown initialLabel='Newly Listed' />
                </CustomDropdown>
            </Flex>
        </Flex>
        <Flex $style={{ gap: '32px' }}>
            <MenuContainer>
                <MenuItem isSelected={tabIndex === 1} onClick={() => setTabIndex(1)}>All</MenuItem>
                <MenuItem isSelected={tabIndex === 2} onClick={() => setTabIndex(2)}>Residential</MenuItem>
                <MenuItem isSelected={tabIndex === 3} onClick={() => setTabIndex(3)}>Commercial</MenuItem>
                <MenuItem isSelected={tabIndex === 4} onClick={() => setTabIndex(4)}>New Condo</MenuItem>
                <MenuItem isSelected={tabIndex === 5} onClick={() => setTabIndex(5)} isLast={true}>Land</MenuItem>
            </MenuContainer>
            <Flex $style={{ fDirection: 'column', gap: '24px', flex: '1' }}>
                <Link to={routerer("build_metaverse", "real_estate", "overview")}>
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
                </Link>
                <Grid $style={{ columns: "3", gap: "2rem" }}>
                    <RealEstateCard />
                    <RealEstateCard />
                    <RealEstateCard />
                    <RealEstateCard />
                </Grid>
            </Flex>
        </Flex>
    </RealEstateContainer>
}

export default RealEstate;
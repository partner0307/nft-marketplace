import React from 'react';
import SubMenu from '@/components/page/public/explore/submenu';
import { CustomButton, CustomButton1, CustomFont, CustomTab, DetailsWrapper, HeroContainer, LinearButton, Main, MarkContainer, PageButton, Similars, StatusBar } from './style';
import { Flex, Heading, List, ListItem, P } from '@/components/basic';
import { Link } from 'react-router-dom';

import Mark from '@/assets/img/metaverse/mana.png';
import Ether from '@/assets/img/metaverse/ether.png';
import { Icon } from '@/components/custom';
import { Line } from 'recharts';

import RealEstateCard from '@/components/page/public/explore/real-estate-card';
import Overview from './overview';
import Features from './features';
import PriceHistory from './price-history';
import Cost from './monthly-cost';
import NearbyBuilding from './nearby-buildings';
import FloorPlan from './floor-plan';

const RealEstateDetails = () => {
    const [tabIndex, setTabIndex] = React.useState(1);

    return <>
        <SubMenu />
        <DetailsWrapper>
            <Flex $style={{ fDirection: 'column', gap: '24px', p: '20px 0 0' }}>
                <Flex $style={{ hAlign: 'space-between', vAlign: 'center' }}>
                    <Flex $style={{ gap: '4px', vAlign: 'center' }}>
                        <Link to='/metaverses'>
                            <P $style={{ size: '14px', weight: '400' }}><CustomFont family='Aeonik'>Metaverse /</CustomFont></P>
                        </Link>
                        <Link to='/build-metaverse'>
                            <P $style={{ size: '14px', weight: '400' }}><CustomFont family='Aeonik'>Build Metaverse /</CustomFont></P>
                        </Link>
                        <Link to='/real-estate'>
                            <P $style={{ size: '14px', weight: '400' }}><CustomFont family='Aeonik'>Real Estate /</CustomFont></P>
                        </Link>
                        <P $style={{ size: '14px', weight: '400' }}><CustomFont family='Aeonik'>Single Family Residence</CustomFont></P>
                    </Flex>
                    <Flex $style={{ gap: '12px', vAlign: 'center' }}>
                        <PageButton isActive={false}>
                            <Icon icon='ArrowLeft' />Previous
                        </PageButton>
                        <PageButton isActive={false}>
                            Next<Icon icon='ArrowRight' />
                        </PageButton>
                    </Flex>
                </Flex>
                <HeroContainer>
                    <MarkContainer>
                        <img src={Mark} alt="" width='100px' height='100px' />
                    </MarkContainer>
                    <Flex $style={{ fDirection: 'column', gap: '12px', p: '0 0 24px' }}>
                        <CustomButton>Jump In</CustomButton>
                        <Flex $style={{ fDirection: 'row', gap: '12px' }}>
                            <CustomButton1>Share<Icon icon='Share' /></CustomButton1>
                            <CustomButton1>Report<Icon icon='Report' /></CustomButton1>
                        </Flex>
                    </Flex>
                </HeroContainer>
            </Flex>
            <Flex $style={{ hAlign: 'center' }}>
                <Flex $style={{ fDirection: 'column', gap: '32px', maxW: '1440px', p: '40px 0 200px' }}>
                    <Flex $style={{ gap: '26px' }}>
                        <Flex $style={{ fDirection: 'column', gap: '14px', flex: '1' }}>
                            <Heading level={1}>Single Family Residence</Heading>
                            <Main>
                                <Flex $style={{ gap: '16px', overflow: 'hidden' }}>
                                    <CustomTab isActive={tabIndex === 1} onClick={() => setTabIndex(1)}>Overview</CustomTab>
                                    <CustomTab isActive={tabIndex === 2} onClick={() => setTabIndex(2)}>Features</CustomTab>
                                    <CustomTab isActive={tabIndex === 3} onClick={() => setTabIndex(3)}>Price History</CustomTab>
                                    <CustomTab isActive={tabIndex === 4} onClick={() => setTabIndex(4)}>Monthly Cost</CustomTab>
                                    <CustomTab isActive={tabIndex === 5} onClick={() => setTabIndex(5)}>Nearby Buildings</CustomTab>
                                    <CustomTab isActive={tabIndex === 6} onClick={() => setTabIndex(6)}>Floor Plan</CustomTab>
                                    <CustomTab isActive={tabIndex === 7} onClick={() => setTabIndex(7)}>Images</CustomTab>
                                    <CustomTab isActive={tabIndex === 8} onClick={() => setTabIndex(8)}>Book Appoinment</CustomTab>
                                </Flex>
                                {tabIndex === 1 && <Overview />}
                                {tabIndex === 2 && <Features />}
                                {tabIndex === 3 && <PriceHistory />}
                                {tabIndex === 4 && <Cost />}
                                {tabIndex === 5 && <NearbyBuilding />}
                                {tabIndex === 6 && <FloorPlan />}
                            </Main>
                        </Flex>
                        <StatusBar>
                            <Flex $style={{ w: '100%', hAlign: 'space-between' }}>
                                <P><CustomFont>Blockchain</CustomFont></P>
                                <Flex $style={{ fDirection: 'column', gap: '8px' }}>
                                    <Flex $style={{ vAlign: 'center', gap: '12px' }}>
                                        <P $style={{ size: '32px', weight: '700' }}>$2,587</P>
                                    </Flex>
                                    <Flex $style={{ vAlign: 'center', hAlign: 'space-between' }}>
                                        <P $style={{ size: '20px' }}>0.78ETH</P>
                                        <img src={Ether} alt="" />
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Line />
                            <Flex $style={{ vAlign: 'flex-start', w: '100%', hAlign: 'space-between' }}>
                                <P><CustomFont>Buffer agency fee</CustomFont></P>
                                <Flex $style={{ fDirection: 'column', gap: '8px' }}>
                                    <P $style={{ size: '32px', weight: '600' }}>2%</P>
                                </Flex>
                            </Flex>
                            <Line />
                            <Flex $style={{ vAlign: 'flex-start', w: '100%', hAlign: 'space-between' }}>
                                <P><CustomFont>Land</CustomFont></P>
                                <Flex $style={{ fDirection: 'column', gap: '8px' }}>
                                    <P $style={{ size: '32px', weight: '600' }}>Land 9466sqft</P>
                                </Flex>
                            </Flex>
                            <LinearButton>Book Appointment</LinearButton>
                        </StatusBar>
                    </Flex>
                    {tabIndex === 1 && <Similars>
                        <Flex $style={{ w: '100%', hAlign: 'space-between' }}>
                            <P $style={{ size: '32px', weight: '600' }}>Similar Metaverses</P>
                            <CustomTab>View more more</CustomTab>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', w: '100%' }}>
                            <RealEstateCard />
                            <RealEstateCard />
                            <RealEstateCard />
                        </Flex>
                    </Similars>}
                </Flex>
            </Flex>
        </DetailsWrapper>
    </>
}

export default RealEstateDetails;
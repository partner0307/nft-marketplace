import React from 'react';
import SubMenu from '@/components/page/public/explore/submenu';
import { CustomButton, CustomButton1, CustomFont, CustomTab, DetailsWrapper, HeroContainer, LinearButton, Main, MarkContainer, PageButton, Similars, StatusBar } from './style';
import { Flex, Heading, List, ListItem, P } from '@/components/basic';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';

import Mark from '@/assets/img/metaverse/mana.png';
import Ether from '@/assets/img/metaverse/ether.png';
import { Icon } from '@/components/custom';
import { Line } from 'recharts';

import RealEstateCard from '@/components/page/public/explore/real-estate-card';
import { routerer } from '@/utils/util';

const RealEstateDetails = () => {
    const [tabIndex, setTabIndex] = React.useState(1);
    const navigate = useNavigate();
    const { pathname } = useLocation();

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
                            <Icon icon='ArrowLeft' width='24px' height='24px' />Previous
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
                                    <CustomTab isActive={pathname.split("/")[3] === "overview"} onClick={() => navigate(routerer("build_metaverse", "real_estate", "overview"))}>Overview</CustomTab>
                                    <CustomTab isActive={pathname.split("/")[3] === "features"} onClick={() => navigate(routerer("build_metaverse", "real_estate", "features"))}>Features</CustomTab>
                                    <CustomTab isActive={pathname.split("/")[3] === "price-history"} onClick={() => navigate(routerer("build_metaverse", "real_estate", "price_history"))}>Price History</CustomTab>
                                    <CustomTab isActive={pathname.split("/")[3] === "monthly-cost"} onClick={() => navigate(routerer("build_metaverse", "real_estate", "monthly_cost"))}>Monthly Cost</CustomTab>
                                    <CustomTab isActive={pathname.split("/")[3] === "nearby-buildings"} onClick={() => navigate(routerer("build_metaverse", "real_estate", "nearby_buildings"))}>Nearby Buildings</CustomTab>
                                    <CustomTab isActive={pathname.split("/")[3] === "floor-plan"} onClick={() => navigate(routerer("build_metaverse", "real_estate", "floor_plan"))}>Floor Plan</CustomTab>
                                    <CustomTab isActive={pathname.split("/")[3] === "images"} onClick={() => navigate(routerer("build_metaverse", "real_estate", "images"))}>Images</CustomTab>
                                    <CustomTab isActive={pathname.split("/")[3] === "books"} onClick={() => navigate(routerer("build_metaverse", "real_estate", "books"))}>Book Appoinment</CustomTab>
                                </Flex>
                                <Outlet />
                                {/* {tabIndex === 1 && <Overview />}
                                {tabIndex === 2 && <Features />}
                                {tabIndex === 3 && <PriceHistory />}
                                {tabIndex === 4 && <Cost />}
                                {tabIndex === 5 && <NearbyBuilding />}
                                {tabIndex === 6 && <FloorPlan />}
                                {tabIndex === 7 && <Images />}
                                {tabIndex === 8 && <Appoinment />} */}
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
                        <Flex $style={{ hAlign: 'space-between', w: '100%', fWrap: 'wrap' }}>
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
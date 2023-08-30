import React from 'react';
import { CustomButton, CustomButton1, CustomColor, CustomFont, CustomTab, CustomeButton2, DetailsContainer, DetailsContent, DetailsWrapper, HeroContainer, Line, MarkContainer, MediaTabContainer, OriginalTabContainer, StatusBar, VLine } from './style';
import SubMenu from '@/components/page/public/explore/submenu';
import { Flex, Heading, P } from '@/components/basic';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@/components/custom';

import Mark from '@/assets/img/metaverse/mana.png';
import CircleCheck from '@/assets/img/metaverse/circle_check.png';
import Twitter from '@/assets/img/metaverse/twitter.png';
import Discord from '@/assets/img/metaverse/discord.png';
import Instagram from '@/assets/img/metaverse/instagram.png';
import Ether from '@/assets/img/metaverse/ether.png';
import Polygon from '@/assets/img/metaverse/polygon.png';
import _ROUTERS from '@/constants/route.constant';
import { routerer } from '@/utils/util';
import { GV } from '@/utils/style.util';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const MetaverseDetails = () => {

    const navigate = useNavigate();
    const location = useLocation();

    return <DetailsContainer>
        <SubMenu />
        <DetailsWrapper>
            <Flex $style={{ fDirection: 'column', gap: '24px', p: '20px 0 0' }}>
                <Flex $style={{ gap: '4px', vAlign: 'center', }}>
                    <Link to='/metaverses'>
                        <Flex $style={{ hAlign: 'center', vAlign: 'center', gap: '4px', p: '4px' }}>
                            <P $style={{ size: GV('font-size-5'), weight: GV('weight-sm') }}><CustomFont family='Aeonik'>Metaverse /</CustomFont></P>
                        </Flex>
                    </Link>
                    <P $style={{ size: GV('font-size-5'), weight: GV('weight-sm') }}><CustomFont family='Aeonik'>Decentraland</CustomFont></P>
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
                <DetailsContent>
                    <Flex $style={{
                        p: '40px 0 54px',
                        w: '100%',
                        queries: {
                            1024: {
                                gap: '2rem'
                            }
                        }
                    }}>
                        <Flex $style={{ fDirection: 'column', gap: '54px', flex: '1' }}>
                            <Flex $style={{ fDirection: 'column', gap: '20px' }}>
                                <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '8px' }}>
                                    <Heading level={1}>Decentraland</Heading>
                                    <img src={CircleCheck} alt="" />
                                </Flex>
                                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', maxW: '780px' }}>
                                    <Flex $style={{
                                        maxW: '580px',
                                        queries: {
                                            1024: {
                                                maxW: '450px'
                                            }
                                        }
                                    }}>
                                        <P $style={{ size: GV('font-size-3') }}>Decentraland is a decentralized virtual reality platform powered by blockchain technology. Within the Decentraland platform, users can create, experience, and monetize their content and applications.</P>
                                    </Flex>
                                    <CustomeButton2>Buy Metaverse</CustomeButton2>
                                </Flex>
                            </Flex>
                            <OriginalTabContainer>
                                <CustomTab isActive={location.pathname.split("/")[2] === 'overview'} onClick={() => navigate(routerer("metaverse", "overview"))}>Overview</CustomTab>
                                <CustomTab isActive={location.pathname.split("/")[2] === 'collectibles'} onClick={() => navigate(routerer("metaverse", "collectibles"))}>Collectible</CustomTab>
                                <CustomTab isActive={location.pathname.split("/")[2] === 'land'} onClick={() => navigate(routerer("metaverse", "land"))}>Land</CustomTab>
                                <CustomTab isActive={location.pathname.split("/")[2] === 'metaverse_marketplace'} onClick={() => navigate(routerer("metaverse", "metaverse_marketplace"))}>Marketplace</CustomTab>
                                <CustomTab isActive={location.pathname.split("/")[2] === 'news'} onClick={() => navigate(routerer("metaverse", "news"))}>News</CustomTab>
                                <CustomTab isActive={location.pathname.split("/")[2] === 'about'} onClick={() => navigate(routerer("metaverse", "about"))}>About</CustomTab>
                                <CustomTab isActive={location.pathname.split("/")[2] === 'comments'} onClick={() => navigate(routerer("metaverse", "comments"))}>Comments</CustomTab>
                            </OriginalTabContainer>
                            <MediaTabContainer>
                                <Swiper
                                    slidesPerView={'auto'}
                                    spaceBetween={10}
                                    navigation
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <CustomTab isActive={location.pathname.split("/")[2] === 'overview'} onClick={() => navigate(routerer("metaverse", "overview"))}>Overview</CustomTab>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <CustomTab isActive={location.pathname.split("/")[2] === 'collectibles'} onClick={() => navigate(routerer("metaverse", "collectibles"))}>Collectible</CustomTab>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <CustomTab isActive={location.pathname.split("/")[2] === 'land'} onClick={() => navigate(routerer("metaverse", "land"))}>Land</CustomTab>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <CustomTab isActive={location.pathname.split("/")[2] === 'metaverse_marketplace'} onClick={() => navigate(routerer("metaverse", "metaverse_marketplace"))}>Marketplace</CustomTab>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <CustomTab isActive={location.pathname.split("/")[2] === 'news'} onClick={() => navigate(routerer("metaverse", "news"))}>News</CustomTab>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <CustomTab isActive={location.pathname.split("/")[2] === 'about'} onClick={() => navigate(routerer("metaverse", "about"))}>About</CustomTab>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <CustomTab isActive={location.pathname.split("/")[2] === 'comments'} onClick={() => navigate(routerer("metaverse", "comments"))}>Comments</CustomTab>
                                    </SwiperSlide>
                                </Swiper>
                            </MediaTabContainer>
                        </Flex>
                        <Flex $style={{ fDirection: 'column', gap: '40px', p: '16px 0 0', maxW: '440px' }}>
                            <Flex $style={{ fDirection: 'row', hAlign: 'flex-end', gap: '24px', p: '0 32px' }}>
                                <Link to='https://www.instagram.com'><img src={Instagram} alt="" /></Link>
                                <Link to='https://www.twitter.com'><img src={Twitter} alt="" /></Link>
                                <Link to=''><img src={Discord} alt="" /></Link>
                            </Flex>
                            <StatusBar>
                                <Flex $style={{ vAlign: 'flex-start', w: '100%', hAlign: 'space-between' }}>
                                    <P><CustomFont>Blockchain</CustomFont></P>
                                    <Flex $style={{ fDirection: 'column', gap: '8px' }}>
                                        <Flex $style={{ vAlign: 'center', gap: '12px' }}>
                                            <P>Ethereum</P>
                                            <img src={Ether} alt="" />
                                        </Flex>
                                        <Flex $style={{ vAlign: 'center', hAlign: 'space-between' }}>
                                            <P>Polygon</P>
                                            <img src={Polygon} alt="" />
                                        </Flex>
                                    </Flex>
                                </Flex>
                                <Line />
                                <Flex $style={{ vAlign: 'flex-start', w: '100%', hAlign: 'space-between' }}>
                                    <P><CustomFont>Token</CustomFont></P>
                                    <Flex $style={{ fDirection: 'column', gap: '8px' }}>
                                        <P>Mana</P>
                                        <Flex $style={{ vAlign: 'center', gap: '8px' }}>
                                            <P><CustomColor>-3.97%</CustomColor></P>
                                            <VLine />
                                            <P>$2.57</P>
                                        </Flex>
                                    </Flex>
                                </Flex>
                                <Line />
                                <Flex $style={{ vAlign: 'flex-start', w: '100%', hAlign: 'space-between' }}>
                                    <P><CustomFont>Rank</CustomFont></P>
                                    <Flex $style={{ fDirection: 'column', gap: '8px' }}>
                                        <P>42</P>
                                    </Flex>
                                </Flex>
                            </StatusBar>
                        </Flex>
                    </Flex>
                    <Outlet />
                </DetailsContent>
            </Flex>
        </DetailsWrapper>
    </DetailsContainer>
}

export default MetaverseDetails;
import React from 'react';
import { CustomButton, CustomButton1, CustomColor, CustomFont, CustomTab, CustomeButton2, DetailsContainer, DetailsContent, DetailsWrapper, HeroContainer, MarkContainer, MediaTabContainer, OriginalTabContainer, StatusBar, VLine } from './style';
import SubMenu from '@/components/page/public/explore/submenu';
import { Flex, Heading, P } from '@/components/basic';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import Mark from '@/assets/img/metaverse/mana.png';
import CircleCheck from '@/assets/img/metaverse/circle_check.png';
import Twitter from '@/assets/img/metaverse/twitter.png';
import Discord from '@/assets/img/metaverse/discord.png';
import Instagram from '@/assets/img/metaverse/instagram.png';
import Ether from '@/assets/img/metaverse/ether.png';
import { Icon } from '@/components/custom';
import { Line } from 'recharts';
import { GV } from '@/utils/style.util';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { routerer } from '@/utils/util';

const NFTDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return <DetailsContainer>
        <SubMenu />
        <DetailsWrapper>
            <Flex $style={{ fDirection: 'column', gap: '24px', p: '20px 0 0' }}>
                <Flex $style={{ gap: '4px', vAlign: 'center', }}>
                    <Link to='/metaverses'>
                        <Flex $style={{ hAlign: 'center', vAlign: 'center', gap: '4px', p: '4px' }}>
                            <P $style={{ size: GV('font-size-5'), weight: GV('weight-sm') }}><CustomFont family={GV('font3')}>NFTs /</CustomFont></P>
                        </Flex>
                    </Link>
                    <P $style={{ size: GV('font-size-5'), weight: GV('weight-sm') }}><CustomFont family={GV('font3')}>Thenftmakers</CustomFont></P>
                </Flex>
                <HeroContainer>
                    <MarkContainer>
                        <img src={Mark} alt="" width='100px' height='100px' />
                    </MarkContainer>
                    <Flex $style={{ fDirection: 'column', gap: '12px', p: '0 0 24px' }}>
                        <CustomButton>Open DApps</CustomButton>
                        <Flex $style={{ fDirection: 'row', gap: '12px' }}>
                            <CustomButton1>Share<Icon icon='Share' /></CustomButton1>
                            <CustomButton1>Report<Icon icon='Report' /></CustomButton1>
                        </Flex>
                    </Flex>
                </HeroContainer>
            </Flex>
            <Flex $style={{ hAlign: 'center' }}>
                <DetailsContent>
                    <Flex $style={{ hAlign: 'space-between', gap: '1.5rem', p: '40px 0 54px', w: '100%' }}>
                        <Flex $style={{ fDirection: 'column', gap: '54px' }}>
                            <Flex $style={{ fDirection: 'column', gap: '20px' }}>
                                <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '8px' }}>
                                    <Heading level={1}>Bored Ape Yatch CLub</Heading>
                                    <img src={CircleCheck} alt="" />
                                </Flex>
                                <Flex>
                                    <Flex $style={{ vAlign: 'center', gap: '43px' }}>
                                        <Flex $style={{ gap: '4px' }}><P $style={{ size: GV('font-size-3') }}><CustomFont>Created By:</CustomFont></P><P $style={{ size: GV('font-size-3'), weight: GV('weight-xl') }}>0x000000..0000</P></Flex>
                                        <Flex $style={{ gap: '4px' }}><P $style={{ size: GV('font-size-3') }}><CustomFont>Address:</CustomFont></P><P $style={{ size: GV('font-size-3'), weight: GV('weight-xl') }}>0xbc4...f13d</P></Flex>
                                    </Flex>
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
                                        <P $style={{ size: GV('font-size-3') }}>The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits.</P>
                                    </Flex>
                                    <CustomeButton2>Place Floor Bid</CustomeButton2>
                                </Flex>
                            </Flex>
                            <OriginalTabContainer>
                                <Link to={routerer('nft_details', 'nft_collections')}>
                                    <CustomTab isActive={location.pathname.split('/')[2] === 'nft-collections'}>NFT Collections</CustomTab>
                                </Link>
                                <Link to='#'>
                                    <CustomTab isActive={location.pathname.split('/')[2] === ''}>Recent Activities</CustomTab>
                                </Link>
                                <Link to='#'>
                                    <CustomTab isActive={location.pathname.split('/')[2] === ''}>About</CustomTab>
                                </Link>
                                <Link to='#'>
                                    <CustomTab isActive={location.pathname.split('/')[2] === ''}>News</CustomTab>
                                </Link>
                                <Link to='#'>
                                    <CustomTab isActive={location.pathname.split('/')[2] === ''}>Analytics</CustomTab>
                                </Link>
                                <Link to='#'>
                                    <CustomTab isActive={location.pathname.split('/')[2] === ''}>Comments</CustomTab>
                                </Link>
                            </OriginalTabContainer>
                            <MediaTabContainer>
                                <Swiper
                                    slidesPerView={'auto'}
                                    spaceBetween={10}
                                    navigation
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <Link to={routerer('nft_details', 'nft_collections')}>
                                            <CustomTab isActive={location.pathname.split('/')[2] === 'nft-collections'}>NFT Collections</CustomTab>
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link to='#'>
                                            <CustomTab isActive={location.pathname.split('/')[2] === ''}>Recent Activities</CustomTab>
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link to='#'>
                                            <CustomTab isActive={location.pathname.split('/')[2] === ''}>About</CustomTab>
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link to='#'>
                                            <CustomTab isActive={location.pathname.split('/')[2] === ''}>News</CustomTab>
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link to='#'>
                                            <CustomTab isActive={location.pathname.split('/')[2] === ''}>Analytics</CustomTab>
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link to='#'>
                                            <CustomTab isActive={location.pathname.split('/')[2] === ''}>Comments</CustomTab>
                                        </Link>
                                    </SwiperSlide>
                                </Swiper>
                            </MediaTabContainer>
                        </Flex>
                        <Flex $style={{ fDirection: 'column', gap: '40px', p: '16px 0 0' }}>
                            <Flex $style={{ fDirection: 'row', hAlign: 'flex-end', gap: '24px', p: '0 32px' }}>
                                <Link to='#'><img src={Instagram} alt="" /></Link>
                                <Link to='#'><img src={Twitter} alt="" /></Link>
                                <Link to='#'><img src={Discord} alt="" /></Link>
                            </Flex>
                            <StatusBar>
                                <Flex $style={{ vAlign: 'flex-start', w: '100%', hAlign: 'space-between' }}>
                                    <Flex $style={{ fDirection: 'column', gap: '8px' }}>
                                        <P><CustomFont>Blockchain</CustomFont></P>
                                        <P><CustomFont>Royalties</CustomFont></P>
                                    </Flex>
                                    <Flex $style={{ fDirection: 'column', gap: '8px' }}>
                                        <Flex $style={{ vAlign: 'center', gap: '12px' }}>
                                            <img src={Ether} alt="" />
                                            <P>Ethereum</P>
                                        </Flex>
                                        <Flex $style={{ vAlign: 'center', hAlign: 'flex-end' }}>
                                            <P>2.5%</P>
                                        </Flex>
                                    </Flex>
                                </Flex>
                                <Line />
                                <Flex $style={{ vAlign: 'flex-start', w: '100%', hAlign: 'space-between' }}>
                                    <Flex $style={{ fDirection: 'column', gap: '8px' }}>
                                        <P><CustomFont>Owners</CustomFont></P>
                                        <P><CustomFont>Items</CustomFont></P>
                                    </Flex>
                                    <Flex $style={{ fDirection: 'column', gap: '8px' }}>
                                        <Flex $style={{ vAlign: 'center', gap: '12px' }}>
                                            <P>5.8k</P>
                                        </Flex>
                                        <Flex $style={{ vAlign: 'center', hAlign: 'flex-end' }}>
                                            <P>10k</P>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </StatusBar>
                        </Flex>
                    </Flex>
                    <Flex $style={{ p: '54px 0 0' }}>
                        <Outlet />
                    </Flex>
                </DetailsContent>
            </Flex>
        </DetailsWrapper>
    </DetailsContainer>
}

export default NFTDetails;
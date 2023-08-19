import React from 'react';
import { CustomButton, CustomButton1, CustomColor, CustomFont, CustomTab, CustomeButton2, DetailsContainer, DetailsContent, DetailsWrapper, HeroContainer, MarkContainer, StatusBar, VLine } from './style';
import SubMenu from '@/components/page/public/explore/submenu';
import { Flex, Heading, P } from '@/components/basic';
import { Link } from 'react-router-dom';

import Mark from '@/assets/img/metaverse/mana.png';
import CircleCheck from '@/assets/img/metaverse/circle_check.png';
import Twitter from '@/assets/img/metaverse/twitter.png';
import Discord from '@/assets/img/metaverse/discord.png';
import Instagram from '@/assets/img/metaverse/instagram.png';
import Ether from '@/assets/img/metaverse/ether.png';
import { Icon } from '@/components/custom';
import { Line } from 'recharts';
import Content from './content/content';

const NFTDetails = () => {
    const [tabIndex, setTabIndex] = React.useState(1);

    return <DetailsContainer>
        <SubMenu />
        <DetailsWrapper>
            <Flex $style={{ fDirection: 'column', gap: '24px', p: '20px 0 0' }}>
                <Flex $style={{ gap: '4px', vAlign: 'center', }}>
                    <Link to='/metaverses'>
                        <Flex $style={{ hAlign: 'center', vAlign: 'center', gap: '4px', p: '4px' }}>
                            <P $style={{ size: '14px', weight: '400' }}><CustomFont family='Aeonik'>NFTs /</CustomFont></P>
                        </Flex>
                    </Link>
                    <P $style={{ size: '14px', weight: '400' }}><CustomFont family='Aeonik'>Thenftmakers</CustomFont></P>
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
                    <Flex $style={{ hAlign: 'space-between', p: '40px 0 54px', w: '100%' }}>
                        <Flex $style={{ fDirection: 'column', gap: '54px' }}>
                            <Flex $style={{ fDirection: 'column', gap: '20px' }}>
                                <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '8px' }}>
                                    <Heading level={1}>Bored Ape Yatch CLub</Heading>
                                    <img src={CircleCheck} alt="" />
                                </Flex>
                                <Flex>
                                    <Flex $style={{ vAlign: 'center', gap: '43px' }}>
                                        <Flex $style={{ gap: '4px' }}><P $style={{ size: '20px' }}><CustomFont>Created By:</CustomFont></P><P $style={{ size: '20px', weight: '700' }}>0x000000..0000</P></Flex>
                                        <Flex $style={{ gap: '4px' }}><P $style={{ size: '20px' }}><CustomFont>Address:</CustomFont></P><P $style={{ size: '20px', weight: '700' }}>0xbc4...f13d</P></Flex>
                                    </Flex>
                                </Flex>
                                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', maxW: '780px' }}>
                                    <Flex $style={{ maxW: '580px' }}>
                                        <P $style={{ size: '20px' }}>The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits.</P>
                                    </Flex>
                                    <CustomeButton2>Place Floor Bid</CustomeButton2>
                                </Flex>
                            </Flex>
                            <Flex $style={{ gap: '20px' }}>
                                <CustomTab isActive={tabIndex === 1} onClick={() => setTabIndex(1)}>NFT Collections</CustomTab>
                                <CustomTab isActive={tabIndex === 2} onClick={() => setTabIndex(2)}>Recent Activities</CustomTab>
                                <CustomTab isActive={tabIndex === 3} onClick={() => setTabIndex(3)}>About</CustomTab>
                                <CustomTab isActive={tabIndex === 4} onClick={() => setTabIndex(4)}>News</CustomTab>
                                <CustomTab isActive={tabIndex === 5} onClick={() => setTabIndex(5)}>Analytics</CustomTab>
                                <CustomTab isActive={tabIndex === 6} onClick={() => setTabIndex(6)}>Comments</CustomTab>
                            </Flex>
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
                    <Flex $style={{ p: '54px 0 0', w: '100%', maxW: '1440px' }}>
                        <Content />
                    </Flex>
                </DetailsContent>
            </Flex>
        </DetailsWrapper>
    </DetailsContainer>
}

export default NFTDetails;
import React from 'react';
import { CustomButton, CustomButton1, CustomColor, CustomFont, CustomTab, CustomeButton2, DetailsContainer, DetailsContent, DetailsWrapper, HeroContainer, Line, MarkContainer, StatusBar, VLine } from './style';
import SubMenu from '@/components/page/public/explore/submenu';
import { Flex, Heading, P } from '@/components/basic';
import { Link } from 'react-router-dom';
import { Icon } from '@/components/custom';

import Mark from '@/assets/img/metaverse/mana.png';
import CircleCheck from '@/assets/img/metaverse/circle_check.png';
import Twitter from '@/assets/img/metaverse/twitter.png';
import Discord from '@/assets/img/metaverse/discord.png';
import Instagram from '@/assets/img/metaverse/instagram.png';
import Ether from '@/assets/img/metaverse/ether.png';
import Polygon from '@/assets/img/metaverse/polygon.png';
import Overview from './overview';
import News from './news';
import Comment from './comment';
import Collectible from './collectibles';
import Land from './land';
import Marketplace from './marketplace';
import About from './about';

const MetaverseDetails = () => {
    const [tabIndex, setTabIndex] = React.useState(1);

    return <DetailsContainer>
        <SubMenu />
        <DetailsWrapper>
            <Flex $style={{ fDirection: 'column', gap: '24px', p: '20px 0 0' }}>
                <Flex $style={{ gap: '4px', vAlign: 'center', }}>
                    <Link to='/metaverses'>
                        <Flex $style={{ hAlign: 'center', vAlign: 'center', gap: '4px', p: '4px' }}>
                            <P $style={{ size: '14px', weight: '400' }}><CustomFont family='Aeonik'>Metaverse /</CustomFont></P>
                        </Flex>
                    </Link>
                    <P $style={{ size: '14px', weight: '400' }}><CustomFont family='Aeonik'>Decentraland</CustomFont></P>
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
                    <Flex $style={{ hAlign: 'space-between', p: '40px 0 54px', w: '100%' }}>
                        <Flex $style={{ fDirection: 'column', gap: '54px' }}>
                            <Flex $style={{ fDirection: 'column', gap: '20px' }}>
                                <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '8px' }}>
                                    <Heading level={1}>Decentraland</Heading>
                                    <img src={CircleCheck} alt="" />
                                </Flex>
                                <Flex $style={{ vAlign: 'center', hAlign: 'space-between', maxW: '780px' }}>
                                    <Flex $style={{ maxW: '580px' }}>
                                        <P $style={{ size: '20px' }}>Decentraland is a decentralized virtual reality platform powered by blockchain technology. Within the Decentraland platform, users can create, experience, and monetize their content and applications.</P>
                                    </Flex>
                                    <CustomeButton2>Buy Metaverse</CustomeButton2>
                                </Flex>
                            </Flex>
                            <Flex $style={{ gap: '20px' }}>
                                <CustomTab isActive={tabIndex === 1} onClick={() => setTabIndex(1)}>Overview</CustomTab>
                                <CustomTab isActive={tabIndex === 2} onClick={() => setTabIndex(2)}>Collectible</CustomTab>
                                <CustomTab isActive={tabIndex === 3} onClick={() => setTabIndex(3)}>Land</CustomTab>
                                <CustomTab isActive={tabIndex === 4} onClick={() => setTabIndex(4)}>Marketplace</CustomTab>
                                <CustomTab isActive={tabIndex === 5} onClick={() => setTabIndex(5)}>News</CustomTab>
                                <CustomTab isActive={tabIndex === 6} onClick={() => setTabIndex(6)}>About</CustomTab>
                                <CustomTab isActive={tabIndex === 7} onClick={() => setTabIndex(7)}>Comments</CustomTab>
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
                    <Flex $style={{ p: '54px 0 0', w: '100%', maxW: '1440px' }}>
                        {tabIndex === 1 && <Overview />}
                        {tabIndex === 2 && <Collectible />}
                        {tabIndex === 3 && <Land />}
                        {tabIndex === 4 && <Marketplace />}
                        {tabIndex === 5 && <News />}
                        {tabIndex === 6 && <About />}
                        {tabIndex === 7 && <Comment />}
                    </Flex>
                </DetailsContent>
            </Flex>
        </DetailsWrapper>
    </DetailsContainer>
}

export default MetaverseDetails;
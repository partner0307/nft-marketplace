import SubMenu from '@/components/page/public/explore/submenu';
import React from 'react';
import { CustomButton, CustomButton1, CustomFont, CustomTab, DetailsWrapper, HeroContainer, LinearButton, Main, MarkContainer, PageButton, StatusBar } from './style';
import { Flex, Heading, List, ListItem, P } from '@/components/basic';
import { Link } from 'react-router-dom';

import Mark from '@/assets/img/metaverse/mana.png';
import Ether from '@/assets/img/metaverse/ether.png';
import { Icon } from '@/components/custom';
import { Line } from 'recharts';

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
            <Flex $style={{ gap: '26px' }}>
                <Flex $style={{ fDirection: 'column', gap: '14px', flex: '1' }}>
                    <Heading level={1}>Single Family Residence</Heading>
                    <Main>
                        <Flex $style={{ gap: '16px' }}>
                            <CustomTab isActive={tabIndex === 1} onClick={() => setTabIndex(1)}>Overview</CustomTab>
                            <CustomTab isActive={tabIndex === 1} onClick={() => setTabIndex(1)}>Features</CustomTab>
                            <CustomTab isActive={tabIndex === 1} onClick={() => setTabIndex(1)}>Price History</CustomTab>
                            <CustomTab isActive={tabIndex === 1} onClick={() => setTabIndex(1)}>Monthly Cost</CustomTab>
                            <CustomTab isActive={tabIndex === 1} onClick={() => setTabIndex(1)}>Nearby Buildings</CustomTab>
                            <CustomTab isActive={tabIndex === 1} onClick={() => setTabIndex(1)}>Floor Plan</CustomTab>
                            <CustomTab isActive={tabIndex === 1} onClick={() => setTabIndex(1)}>Images</CustomTab>
                            <CustomTab isActive={tabIndex === 1} onClick={() => setTabIndex(1)}>Book Appoinment</CustomTab>
                        </Flex>
                        <P $style={{ size: '20px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                        </P>
                        <Line />
                        <List dir='column'>
                            <ListItem color='#B4B4B4'><P $style={{ size: '20px' }}>Built in 1989</P></ListItem>
                            <ListItem color='#B4B4B4'><P $style={{ size: '20px' }}>Electric, heat pump</P></ListItem>
                            <ListItem color='#B4B4B4'><P $style={{ size: '20px' }}>Central air</P></ListItem>
                            <ListItem color='#B4B4B4'><P $style={{ size: '20px' }}>2 garage spaces</P></ListItem>
                            <ListItem color='#B4B4B4'><P $style={{ size: '20px' }}>9,466sqft</P></ListItem>
                            <ListItem color='#B4B4B4'><P $style={{ size: '20px' }}>2% buyers agency fee</P></ListItem>
                        </List>
                    </Main>
                </Flex>
                <StatusBar>
                    <Flex $style={{ vAlign: 'flex-start', w: '100%', hAlign: 'space-between' }}>
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
        </DetailsWrapper>
    </>
}

export default RealEstateDetails;
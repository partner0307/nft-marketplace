import SubMenu from '@/components/page/public/explore/submenu';
import React from 'react';
import { CustomButton, CustomButton1, CustomFont, DetailsWrapper, HeroContainer, MarkContainer, PageButton, StatusBar } from './style';
import { Flex, Heading, P } from '@/components/basic';
import { Link } from 'react-router-dom';

import Mark from '@/assets/img/metaverse/mana.png';
import Ether from '@/assets/img/metaverse/ether.png';
import Polygon from '@/assets/img/metaverse/polygon.png';
import { Icon } from '@/components/custom';
import { Line } from 'recharts';

const RealEstateDetails = () => {
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
            <Flex>
                <Heading level={1}>Single Family Residence</Heading>
                <StatusBar>
                    <Flex $style={{ vAlign: 'flex-start', w: '100%', hAlign: 'space-between' }}>
                        <P><CustomFont>Blockchain</CustomFont></P>
                        <Flex $style={{ fDirection: 'column', gap: '8px' }}>
                            <Flex $style={{ vAlign: 'center', gap: '12px' }}>
                                <P $style={{ size: '32px', weight: '700' }}>$2,587</P>
                            </Flex>
                            <Flex $style={{ vAlign: 'center', hAlign: 'space-between' }}>
                                <P $style={{ size: '20px', color: 'green' }}>0.78ETH</P>
                                <img src={Ether} alt="" />
                            </Flex>
                        </Flex>
                    </Flex>
                    <Line />
                    <Flex $style={{ vAlign: 'flex-start', w: '100%', hAlign: 'space-between' }}>
                        <P><CustomFont>Buffer agency fee</CustomFont></P>
                        <Flex $style={{ fDirection: 'column', gap: '8px' }}>
                            <P>2%</P>
                        </Flex>
                    </Flex>
                    <Line />
                    <Flex $style={{ vAlign: 'flex-start', w: '100%', hAlign: 'space-between' }}>
                        <P><CustomFont>Land</CustomFont></P>
                        <Flex $style={{ fDirection: 'column', gap: '8px' }}>
                            <P>Land 9466sqft</P>
                        </Flex>
                    </Flex>
                    <CustomButton>Book Appointment</CustomButton>
                </StatusBar>
            </Flex>
        </DetailsWrapper>
    </>
}

export default RealEstateDetails;
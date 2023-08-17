import React from 'react';
import { CustomButton, CustomButton1, CustomFont, DetailsContainer, DetailsWrapper, HeroContainer, MarkContainer } from './style';
import SubMenu from '../../../../../../components/page/public/explore/submenu';
import { Flex, Heading, P } from '../../../../../../components/basic';
import { Link } from 'react-router-dom';

import Mark from '../../../../../../assets/img/metaverse/mana.png';
import { Icon } from '../../../../../../components/custom';

const Details = () => {
    return <DetailsContainer>
        <SubMenu />
        <DetailsWrapper>
            <Flex $style={{ fDirection: 'column', gap: '24px', p: '20px 0 0' }}>
                <Flex $style={{ gap: '4px', vAlign: 'center', }}>
                    <Link to='/metaverses'>
                        <Flex $style={{ hAlign: 'center', vAlign: 'center', gap: '4px', p: '4px' }}>
                            <P $style={{ size: '14px', weight: '400' }}><CustomFont>Metaverse /</CustomFont></P>
                        </Flex>
                    </Link>
                    <P $style={{ size: '14px', weight: '400' }}><CustomFont>Decentraland</CustomFont></P>
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
                <Flex $style={{ fDirection: 'column', gap: '20px', p: '40px 0 0' }}>
                    <Flex $style={{ fDirection: 'row', vAlign: 'center' }}>
                        <Heading level={2}>Decentraland</Heading>
                        <Icon icon='CircleCheck' />
                    </Flex>
                    <Flex>
                        <P $style={{ size: '20px' }}>Decentraland is a decentralized virtual reality platform powered by blockchain technology. Within the Decentraland platform, users can create, experience, and monetize their content and applications.</P>
                        
                    </Flex>
                </Flex>
            </Flex>
        </DetailsWrapper>
    </DetailsContainer>
}

export default Details;
import React from 'react';
import { ItemIcon, ListContainer, SidebarContainer, Title } from './style';
import { Flex, List, ListItem, P } from '../../basic';

import PostIcon from '../../../../../assets/img/menu/post-project.png';
import HireIcon from '../../../../../assets/img/menu/hire-talent.png';
import WorkIcon from '../../../../../assets/img/menu/work-as-talent.png';
import MetaverseIcon from '../../../../../assets/img/menu/metaverse.png';
import NFTIcon from '../../../../../assets/img/menu/nfts.png';
import AvatarIcon from '../../../../../assets/img/menu/avatars.png';
import StakingIcon from '../../../../../assets/img/menu/staking.png';
import Ads from '../../../../../assets/img/menu/ads.png';

const Sidebar = () => {
    return <SidebarContainer>
        <Title>
            <P $style={{ weight: '600' }}>Join Community</P>
        </Title>
        <ListContainer>
            <List dir='column' gap='0'>
                <ListItem hideDot>
                    <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '12px', p: '12px 24px' }}>
                        <ItemIcon src={PostIcon} alt="" />
                        <Flex $style={{ fDirection: 'column', vAlign: 'flex-start', gap: '4px' }}>
                            <P $style={{ size: '20px' }}>Post Project</P>
                            <P>Post a job with description</P>
                        </Flex>
                    </Flex>
                </ListItem>
                <ListItem hideDot>
                    <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '12px', p: '12px 24px' }}>
                        <ItemIcon src={HireIcon} alt="" />
                        <Flex $style={{ fDirection: 'column', vAlign: 'flex-start', gap: '4px' }}>
                            <P $style={{ size: '20px' }}>Hire Talents</P>
                            <P>For your web3 projects</P>
                        </Flex>
                    </Flex>
                </ListItem>
                <ListItem hideDot>
                    <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '12px', p: '12px 24px' }}>
                        <ItemIcon src={WorkIcon} alt="" />
                        <Flex $style={{ fDirection: 'column', vAlign: 'flex-start', gap: '4px' }}>
                            <P $style={{ size: '20px' }}>Work As Talent</P>
                            <P>Lorem ipsum</P>
                        </Flex>
                    </Flex>
                </ListItem>
                <ListItem hideDot>
                    <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '12px', p: '12px 24px' }}>
                        <ItemIcon src={MetaverseIcon} alt="" />
                        <Flex $style={{ fDirection: 'column', vAlign: 'flex-start', gap: '4px' }}>
                            <P $style={{ size: '20px' }}>Metaverse</P>
                            <P>Buy, sell and build land</P>
                        </Flex>
                    </Flex>
                </ListItem>
                <ListItem hideDot>
                    <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '12px', p: '12px 24px' }}>
                        <ItemIcon src={NFTIcon} alt="" />
                        <Flex $style={{ fDirection: 'column', vAlign: 'flex-start', gap: '4px' }}>
                            <P $style={{ size: '20px' }}>NFTs</P>
                            <P>Buy, sell and build land</P>
                        </Flex>
                    </Flex>
                </ListItem>
                <ListItem hideDot>
                    <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '12px', p: '12px 24px' }}>
                        <ItemIcon src={AvatarIcon} alt="" />
                        <Flex $style={{ fDirection: 'column', vAlign: 'flex-start', gap: '4px' }}>
                            <P $style={{ size: '20px' }}>Avatars</P>
                            <P>Create, avatar builders for you</P>
                        </Flex>
                    </Flex>
                </ListItem>
                <ListItem hideDot>
                    <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '12px', p: '12px 24px' }}>
                        <ItemIcon src={StakingIcon} alt="" />
                        <Flex $style={{ fDirection: 'column', vAlign: 'flex-start', gap: '4px' }}>
                            <P $style={{ size: '20px' }}>Staking</P>
                            <P>View blockchain data</P>
                        </Flex>
                    </Flex>
                </ListItem>
            </List>
        </ListContainer>
        <img src={Ads} alt="" />
    </SidebarContainer>
}

export default Sidebar;
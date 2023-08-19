import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Dot, ItemIcon, ListContainer, ListItemContainer, NestedItem, NestedItemList, SidebarContainer, Title } from './style';
import { Flex, List, ListItem, P } from '@/components/basic';

import PostIcon from '@/assets/img/menu/post-project.png';
import HireIcon from '@/assets/img/menu/hire-talent.png';
import WorkIcon from '@/assets/img/menu/work-as-talent.png';
import MetaverseIcon from '@/assets/img/menu/metaverse.png';
import NFTIcon from '@/assets/img/menu/nfts.png';
import AvatarIcon from '@/assets/img/menu/avatars.png';
import StakingIcon from '@/assets/img/menu/staking.png';
import Ads from '@/assets/img/menu/ads.png';
import { usePublicLayoutContext } from '@/layouts/PublicLayout/context';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const { hash, pathname, search } = useLocation();
    const { slideOpened, dispatch } = usePublicLayoutContext();
    const [opened, setOpened] = useState<boolean>(false);
    const [isMetaverseOpened, setMetaverseOpened] = useState(false);
    const [isNFTOpened, setNFTOpened] = useState(false);

    useEffect(() => {
        if (slideOpened === false) {
            setTimeout(() => {
                setOpened(false)
            }, 300)
        } else {
            setOpened(true);
        }
    }, [slideOpened])
    return (
        <SidebarContainer slideOpened={slideOpened} opened={opened}>
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
                        <ListItemContainer isOpened={isMetaverseOpened}>
                            <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '12px', p: '12px 24px' }} onClick={() => setMetaverseOpened(!isMetaverseOpened)}>
                                <ItemIcon src={MetaverseIcon} alt="" />
                                <Flex $style={{ fDirection: 'column', vAlign: 'flex-start', gap: '4px' }}>
                                    <P $style={{ size: '20px' }}>Metaverse</P>
                                    <P>Buy, sell and build land</P>
                                </Flex>
                            </Flex>
                            {isMetaverseOpened && <Flex $style={{ w: '100%', maxW: '300px', p: '0 0 0 48px' }}>
                                <NestedItemList>
                                    <Link to='/metaverses'>
                                        <NestedItem isSelected={pathname === '/metaverses'}>
                                            <Dot />
                                            <P $style={{ size: '20px' }}>Metaverses</P>
                                        </NestedItem>
                                    </Link>
                                    <Link to='/metaverse-marketplaces'>
                                        <NestedItem isSelected={pathname === '/metaverse-marketplaces'}>
                                            <Dot />
                                            <P $style={{ size: '20px' }}>Marketplace</P>
                                        </NestedItem>
                                    </Link>
                                    <Link to='/build-metaverse'>
                                        <NestedItem isSelected={pathname === '/build-metaverse'}>
                                            <Dot />
                                            <P $style={{ size: '20px' }}>Build Metaverse</P>
                                        </NestedItem>
                                    </Link>
                                </NestedItemList>
                            </Flex>}
                        </ListItemContainer>
                    </ListItem>
                    <ListItem hideDot>
                        <ListItemContainer isOpened={isNFTOpened}>
                            <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '12px', p: '12px 24px' }} onClick={() => setNFTOpened(!isNFTOpened)}>
                                <ItemIcon src={NFTIcon} alt="" />
                                <Flex $style={{ fDirection: 'column', vAlign: 'flex-start', gap: '4px' }}>
                                    <P $style={{ size: '20px' }}>NFTs</P>
                                    <P>Buy, sell and build land</P>
                                </Flex>
                            </Flex>
                            {isNFTOpened && <Flex $style={{ w: '100%', maxW: '300px', p: '0 0 0 48px' }}>
                                <NestedItemList>
                                    <Link to='/buy-nft'>
                                        <NestedItem isSelected={pathname === '/buy-nft'}>
                                            <Dot />
                                            <P $style={{ size: '20px' }}>Buy NFT</P>
                                        </NestedItem>
                                    </Link>
                                    <Link to='/sell-nft'>
                                        <NestedItem isSelected={pathname === '/sell-nft'}>
                                            <Dot />
                                            <P $style={{ size: '20px' }}>Sell NFT</P>
                                        </NestedItem>
                                    </Link>
                                    <Link to='/nft-marketplace'>
                                        <NestedItem isSelected={pathname === '/nft-marketplace'}>
                                            <Dot />
                                            <P $style={{ size: '20px' }}>NFT Marketplace</P>
                                        </NestedItem>
                                    </Link>
                                </NestedItemList>
                            </Flex>}
                        </ListItemContainer>
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
    )
}

export default Sidebar;
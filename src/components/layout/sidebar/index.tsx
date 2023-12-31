import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Dot, ItemIcon, ListContainer, ListItemContainer, NestedItem, NestedItemList, SidebarContainer, SidebarWrapper, SlideHand, SlideItem, Title } from './style';
import { Flex, List, ListItem, P } from '@/components/basic';
import { findAll } from 'styled-components/test-utils';

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
import _ROUTERS from '@/constants/route.constant';
import { routerer } from '@/utils/util';
import { GV } from '@/utils/style.util';

const Sidebar = () => {
    const { hash, pathname, search } = useLocation();
    const { slideOpened, dispatch } = usePublicLayoutContext();
    const [opened, setOpened] = useState<boolean>(false);
    const [isMetaverseOpened, setMetaverseOpened] = useState(false);
    const [isNFTOpened, setNFTOpened] = useState<boolean>(false);

    useEffect(() => {
        if (slideOpened === false) {
            setTimeout(() => {
                setOpened(false)
            }, 300)
        } else {
            setOpened(true);
        }
    }, [slideOpened])

    useEffect(() => {
        const appElement = document.getElementById("app");
        if (appElement) {
            const elements = findAll(appElement, SlideHand);
            const clickHandler = (e: any) => {
                const targetHand = e.currentTarget as HTMLElement;
                const child = targetHand.nextElementSibling as HTMLElement;
                if (child.style.height === "0px") {
                    child.style.height = child.scrollHeight + "px";
                    child.style.background = "#600031";
                    child.style.visibility = "visible";
                    setTimeout(() => {
                    }, 300);
                } else {
                    child.style.height = "0px";
                    child.style.visibility = "hidden";
                    setTimeout(() => {
                    }, 300);
                }
            };

            elements?.forEach((hand) => {
                const targetHand = hand as HTMLElement;
                const child = targetHand.nextElementSibling as HTMLElement;
                child.style.height = "0px";
                targetHand.addEventListener("click", clickHandler);
            });

            return () => {
                elements?.forEach((hand) => {
                    const targetHand = hand as HTMLElement;
                    targetHand.removeEventListener("click", clickHandler);
                });
            };
        }
    }, []);

    return (
        <SidebarContainer slideOpened={slideOpened} opened={opened}>
            <SidebarWrapper>
                <Title />
                <ListContainer>
                    <List dir='column' gap='0'>
                        <ListItem hideDot>
                            <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '12px', p: '12px 24px' }}>
                                <ItemIcon src={PostIcon} alt="" />
                                <Flex $style={{ fDirection: 'column', vAlign: 'flex-start', gap: '4px' }}>
                                    <P $style={{ size: GV('font-size-3') }}>Post Project</P>
                                    <P>Post a job with description</P>
                                </Flex>
                            </Flex>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={_ROUTERS.hire_talents}>
                                <ListItemContainer isOpened={pathname === _ROUTERS.hire_talents}>
                                    <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '12px', p: '12px 24px' }}>
                                        <ItemIcon src={HireIcon} alt="" />
                                        <Flex $style={{ fDirection: 'column', vAlign: 'flex-start', gap: '4px' }}>
                                            <P $style={{ size: GV('font-size-3') }}>Hire Talents</P>
                                            <P>For your web3 projects</P>
                                        </Flex>
                                    </Flex>
                                </ListItemContainer>
                            </Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '12px', p: '12px 24px' }}>
                                <ItemIcon src={WorkIcon} alt="" />
                                <Flex $style={{ fDirection: 'column', vAlign: 'flex-start', gap: '4px' }}>
                                    <P $style={{ size: GV('font-size-3') }}>Work As Talent</P>
                                    <P>Lorem ipsum</P>
                                </Flex>
                            </Flex>
                        </ListItem>
                        <ListItem hideDot>
                            <ListItemContainer isOpened={isMetaverseOpened}>
                                <SlideHand>
                                    <ItemIcon src={MetaverseIcon} alt="" />
                                    <Flex $style={{ fDirection: 'column', vAlign: 'flex-start', gap: '4px' }}>
                                        <P $style={{ size: GV('font-size-3') }}>Metaverse</P>
                                        <P>Buy, sell and build land</P>
                                    </Flex>
                                </SlideHand>
                                <SlideItem $isNFTOpened={isNFTOpened}>
                                    <NestedItemList>
                                        <Link to={routerer('metaverse')}>
                                            <NestedItem isSelected={pathname === _ROUTERS.metaverse}>
                                                <Dot />
                                                <P $style={{ size: GV('font-size-3') }}>Metaverses</P>
                                            </NestedItem>
                                        </Link>
                                        <Link to={routerer('marketplace')}>
                                            <NestedItem isSelected={pathname === _ROUTERS.marketplace}>
                                                <Dot />
                                                <P $style={{ size: GV('font-size-3') }}>Marketplace</P>
                                            </NestedItem>
                                        </Link>
                                        <Link to={routerer('build_metaverse')}>
                                            <NestedItem isSelected={pathname === _ROUTERS.build_metaverse}>
                                                <Dot />
                                                <P $style={{ size: GV('font-size-3') }}>Build Metaverse</P>
                                            </NestedItem>
                                        </Link>
                                    </NestedItemList>
                                </SlideItem>
                            </ListItemContainer>
                        </ListItem>
                        <ListItem hideDot>
                            <ListItemContainer isOpened={isNFTOpened}>
                                <SlideHand>
                                    <ItemIcon src={NFTIcon} alt="" />
                                    <Flex $style={{ fDirection: 'column', vAlign: 'flex-start', gap: '4px' }}>
                                        <P $style={{ size: GV('font-size-3') }}>NFTs</P>
                                        <P>Buy, sell and build land</P>
                                    </Flex>
                                </SlideHand>
                                <SlideItem $isNFTOpened={isNFTOpened}>
                                    <NestedItemList>
                                        <Link to='/buy-nft'>
                                            <NestedItem isSelected={pathname === '/buy-nft'}>
                                                <Dot />
                                                <P $style={{ size: GV('font-size-3') }}>Buy NFT</P>
                                            </NestedItem>
                                        </Link>
                                        <Link to='/sell-nft'>
                                            <NestedItem isSelected={pathname === '/sell-nft'}>
                                                <Dot />
                                                <P $style={{ size: GV('font-size-3') }}>Sell NFT</P>
                                            </NestedItem>
                                        </Link>
                                        <Link to='/nft-marketplace'>
                                            <NestedItem isSelected={pathname === '/nft-marketplace'}>
                                                <Dot />
                                                <P $style={{ size: GV('font-size-3') }}>NFT Marketplace</P>
                                            </NestedItem>
                                        </Link>
                                    </NestedItemList>
                                </SlideItem>
                            </ListItemContainer>
                        </ListItem>
                        <ListItem hideDot>
                            <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '12px', p: '12px 24px' }}>
                                <ItemIcon src={AvatarIcon} alt="" />
                                <Flex $style={{ fDirection: 'column', vAlign: 'flex-start', gap: '4px' }}>
                                    <P $style={{ size: GV('font-size-3') }}>Avatars</P>
                                    <P>Create, avatar builders for you</P>
                                </Flex>
                            </Flex>
                        </ListItem>
                        <ListItem hideDot>
                            <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '12px', p: '12px 24px' }}>
                                <ItemIcon src={StakingIcon} alt="" />
                                <Flex $style={{ fDirection: 'column', vAlign: 'flex-start', gap: '4px' }}>
                                    <P $style={{ size: GV('font-size-3') }}>Staking</P>
                                    <P>View blockchain data</P>
                                </Flex>
                            </Flex>
                        </ListItem>
                    </List>
                </ListContainer>
                <img src={Ads} alt="" />
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
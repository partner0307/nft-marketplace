import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { CustomTab, ItemContainer, MarketplaceContainer, StatusBar, StatusItem } from './style';
import { Flex, Span } from '@/components/basic';
import { Dropdown, Icon, Input } from '@/components/custom';
import NewsLetter from '@/components/custom/newsletter';
import _ROUTERS from '@/constants/route.constant';
import { routerer } from '@/utils/util';
import { Link } from 'react-router-dom';

const Marketplaces = () => {
    const [keyword, setKeyword] = React.useState('');
    const location = useLocation();

    return (
        <MarketplaceContainer>
            <StatusBar>
                <StatusItem>Cryptos: <Span $style={{ color: 'info' }}>2.8M+</Span></StatusItem>
                <StatusItem>Market Cap: <Span $style={{ color: 'info' }}>$1.08T</Span> <Span $style={{ color: 'danger' }}>5.34%</Span></StatusItem>
                <StatusItem>24h Vol: <Span $style={{ color: 'info' }}>$9.01B</Span> <Span $style={{ color: 'success' }}>5.34%</Span></StatusItem>
                <StatusItem>Dominance: <Span $style={{ color: 'info' }}>BTC: 49.6% ETH: 19.6% Solana 5.6%</Span></StatusItem>
                <StatusItem><Icon icon='GasFee' /> ETH Gas: <Span $style={{ color: 'info' }}>23 Gwei</Span></StatusItem>
                <StatusItem><Icon icon='GasFee' /> Solana Gas: <Span $style={{ color: 'info' }}>23 Gwei</Span></StatusItem>
            </StatusBar>
            <Flex $style={{ gap: '4rem' }}>
                <Flex $style={{ gap: '1.25rem' }}>
                    <Link to={routerer('_MARKETPLACES', '_METAVERSE')}><CustomTab isActive={location.pathname.includes('marketplaces/marketplaces-metaverse') || (location.pathname.endsWith('marketplaces'))}>Metaverses</CustomTab></Link>
                    <Link to={routerer('_MARKETPLACES', '_NFT')}><CustomTab isActive={location.pathname.includes('marketplaces/nft')}>NFTs</CustomTab></Link>
                    <Link to={routerer('_MARKETPLACES', '_DAPP')}><CustomTab isActive={location.pathname.includes('marketplaces/dapp')}>DApps</CustomTab></Link>
                    <Link to={routerer('_MARKETPLACES', '_BLOCKCHAIN')}><CustomTab isActive={location.pathname.includes('marketplaces/blockchain')}>Blockchains</CustomTab></Link>
                </Flex>
                <Flex $style={{ gap: '1.25rem', w: '100%' }}>
                    <Flex $style={{ flex: '1' }}>
                        <Input value={keyword} onChange={(e: any) => setKeyword(e.target.value)} placeholder='Search Metaverse' helpSide={<Icon icon='Search' />} padding='1rem 0.75rem' radius='0.75rem' />
                    </Flex>
                    <Flex $style={{ maxH: '3rem', w: '13rem' }}>
                        <ItemContainer>
                            <Dropdown initialLabel='Newly Listed' />
                        </ItemContainer>
                    </Flex>
                </Flex>
            </Flex>
            <Flex $style={{ p: '0 0 7rem' }}>
                <Outlet />
            </Flex>
            <NewsLetter />
        </MarketplaceContainer>
    )
}

export default Marketplaces;
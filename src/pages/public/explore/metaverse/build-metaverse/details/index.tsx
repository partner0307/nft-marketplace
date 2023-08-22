import { Flex, P } from '@/components/basic';
import React from 'react';
import { Link } from 'react-router-dom';
import { BuildDetailsContainer, BuildDetailsWrapper, CustomFont, Rect, Rect1 } from './style';
import SubMenu from '@/components/page/public/explore/submenu';
import RealEstate from './real-estate';


import HomeIcon from '@/assets/img/menu/home.png';
import CameraIcon from '@/assets/img/menu/camera.png';
import TradingIcon from '@/assets/img/menu/trading.png';
import CarIcon from '@/assets/img/menu/car.png';
import ClockIcon from '@/assets/img/menu/clock.png';
import StudyIcon from '@/assets/img/menu/study.png';
import GameIcon from '@/assets/img/menu/game.png';
import PlantIcon from '@/assets/img/menu/plant.png';
import CoinIcon from '@/assets/img/menu/coin.png';
import BuildingIcon from '@/assets/img/menu/building.png';
import RestaurantIcon from '@/assets/img/menu/restaurant.png';
import MarketIcon from '@/assets/img/menu/market.png';
import { MenuItem } from './style';
import Ecommerce from './ecommerce';

const BuildDetails = () => {
    const [tabIndex, setTabIndex] = React.useState(1);

    return <>
        <Rect />
        <Rect1 />
        <SubMenu />
        <Flex $style={{ hAlign: 'center' }}>
            <BuildDetailsContainer>
                <P><CustomFont><Link to='/metaverses'>Metaverse / </Link><Link to='/build-metaverse'>Build Metaverse / </Link>Real Estate</CustomFont></P>
                <BuildDetailsWrapper>
                    <Flex $style={{ fDirection: 'column', gap: '32px' }}>
                        <MenuItem isActive={tabIndex === 1} onClick={() => setTabIndex(1)}><img src={HomeIcon} /></MenuItem>
                        <MenuItem isActive={tabIndex === 2} onClick={() => setTabIndex(2)}><img src={CameraIcon} /></MenuItem>
                        <MenuItem isActive={tabIndex === 3} onClick={() => setTabIndex(3)}><img src={TradingIcon} /></MenuItem>
                        <MenuItem isActive={tabIndex === 4} onClick={() => setTabIndex(4)}><img src={CarIcon} /></MenuItem>
                        <MenuItem isActive={tabIndex === 5} onClick={() => setTabIndex(5)}><img src={ClockIcon} /></MenuItem>
                        <MenuItem isActive={tabIndex === 6} onClick={() => setTabIndex(6)}><img src={StudyIcon} /></MenuItem>
                        <MenuItem isActive={tabIndex === 7} onClick={() => setTabIndex(7)}><img src={GameIcon} /></MenuItem>
                        <MenuItem isActive={tabIndex === 8} onClick={() => setTabIndex(8)}><img src={PlantIcon} /></MenuItem>
                        <MenuItem isActive={tabIndex === 9} onClick={() => setTabIndex(9)}><img src={CoinIcon} /></MenuItem>
                        <MenuItem isActive={tabIndex === 10} onClick={() => setTabIndex(10)}><img src={BuildingIcon} /></MenuItem>
                        <MenuItem isActive={tabIndex === 11} onClick={() => setTabIndex(11)}><img src={RestaurantIcon} /></MenuItem>
                        <MenuItem isActive={tabIndex === 12} onClick={() => setTabIndex(12)}><img src={MarketIcon} /></MenuItem>
                    </Flex>
                    {tabIndex === 1 && <RealEstate />}
                    {tabIndex === 3 && <Ecommerce />}
                </BuildDetailsWrapper>
            </BuildDetailsContainer>
        </Flex>
    </>
}

export default BuildDetails;
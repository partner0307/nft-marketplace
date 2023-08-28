import React from 'react';
import { Flex, P } from '@/components/basic';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { BuildDetailsContainer, BuildDetailsWrapper, CustomFont, Rect, Rect1 } from './style';
import SubMenu from '@/components/page/public/explore/submenu';
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
import { routerer } from '@/utils/util';

const BuildDetails = () => {
    const location = useLocation();
    
    return (
        location.pathname.split('/').length === 4 ? <Outlet /> : <>
            <Rect />
            <Rect1 />
            <SubMenu />
            <Flex $style={{ hAlign: 'center' }}>
                <BuildDetailsContainer>
                    <P><CustomFont><Link to='/metaverses'>Metaverse / </Link><Link to='/build-metaverse'>Build Metaverse / </Link>Real Estate</CustomFont></P>
                    <BuildDetailsWrapper>
                        <Flex $style={{ fDirection: 'column', gap: '32px' }}>
                            <MenuItem to={routerer("build_metaverse", "real_estate")} isActive={location.pathname.split("/")[2] === "real-estate"} >
                                <img src={HomeIcon} />
                            </MenuItem>
                            <MenuItem to={routerer("build_metaverse", "real_estate")} isActive={location.pathname.split("/")[2] === ""} >
                                <img src={CameraIcon} />
                            </MenuItem>
                            <MenuItem to={routerer("build_metaverse", "ecommerce")} isActive={location.pathname.split("/")[2] === "ecommerce"} >
                                <img src={TradingIcon} />
                            </MenuItem>
                            <MenuItem to={routerer("build_metaverse", "real_estate")} isActive={location.pathname.split("/")[2] === ""} >
                                <img src={CarIcon} />
                            </MenuItem>
                            <MenuItem to={routerer("build_metaverse", "real_estate")} isActive={location.pathname.split("/")[2] === ""} >
                                <img src={ClockIcon} />
                            </MenuItem>
                            <MenuItem to={routerer("build_metaverse", "real_estate")} isActive={location.pathname.split("/")[2] === ""} >
                                <img src={StudyIcon} />
                            </MenuItem>
                            <MenuItem to={routerer("build_metaverse", "real_estate")} isActive={location.pathname.split("/")[2] === ""} >
                                <img src={GameIcon} />
                            </MenuItem>
                            <MenuItem to={routerer("build_metaverse", "real_estate")} isActive={location.pathname.split("/")[2] === ""} >
                                <img src={PlantIcon} />
                            </MenuItem>
                            <MenuItem to={routerer("build_metaverse", "real_estate")} isActive={location.pathname.split("/")[2] === ""} >
                                <img src={CoinIcon} />
                            </MenuItem>
                            <MenuItem to={routerer("build_metaverse", "real_estate")} isActive={location.pathname.split("/")[2] === ""} >
                                <img src={BuildingIcon} />
                            </MenuItem>
                            <MenuItem to={routerer("build_metaverse", "real_estate")} isActive={location.pathname.split("/")[2] === ""} >
                                <img src={RestaurantIcon} />
                            </MenuItem>
                            <MenuItem to={routerer("build_metaverse", "real_estate")} isActive={location.pathname.split("/")[2] === ""} >
                                <img src={MarketIcon} />
                            </MenuItem>
                        </Flex>
                        <Outlet />
                    </BuildDetailsWrapper>
                </BuildDetailsContainer>
            </Flex>
        </>
    )
}

export default BuildDetails;
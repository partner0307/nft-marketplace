import { Flex } from '@/components/basic'
import React from 'react'
import { MenuItem } from './style'
import { Link } from 'react-router-dom'

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

const MenuList = () => {
  return (
    <Flex $style={{ fDirection: 'column', gap: '32px' }}>
        <Link to='/real-estate'><MenuItem><img src={HomeIcon} /></MenuItem></Link>
        <Link to='#'><MenuItem><img src={CameraIcon} /></MenuItem></Link>
        <Link to='/ecommerce'><MenuItem><img src={TradingIcon} /></MenuItem></Link>
        <Link to='#'><MenuItem><img src={CarIcon} /></MenuItem></Link>
        <Link to='#'><MenuItem><img src={ClockIcon} /></MenuItem></Link>
        <Link to='#'><MenuItem><img src={StudyIcon} /></MenuItem></Link>
        <Link to='#'><MenuItem><img src={GameIcon} /></MenuItem></Link>
        <Link to='#'><MenuItem><img src={PlantIcon} /></MenuItem></Link>
        <Link to='#'><MenuItem><img src={CoinIcon} /></MenuItem></Link>
        <Link to='#'><MenuItem><img src={BuildingIcon} /></MenuItem></Link>
        <Link to='#'><MenuItem><img src={RestaurantIcon} /></MenuItem></Link>
        <Link to='#'><MenuItem><img src={MarketIcon} /></MenuItem></Link>
    </Flex>
  )
}

export default MenuList
import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Content, DropdownMenuContainer, DropdownMenuItem, ItemContainer, MenuContainer, MenuItemContainer, SearchInputContainer } from './style';
import { Icon, Input, Dropdown } from '@/components/custom';
import { usePublicLayoutContext } from '@/layouts/PublicLayout/context';
import { Link } from 'react-router-dom';
import _ROUTERS from '@/constants/route.constant';
import { Flex } from '@/components/basic';
import { find, findAll } from 'styled-components/test-utils';

interface MenuItemPropsType {
    isActived?: boolean
    to?: string
    dropdownItems?: {
        to: string
        render: string | number | React.ReactNode
    }[]
    children?: React.ReactNode
    [key: string]: any
}

const MenuItem: React.FC<MenuItemPropsType> = ({
    isActived,
    to,
    dropdownItems,
    children,
    ...rest
}) => {
    const containerRef = useRef<any>(null);

    useEffect(() => {
        if (containerRef.current === null) return;
    
        const dropdownElement = find(containerRef.current, DropdownMenuContainer);

        const mouseEnterHandle = () => {
            if (dropdownElement !== null) {
                dropdownElement.style.visibility = "visible";
                dropdownElement.style.opacity = "1";
            }
        }
        const mouseLeaveHandle = () => {
            if (dropdownElement !== null) {
                dropdownElement.style.opacity = "0";
                // setTimeout(() => {
                dropdownElement.style.visibility = "hidden";
                // }, 300)
            }
        }

        mouseLeaveHandle();

        if (containerRef.current !== null) {

            containerRef.current.addEventListener("mouseenter", mouseEnterHandle)
            containerRef.current.addEventListener("mouseleave", mouseLeaveHandle)

            return () => (
                containerRef.current.addEventListener("mouseenter", mouseEnterHandle),
                containerRef.current.addEventListener("mouseleave", mouseLeaveHandle)
            )
        }
    }, [])

    return (
        <MenuItemContainer ref={containerRef} isActived={isActived} as={to ? Link : "a"} to={to} {...rest}>
            {children}
            {dropdownItems && (
                <Icon icon='ChevronArrowDown' />
            )}
            {dropdownItems && (
                <DropdownMenuContainer>
                    {dropdownItems.map((item, key) => (
                        <DropdownMenuItem to={item.to} key={key}>{item.render}</DropdownMenuItem>
                    ))}
                </DropdownMenuContainer>
            )}
        </MenuItemContainer>
    )
}

const Menu = () => {
    const { slideOpened, dispatch } = usePublicLayoutContext();
    const [keyword, setKeyword] = useState('');
    const location = useLocation();
    useEffect(() => {
        if (location.pathname.split("/")[2] && location.pathname.split("/")[2] !== "") {
            dispatch({ type: "toggleMenu", value: { slideOpened: false } });
        }
    }, [location])
    return (
        <MenuContainer>
            {location.pathname === '/' ? (
                <MenuItem isActived onClick={() => dispatch({ type: "toggleMenu", value: { slideOpened: !slideOpened } })}>
                    Explore
                    <Icon icon='Explore' />
                </MenuItem>
            ) : (
                <MenuItem isActived to='/' onClick={() => dispatch({ type: "toggleMenu", value: { slideOpened: false } })}>
                    <Flex $style={{
                        gap: "1.5rem"
                    }}>
                        <Icon icon='ArrowLeft' width='24px' />
                        Home
                    </Flex>
                </MenuItem>
            )}
            <MenuItem dropdownItems={[
                { render: "Metaverse", to: "/" },
                { render: "NFTs", to: "/" },
                { render: "DApps", to: "/" },
                { render: "Blockchain", to: "/" }
            ]}>Marketplaces</MenuItem>
            <MenuItem to='/'>Academy</MenuItem>
            <SearchInputContainer>
                <Input
                    value={keyword}
                    placeholder='Search...'
                    padding='0.375rem 0.75rem'
                    helpSide={<Icon icon='Search' />}
                    onChange={(e: any) => setKeyword(e.target.value)}
                />
            </SearchInputContainer>
        </MenuContainer>
    )
}

export default Menu;

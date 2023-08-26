import React from 'react';
import { Flex } from '@/components/basic';
import { JoinButton, MarkBar, Rect, Rect1, SignupContainer } from './style';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Logo from "@/assets/img/logo.png"
import { Icon } from '@/components/custom';
import _ROUTERS from '@/constants/route.constant';
import { routerer } from '@/utils/util';


const Signup = () => {
    const location = useLocation();

    return (
        <SignupContainer>
            <Flex $style={{ fDirection: 'column', vAlign: 'center', gap: '4rem', h: '100%' }}>
                <MarkBar>
                    <Link to='/'>
                        <Flex $style={{
                            hAlign: 'space-between',
                            p: '4px 24px',
                            gap: '16px'
                        }}>
                            <img src={Logo} />
                            <Icon icon='Logo' />
                        </Flex>
                    </Link>
                    {location.pathname.includes('client') 
                    ? <Link to={routerer('_SIGNUP', '_SIGNUP_TALENT')}><JoinButton>Join As Talent</JoinButton></Link> : location.pathname.includes('talent') 
                    ? <Link to={routerer('_SIGNUP', '_SIGNUP_CLIENT')}><JoinButton>Join As Client</JoinButton></Link> : ''}
                </MarkBar>
                <Outlet />
            </Flex>
            <Rect />
            <Rect1 />
        </SignupContainer>
    )
}

export default Signup;
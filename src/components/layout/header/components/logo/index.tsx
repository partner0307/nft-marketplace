import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "@/assets/img/logo.png"
import { Flex } from '@/components/basic';
import { Icon } from '@/components/custom';

const LogoContainer = () => {
    return <React.Fragment>
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
    </React.Fragment>
}

export default LogoContainer;
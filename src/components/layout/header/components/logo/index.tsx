import React from 'react';
import { Link } from 'react-router-dom';
import { Flex } from '../../../../basic';
import { Icon } from '../../../../custom';
import Logo from "../../../../../assets/img/logo.png"

const LogoContainer = () => {
    return <React.Fragment>
        <Link to='/'>
            <Flex $style={{
                w: '200px',
                p: '4px 24px',
                hAlign: 'space-between'
            }}>
                <img src={Logo} />
                <Icon icon='Logo' />
            </Flex>
        </Link>
    </React.Fragment>
}

export default LogoContainer;
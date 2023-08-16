import React from 'react';
import { Flex, Link, P } from '../../../../basic';
import { Button, Icon } from '../../../../custom';
import { GV } from '../../../../../utils/style.util';
import { ActionContainer } from './style';

const Actions = () => {
    return <ActionContainer>
        <Flex $style={{
            p: '0 12px',
            h: '40px',
            vAlign: 'center'
        }}>
            <Link to='/' $style={{
                color: 'purple',
                decorator: 'underline',
                offset: '0.5rem'
            }}>Buy Metaverse</Link>
        </Flex>
        <Flex $style={{
            p: '0 12px',
            h: '40px',
            vAlign: 'center'
        }}>
            <Link to='/' $style={{
                color: 'purple',
                decorator: 'underline',
                offset: '0.5rem'
            }}>Work in Metaverse</Link>
        </Flex>
        <Flex $style={{
            vAlign: 'center',
            fDirection: 'row',
            h: '40px',
            p: '0 12px',
            gap: '8px'
        }}>
            <Link to='/'>Sign in</Link>
            <Icon icon='Login' />
        </Flex>
        <Button $style={{
            bg: GV('gradient'),
            radius: '8px'
        }}>
            Register
        </Button>
    </ActionContainer>
}

export default Actions;
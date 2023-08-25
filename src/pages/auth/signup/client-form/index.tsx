import { Flex, P } from '@/components/basic';
import React from 'react';
import { AuthForm } from './style';
import { Icon, Input } from '@/components/custom';

const ClientForm = () => {
    return (
        <AuthForm>
            <Flex $style={{ fDirection: 'column', gap: '0.75rem', w: '100%' }}>
                <P $style={{ size: '2rem', weight: '700' }}>JOIN AS A CLIENT</P>
                <P $style={{ size: '1.25rem' }}>Enter your name and  email address to receive updates  on your activities.</P>
            </Flex>
            <Flex $style={{ fDirection: 'column', gap: '1.75rem' }}>
                <Flex $style={{ gap: '1rem' }}>
                    <Input value='' placeholder='First Name' preSide={<Icon icon='User' />} padding='1rem' radius='1rem' />
                    <Input value='' placeholder='Last Name' preSide={<Icon icon='User' />} padding='1rem' radius='1rem' />
                </Flex>
                <Input value='' placeholder='Email Address' preSide={<Icon icon='User' />} padding='1rem' radius='1rem' />
                <Flex $style={{ gap: '1rem' }}>
                    <Input value='' placeholder='Password' preSide={<Icon icon='User' />} padding='1rem' radius='1rem' />
                    <Input value='' placeholder='Confirm Password' preSide={<Icon icon='User' />} padding='1rem' radius='1rem' />
                </Flex>
            </Flex>
        </AuthForm>
    )
}

export default ClientForm;
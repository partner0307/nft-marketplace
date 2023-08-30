import React from 'react';
import { Flex, Link, P } from '@/components/basic';
import { AuthForm, CustomFont, ItemContainer, SubmitButton } from './style';
import { Checkbox, Dropdown, Icon, Input } from '@/components/custom';
import _ROUTERS from '@/constants/route.constant';
import { GV } from '@/utils/style.util';
import {useNavigate} from 'react-router-dom';
import { routerer } from '@/utils/util';

const ClientForm = () => {
    const navigate = useNavigate();
    const handleContinue = () => {
        navigate(routerer('_SIGNUP', '_VERIFY_ENAIL'))
    }

    return (
        <AuthForm>
            <Flex $style={{ fDirection: 'column', gap: '0.75rem', w: '100%' }}>
                <P $style={{ size: GV('font-size-2'), weight: GV('weight-xl'), align: 'center' }}>JOIN AS A CLIENT</P>
                <P $style={{ size: GV('font-size-3'), align: 'center' }}>Enter your name and  email address to receive updates  on your activities.</P>
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
                <ItemContainer>
                    <Dropdown initialLabel='Canada' />
                </ItemContainer>
                <Checkbox label={<P $style={{ size: GV('font-size-5') }}>I have read <Link to='#' $style={{ color: GV('info') }}>terms and conditions</Link>  and <Link to='#' $style={{ color: GV('info') }}>terms of clients</Link>  and I agree with the terms.</P>} />
            </Flex>
            <SubmitButton onClick={handleContinue}>Continue To Register</SubmitButton>
            <Flex $style={{ vAlign: 'center', gap: '0.25rem', w: '100%', hAlign: 'center' }}>
                <CustomFont>Already have an account? </CustomFont>
                <Link to={routerer('_SIGNIN')}><P $style={{ size: GV('font-size-3'), color: 'info' }}>Sign In</P></Link>
            </Flex>
        </AuthForm>
    )
}

export default ClientForm;
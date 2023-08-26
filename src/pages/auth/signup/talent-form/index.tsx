import React from 'react';
import { Flex, Link, P } from '@/components/basic';
import { AuthForm, CustomButton, CustomFont, CustomLine, LetterContainer, SubmitButton } from './style';
import { Checkbox, Icon, Input } from '@/components/custom';
import _ROUTERS from '@/constants/route.constant';
import { GV } from '@/utils/style.util';
import { useNavigate } from 'react-router-dom';
import { routerer } from '@/utils/util';

const TalentForm = () => {
    const navigate = useNavigate();
    const handleContinue = () => {
        navigate(routerer('_SIGNUP', '_CATEGORY'))
    }

    return (
        <AuthForm>
            <Flex $style={{ fDirection: 'column', gap: '0.75rem', w: '100%' }}>
                <P $style={{ size: '2rem', weight: '700', align: 'center' }}>JOIN AS A TALENT</P>
                <P $style={{ size: '1.25rem', align: 'center' }}>Enter your name and  email address to receive updates  on your activities.</P>
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
                <Checkbox label={<P $style={{ size: '0.875rem' }}>I have read <Link to='#' $style={{ color: GV('info') }}>terms and conditions</Link>  and <Link to='#' $style={{ color: GV('info') }}>terms of clients</Link>  and I agree with the terms.</P>} />
            </Flex>
            <SubmitButton onClick={handleContinue}>Continue To Register</SubmitButton>
            <Flex $style={{ vAlign: 'center' }}>
                <CustomLine />
                <LetterContainer>Or</LetterContainer>
                <CustomLine />
            </Flex>
            <Flex $style={{ hAlign: 'center', gap: '1rem', w: '100%' }}>
                <CustomButton><P $style={{ size: '1.25rem' }}>Sign in with Google</P><Icon icon='Google' /></CustomButton>
                <CustomButton><P $style={{ size: '1.25rem' }}>Sign in with Google</P><Icon icon='Google' /></CustomButton>
            </Flex>
            <Flex $style={{ vAlign: 'center', gap: '0.25rem', w: '100%', hAlign: 'center' }}>
                <CustomFont>Already have an account? </CustomFont>
                <Link to={_ROUTERS._SIGNIN}><P $style={{ size: '1.25rem', color: 'info' }}>Sign In</P></Link>
            </Flex>
        </AuthForm>
    )
}

export default TalentForm;
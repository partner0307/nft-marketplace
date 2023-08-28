import React from 'react';
import { Flex, P } from '@/components/basic';
import { AuthForm, CustomButton, CustomFont, CustomFont1, CustomLine, LetterContainer, MarkBar, Rect, Rect1, SigninContainer, SignupButton, SubmitButton } from './style';
import { Link } from 'react-router-dom';
import Logo from "@/assets/img/logo.png";
import LetterLogo from '@/assets/img/letter-logo.svg';
import { Checkbox, Icon, Input } from '@/components/custom';
import _ROUTERS from '@/constants/route.constant';
import { routerer } from '@/utils/util';

const Signin = () => {
    return (
        <SigninContainer>
            <Flex $style={{ fDirection: 'column', vAlign: 'center', gap: '3rem', h: '100%' }}>
                <MarkBar>
                    <Link to='/'>
                        <Flex $style={{
                            hAlign: 'space-between',
                            p: '4px 24px',
                            gap: '16px'
                        }}>
                            <img src={Logo} />
                            <img src={LetterLogo} alt="" />
                        </Flex>
                    </Link>
                    <Link to={routerer('_SIGNUP')}><SignupButton>Register</SignupButton></Link>
                </MarkBar>
                <AuthForm>
                    <Flex $style={{ fDirection: 'column', gap: '0.75rem', w: '100%' }}>
                        <P $style={{ size: '2rem', weight: '700', align: 'center' }}>WELCOME BACK</P>
                        <P $style={{ size: '1.25rem', align: 'center' }}>Enter your name and  email address to receive updates  on your activities.</P>
                    </Flex>
                    <Flex $style={{ w: '100%', hAlign: 'center' }}>
                        <Flex $style={{ fDirection: 'column', w: '30rem', gap: '1.25rem' }}>
                            <Input value='' placeholder='Email Address' padding='1rem' radius='1rem' />
                            <Input value='' placeholder='Password' padding='1rem' radius='1rem' helpSide={<Icon icon='EyeClosed' />} />
                            <SubmitButton>Submit</SubmitButton>
                            <Flex $style={{ hAlign: 'space-between' }}>
                                <Checkbox label={<P $style={{ size: '0.875rem' }}><CustomFont>Keep me logged in</CustomFont></P>} />
                                <P $style={{ weight: '700', size: "0.875rem" }}>Forget Password</P>
                            </Flex>
                        </Flex>
                    </Flex>
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
                        <CustomFont1>Don't have an account? </CustomFont1>
                        <Link to={routerer('_SIGNUP')}><P $style={{ size: '1.25rem', color: 'info' }}>Register here</P></Link>
                    </Flex>
                </AuthForm>
            </Flex>
            <Rect />
            <Rect1 />
        </SigninContainer>
    )
}

export default Signin;
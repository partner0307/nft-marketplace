import React from 'react';
import { AuthForm, ImageLoader } from './style';

import Image from '@/assets/img/verify-email.png';
import { Flex, P } from '@/components/basic';
import { Link } from 'react-router-dom';
import { GV } from '@/utils/style.util';

const EmailVerify = () => {
    return (
        <AuthForm>
            <Flex $style={{ fDirection: 'column', gap: '0.75rem' }}>
                <Flex $style={{ w: '100%', hAlign: 'center' }}>
                    <ImageLoader src={Image} />
                </Flex>
                <P $style={{ size: GV('font-size-2'), weight: GV('weight-xl'), align: 'center' }}>Please check your email for verification</P>
                <Flex $style={{ vAlign: 'center', hAlign: 'center', gap: '0.5rem', w: '100%' }}>
                    <P $style={{ size: GV('font-size-3') }}>Did not get verification mail?</P>
                    <Link to='#'><P $style={{ color: 'blue' }}>Resend</P></Link>
                </Flex>
            </Flex>
        </AuthForm>
    )
}

export default EmailVerify;
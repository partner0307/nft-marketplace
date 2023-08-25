import React from 'react';
import { Flex, P, Span } from '@/components/basic';
import { AuthForm, CardContent, TalentCardImageContainer, ClientCardImageContainer, CardOption, CustomButton, CustomFont, CustomFont1, CustomLine, LetterContainer, MarkBar, Rect, Rect1, SignupContainer, SubmitButton } from './style';
import { Link } from 'react-router-dom';
import Logo from "@/assets/img/logo.png"
import { Checkbox, Icon, Input } from '@/components/custom';
import { InActiveRadioOption, ActiveRadioOption } from './radio';
import _ROUTERS from '@/constants/route.constant';
import Pattern from './pattern';
import Talent from '@/assets/img/talent.png';
import Client from '@/assets/img/client.png';

const Signup = () => {
    const [clientOrTalent, setClientOrTalent] = React.useState(0);

    return (
        <SignupContainer>
            <Flex $style={{ fDirection: 'column', vAlign: 'center', gap: '3rem', h: '100%' }}>
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
                </MarkBar>
                <AuthForm>
                    <P $style={{ size: '2rem', weight: '700', align: 'center' }}>JOIN AS A CLIENT OR TALENT</P>
                    <Flex $style={{ gap: '2rem' }}>
                        <CardOption onClick={() => setClientOrTalent(1)}>
                            <TalentCardImageContainer option={clientOrTalent}>
                                <img src={Client} alt="" width='100%' height='100%' />
                            </TalentCardImageContainer>
                            <CardContent>
                                <P $style={{ size: '1.25rem', weight: '700', align: 'center' }}>I Am A Client</P>
                                <P $style={{ size: '1.25rem', align: 'center' }}>I am hiring for a talent while exploring the metaverse and other features.</P>
                            </CardContent>
                            <Pattern isSelected={clientOrTalent === 1} />
                            {clientOrTalent === 1 ? <ActiveRadioOption /> : <InActiveRadioOption />}
                        </CardOption>
                        <CardOption onClick={() => setClientOrTalent(2)}>
                            <ClientCardImageContainer option={clientOrTalent}>
                                <img src={Talent} alt="" width='100%' height='100%' />
                            </ClientCardImageContainer>
                            <CardContent>
                                <P $style={{ size: '1.25rem', weight: '700', align: 'center' }}>I Am A Talent</P>
                                <P $style={{ size: '1.25rem', align: 'center' }}>I am a talent looking for work in the metaverse</P>
                            </CardContent>
                            <Pattern isSelected={clientOrTalent === 2} />
                            {clientOrTalent === 2 ? <ActiveRadioOption /> : <InActiveRadioOption />}
                        </CardOption>
                    </Flex>
                    <SubmitButton isActive={clientOrTalent > 0}>Submit</SubmitButton>
                    <Flex $style={{ vAlign: 'center', gap: '0.25rem', w: '100%', hAlign: 'center' }}>
                        <CustomFont1>Already have an account? </CustomFont1>
                        <Link to={_ROUTERS.signup}><P $style={{ size: '1.25rem', color: 'info' }}>Sign In</P></Link>
                    </Flex>
                </AuthForm>
            </Flex>
            <Rect />
            <Rect1 />
        </SignupContainer>
    )
}

export default Signup;
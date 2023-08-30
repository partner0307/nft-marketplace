import React from 'react';
import Pattern from '../pattern';
import Talent from '@/assets/img/talent.png';
import Client from '@/assets/img/client.png';
import { AuthForm, CardContent, CardOption, ClientCardImageContainer, CustomFont1, SubmitButton, TalentCardImageContainer } from './style';
import { Flex, P } from '@/components/basic';
import { ActiveRadioOption, InActiveRadioOption } from '../radio';
import { Link, useNavigate } from 'react-router-dom';
import _ROUTERS from '@/constants/route.constant';
import { routerer } from '@/utils/util';
import { GV } from '@/utils/style.util';

const ChooseForm = () => {
    const [clientOrTalent, setClientOrTalent] = React.useState(0);
    const navigate = useNavigate();

    const handleContinue = () => {
        if (clientOrTalent === 1)
            navigate(routerer('_SIGNUP', '_SIGNUP_CLIENT'));
        else if (clientOrTalent === 2)
            navigate(routerer('_SIGNUP', '_SIGNUP_TALENT'));
    }

    return (
        <AuthForm>
            <P $style={{ size: GV('font-size-2'), weight: GV('weight-xl'), align: 'center' }}>JOIN AS A CLIENT OR TALENT</P>
            <Flex $style={{ gap: '2rem' }}>
                <CardOption onClick={() => setClientOrTalent(1)}>
                    <TalentCardImageContainer option={clientOrTalent}>
                        <img src={Client} alt="" width='100%' height='100%' />
                    </TalentCardImageContainer>
                    <CardContent>
                        <P $style={{ size: GV('font-size-3'), weight: GV('weight-xl'), align: 'center' }}>I Am A Client</P>
                        <P $style={{ size: GV('font-size-3'), align: 'center' }}>I am hiring for a talent while exploring the metaverse and other features.</P>
                    </CardContent>
                    <Pattern isSelected={clientOrTalent === 1} />
                    {clientOrTalent === 1 ? <ActiveRadioOption /> : <InActiveRadioOption />}
                </CardOption>
                <CardOption onClick={() => setClientOrTalent(2)}>
                    <ClientCardImageContainer option={clientOrTalent}>
                        <img src={Talent} alt="" width='100%' height='100%' />
                    </ClientCardImageContainer>
                    <CardContent>
                        <P $style={{ size: GV('font-size-3'), weight: GV('weight-xl'), align: 'center' }}>I Am A Talent</P>
                        <P $style={{ size: GV('font-size-3'), align: 'center' }}>I am a talent looking for work in the metaverse</P>
                    </CardContent>
                    <Pattern isSelected={clientOrTalent === 2} />
                    {clientOrTalent === 2 ? <ActiveRadioOption /> : <InActiveRadioOption />}
                </CardOption>
            </Flex>
            <SubmitButton isActive={clientOrTalent > 0} onClick={handleContinue}>Continue</SubmitButton>
            <Flex $style={{ vAlign: 'center', gap: '0.25rem', w: '100%', hAlign: 'center' }}>
                <CustomFont1>Already have an account? </CustomFont1>
                <Link to={routerer('_SIGNIN')}><P $style={{ size: GV('font-size-3'), color: 'info' }}>Sign In</P></Link>
            </Flex>
        </AuthForm>
    )
}

export default ChooseForm;
import SubHeader from '@/components/page/public/explore/subheader';
import React from 'react';
import { AvatarContainer, StepContainer, StepNumber, StepNumberContainer, TalentCounter } from './style';
import { Button, Icon, Input } from '@/components/custom';
import { Flex, Grid, Heading, P } from '@/components/basic';

import Image from '@/assets/img/avatar1.png';
import TalentCategory from '@/components/page/public/explore/talent-category';
import { GV } from '@/utils/style.util';
import { Link } from 'react-router-dom';

const HireTalent = () => {
    const [keyword, setKeyword] = React.useState('');

    return (
        <>
            <SubHeader title={
                <Flex $style={{ vAlign: 'center', gap: '0.5rem' }}>
                    <Heading level={1} $style={{ weight: '500' }}>Hire Talents</Heading>
                    <Flex>
                        <AvatarContainer src={Image} isFirst />
                        <AvatarContainer src={Image} />
                        <AvatarContainer src={Image} />
                        <TalentCounter>500+</TalentCounter>
                    </Flex>
                </Flex>
            } rightComponent={
                <Flex $style={{ maxW: '200px' }}>
                    <Input value={keyword} placeholder='Search Talent' helpSide={<Icon icon='Search' />} padding='0.4rem 0.75rem' radius='0.75rem' onChange={(e: any) => setKeyword(e.target.value)} />
                </Flex>
            } />
            <Flex $style={{ fDirection: 'column', gap: '2rem', p: '2rem 3rem 0', w: '100%' }}>
                <Grid $style={{ gap: '2rem', columns: '4' }}>
                    <TalentCategory name='Metaverse' rate={4.5} like={12} counts={1234} />
                    <TalentCategory name='Web3' rate={4.5} like={12} counts={1234} />
                    <TalentCategory name='Designers' rate={4.5} like={12} counts={1234} />
                    <TalentCategory name='Web3' rate={4.5} like={12} counts={1234} />
                    <TalentCategory name='Modelers' rate={4.5} like={12} counts={1234} />
                    <TalentCategory name='AI Experts' rate={4.5} like={12} counts={1234} />
                    <TalentCategory name='Animators' rate={4.5} like={12} counts={1234} />
                    <TalentCategory name='Managers' rate={4.5} like={12} counts={1234} />
                </Grid>
                <Flex $style={{ hAlign: 'space-between' }}>
                    <P $style={{ size: '2rem', weight: '600' }}>What You Will Get</P>
                    <Link to='#'>
                        <Button $style={{ bg: GV('gradient'), h: '3rem' }}>Get Started</Button>
                    </Link>
                </Flex>
                <Flex $style={{ fDirection: 'column', w: '100%' }}>
                    <StepContainer>
                        <StepNumberContainer>
                            <StepNumber>1</StepNumber>
                        </StepNumberContainer>
                    </StepContainer>
                </Flex>
            </Flex>
        </>
    );
}

export default HireTalent;
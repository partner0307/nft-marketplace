import React from 'react';
import SubHeader from '@/components/page/public/explore/subheader';
import TalentCategory from '@/components/page/public/explore/talent-category';
import { GV } from '@/utils/style.util';
import { Link } from 'react-router-dom';
import { AvatarContainer, Steps, StepNumber, StepNumberContainer, TalentCounter, StepContainer, StepContent } from './style';
import { Button, Icon, Input } from '@/components/custom';
import { Flex, Grid, Heading, List, ListItem, P, Span } from '@/components/basic';
import Image from '@/components/basic/img';

import Avatar from '@/assets/img/avatar1.png';
import DiscoverImage from '@/assets/img/discover.png';
import CollaborImage from '@/assets/img/collaboration.png';
import SupportImage from '@/assets/img/support.png';

const HireTalent = () => {
    const [keyword, setKeyword] = React.useState('');

    return (
        <>
            <SubHeader title={
                <Flex $style={{ vAlign: 'center', gap: '0.5rem' }}>
                    <Heading level={1} $style={{ weight: '500' }}>Hire Talents</Heading>
                    <Flex>
                        <AvatarContainer src={Avatar} isFirst />
                        <AvatarContainer src={Avatar} />
                        <AvatarContainer src={Avatar} />
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
                    <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg') }}>What You Will Get</P>
                    <Link to='#'>
                        <Button $style={{ bg: GV('gradient'), h: '3rem' }}>Get Started</Button>
                    </Link>
                </Flex>
                <Flex $style={{ fDirection: 'column', p: '0 0 6rem', w: '100%' }}>
                    <Steps>
                        <StepContainer>
                            <StepNumberContainer step={1}>
                                <StepNumber step={1}>1</StepNumber>
                            </StepNumberContainer>
                            <StepContent step={1}>
                                <Flex $style={{ fDirection: 'column', gap: '1rem' }}>
                                    <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg') }}>Discover quality talent fast</P>
                                    <List dir='column'>
                                        <ListItem hideDot>
                                            <Flex $style={{ vAlign: 'center', gap: '0.3rem' }}>
                                                <Icon icon='ListItemIcon' />
                                                <Span $style={{ size: GV('font-size-3') }}>Search a talent directly</Span>
                                            </Flex>
                                        </ListItem>
                                        <ListItem hideDot>
                                            <Flex $style={{ vAlign: 'center', gap: '0.3rem' }}>
                                                <Icon icon='ListItemIcon' />
                                                <Span $style={{ size: GV('font-size-3') }}>See verified work history and reviews</Span>
                                            </Flex>
                                        </ListItem>
                                        <ListItem hideDot>
                                            <Flex $style={{ vAlign: 'center', gap: '0.3rem' }}>
                                                <Icon icon='ListItemIcon' />
                                                <Span $style={{ size: GV('font-size-3') }}>Send Invitations to talent per job post</Span>
                                            </Flex>
                                        </ListItem>
                                        <ListItem hideDot>
                                            <Flex $style={{ vAlign: 'center', gap: '0.3rem' }}>
                                                <Icon icon='ListItemIcon' />
                                                <Span $style={{ size: GV('font-size-3') }}>Use advanced search filters</Span>
                                            </Flex>
                                        </ListItem>
                                    </List>
                                </Flex>
                                <Image src={DiscoverImage} alt='' $style={{ w: '10rem' }} />
                            </StepContent>
                        </StepContainer>
                        <StepContainer>
                            <StepNumberContainer step={2}>
                                <StepNumber step={2}>2</StepNumber>
                            </StepNumberContainer>
                            <StepContent step={2}>
                                <Flex $style={{ fDirection: 'column', gap: '1rem' }}>
                                    <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg') }}>Collaboration tools for project tracking</P>
                                    <List dir='column'>
                                        <ListItem hideDot>
                                            <Flex $style={{ vAlign: 'center', gap: '0.3rem' }}>
                                                <Icon icon='ListItemIcon' />
                                                <Span $style={{ size: GV('font-size-3') }}>Chat, video call, and share files with talent</Span>
                                            </Flex>
                                        </ListItem>
                                        <ListItem hideDot>
                                            <Flex $style={{ vAlign: 'center', gap: '0.3rem' }}>
                                                <Icon icon='ListItemIcon' />
                                                <Span $style={{ size: GV('font-size-3') }}>Get advanced reporting and tracking</Span>
                                            </Flex>
                                        </ListItem>
                                        <ListItem hideDot>
                                            <Flex $style={{ vAlign: 'center', gap: '0.3rem' }}>
                                                <Icon icon='ListItemIcon' />
                                                <Span $style={{ size: GV('font-size-3') }}>Set coworker teams and member permission settings</Span>
                                            </Flex>
                                        </ListItem>
                                        <ListItem hideDot>
                                            <Flex $style={{ vAlign: 'center', gap: '0.3rem' }}>
                                                <Icon icon='ListItemIcon' />
                                                <Span $style={{ size: GV('font-size-3') }}>Customize your invoice with activity codes</Span>
                                            </Flex>
                                        </ListItem>
                                    </List>
                                </Flex>
                                <Image src={CollaborImage} alt='' $style={{ w: '10rem' }} />
                            </StepContent>
                        </StepContainer>
                        <StepContainer>
                            <StepNumberContainer step={3}>
                                <StepNumber step={3}>3</StepNumber>
                            </StepNumberContainer>
                            <StepContent step={3}>
                                <Flex $style={{ fDirection: 'column', gap: '1rem' }}>
                                    <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg') }}>Easy Payment & Support</P>
                                    <List dir='column'>
                                        <ListItem hideDot>
                                            <Flex $style={{ vAlign: 'center', gap: '0.3rem' }}>
                                                <Icon icon='ListItemIcon' />
                                                <Span $style={{ size: GV('font-size-3') }}>24/7 premium customer support</Span>
                                            </Flex>
                                        </ListItem>
                                        <ListItem hideDot>
                                            <Flex $style={{ vAlign: 'center', gap: '0.3rem' }}>
                                                <Icon icon='ListItemIcon' />
                                                <Span $style={{ size: GV('font-size-3') }}>Pay as you go billing for milestone and hourly contracts</Span>
                                            </Flex>
                                        </ListItem>
                                    </List>
                                </Flex>
                                <Image src={SupportImage} alt='' $style={{ w: '10rem' }} />
                            </StepContent>
                        </StepContainer>
                    </Steps>
                    <Flex $style={{ hAlign: 'flex-end', w: '100%' }}>
                        <Link to='#'>
                            <Button $style={{ bg: GV('gradient'), h: '3rem' }}>Get Started</Button>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}

export default HireTalent;
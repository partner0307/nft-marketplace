import React from 'react';
import { Flex, Heading, P } from '@/components/basic';
import { Button, Icon } from '@/components/custom';
import { GV } from '@/utils/style.util';
import {SmallCard, BigCard} from '@/components/page/public/home/screen';

import Screen from '@/assets/img/screen.png';
import Screen1 from '@/assets/img/screen1.png';
import Screen2 from '@/assets/img/screen1.png';
import Screen3 from '@/assets/img/screen1.png';
import { DownButton, HeroContainer } from './style';

const Hero = () => {
    return (
        <HeroContainer>
            <Flex $style={{
                vAlign: 'flex-end',
                gap: "2rem"
            }}>
                <Flex $style={{
                    fDirection: 'column',
                    gap: "2rem"
                }}>
                    <SmallCard image={Screen1} title='LalaVerse' price='1.4ETH' />
                    <SmallCard image={Screen2} title='Somnium' price='1.4ETH' />
                    <SmallCard image={Screen3} title='Roblox' price='2.5ETH' />
                </Flex>
                <Flex $style={{
                    fDirection: 'column',
                    hAlign: 'flex-end',
                    vAlign: 'center',
                    gap: '3.5rem',
                    flex: '1',
                }}>
                    <Flex $style={{
                        fDirection: 'column',
                        vAlign: 'center',
                        gap: '1rem'
                    }}>
                        <Heading level={3} $style={{
                            txtTransform: 'uppercase'
                        }}>All metaverses</Heading>
                        <Heading level={3} $style={{
                            txtTransform: 'uppercase'
                        }}>at one place</Heading>
                    </Flex>
                    <Button $style={{
                        w: '366px',
                        h: '72px',
                        p: '0 24px',
                        bg: GV('gradient'),
                        radius: '8px',
                    }}>
                        <P $style={{
                            size: '20px'
                        }}>See Full Metaverse</P>
                    </Button>
                    <BigCard image={Screen} title='Decentraland' />
                </Flex>
                <Flex $style={{
                    fDirection: 'column',
                    gap: "2rem"
                }}>
                    <SmallCard image={Screen1} title='Geek Metaverse' price='1.4ETH' />
                    <SmallCard image={Screen2} title='Illuvium' price='1.4ETH' />
                    <SmallCard image={Screen3} title='Fortenite' price='2.5ETH' />
                </Flex>
            </Flex>
            <Flex $style={{
                fDirection: "column",
                vAlign: "center"
            }}>
                <DownButton><Icon icon='ArrowDown' /></DownButton>
            </Flex>
        </HeroContainer>
    )
}

export default Hero;
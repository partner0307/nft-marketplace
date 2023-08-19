import React from 'react';
import { Flex, Heading, P } from '@/components/basic';
import { Button, Icon } from '@/components/custom';
import { GV } from '@/utils/style.util';
import { SmallCard, BigCard } from '@/components/page/public/home/screen';

import Screen from '@/assets/img/screen.png';
import Screen1 from '@/assets/img/screen1.png';
import Screen2 from '@/assets/img/screen1.png';
import Screen3 from '@/assets/img/screen1.png';
import { DownButton, HeroContainer } from './style';
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <HeroContainer>
            <Flex
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                $style={{
                    fDirection: 'column',
                    vAlign: 'center',
                    gap: '1rem',
                    mb: "-5rem"
                }}
            >
                <Heading level={1} $style={{
                    txtTransform: 'uppercase',
                    align: "center",
                    maxW: "34.875rem"
                }}>All metaverses at one place</Heading>
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
            </Flex>
            <Flex $style={{
                vAlign: 'flex-end',
                gap: "2rem"
            }}>
                <Flex
                    as={motion.div}
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: "0", opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    $style={{
                        fDirection: 'column',
                        gap: "2rem"
                    }}
                >
                    <SmallCard image={Screen1} title='LalaVerse' price='1.4ETH' />
                    <SmallCard image={Screen2} title='Somnium' price='1.4ETH' />
                    <SmallCard image={Screen3} title='Roblox' price='2.5ETH' />
                </Flex>
                <Flex
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    $style={{
                        flex: '1',
                        fDirection: 'column',
                        hAlign: 'flex-end',
                        gap: '3.5rem',
                        overflow: "hidden"
                    }}
                >
                    <BigCard image={Screen} title='Decentraland' />
                </Flex>
                <Flex
                    as={motion.div}
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: "0", opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    $style={{
                        fDirection: 'column',
                        gap: "2rem"
                    }}
                >
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
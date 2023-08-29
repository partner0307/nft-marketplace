import React from 'react';
import { Flex } from '@/components/basic';
import { Button, Icon } from '@/components/custom';
import { SmallCard, BigCard } from '@/components/page/public/home/screen';

import Screen from '@/assets/img/screen.png';
import Screen1 from '@/assets/img/screen1.png';
import Screen2 from '@/assets/img/screen1.png';
import Screen3 from '@/assets/img/screen1.png';
import { CenterRect, DownButton, HeroContainer, HoveredHeading } from './style';
import { motion } from "framer-motion";
import { FirstRect, SideRect, UpRect } from '@/components/page/public/home/screen/style';
import { Link } from 'react-router-dom';
import Anime from 'react-anime';
import _ROUTERS from '@/constants/route.constant';

const Hero = () => {
    return (
        <HeroContainer>
            <Flex
                $style={{
                    fDirection: 'column',
                    vAlign: 'center',
                    gap: '4.56rem',
                    mb: "-3rem"
                }}
            >
                <Anime
                    easing="easeInOutSine"
                    duration={1000}
                    delay={() => 1000}
                    translateY={['-10em', '0rem']}
                    opacity={[0, 1]}
                >
                    <HoveredHeading level={1} $style={{
                        txtTransform: 'uppercase',
                        align: "center",
                        maxW: "34.875rem"
                    }}>All metaverses at one place</HoveredHeading>
                </Anime>
            </Flex>
            <Flex $style={{
                vAlign: 'flex-end'
            }}>
                <Anime
                    easing="easeInOutSine"
                    duration={1500}
                    delay={() => 2000}
                    translateX={['-10em', '0rem']}
                    opacity={[0, 1]}
                >
                    <Flex
                        $style={{
                            fDirection: 'column',
                        }}
                    >
                        <FirstRect position='left' />
                        <SmallCard image={Screen1} title='LalaVerse' price='1.4ETH' position={"left"} isFirst />
                        <UpRect position={"left"} />
                        <Flex $style={{
                            vAlign: "center"
                        }}>
                            <SmallCard image={Screen2} title='Somnium' price='1.4ETH' position={"left"} />
                            <SideRect />
                        </Flex>
                        <UpRect position={"left"} />
                        <Flex $style={{
                            vAlign: "center"
                        }}>
                            <SmallCard image={Screen3} title='Roblox' price='2.5ETH' position={"left"} />
                            <SideRect />
                        </Flex>
                    </Flex>
                </Anime>
                <Flex
                    $style={{
                        flex: '1',
                        fDirection: 'column',
                        hAlign: 'flex-end',
                        p: "0 0 0.3rem",
                        overflow: "hidden"
                    }}
                >
                    <Flex $style={{
                        hAlign: "center"
                    }}>
                        <Anime
                            easing="easeInOutSine"
                            duration={1500}
                            delay={() => 1500}
                            opacity={[0, 1]}
                        >
                            <Link to={_ROUTERS.metaverse}>
                                <Button $style={{
                                    hoveredBg: "#950554",
                                    hoveredBorder: "#ffffff"
                                }}>See Full Metaverse</Button>
                            </Link>
                        </Anime>
                    </Flex>
                    <Anime
                        easing="easeInOutSine"
                        duration={1500}
                        delay={() => 1000}
                        translateY={['20rem', '0rem']}
                        opacity={[0, 1]}
                    >
                        <Flex $style={{ fDirection: 'column' }}>
                            <CenterRect />
                            <BigCard image={Screen} title='Decentraland' />
                        </Flex>
                    </Anime>
                </Flex>
                <Anime
                    easing="easeInOutSine"
                    duration={1500}
                    delay={() => 2000}
                    translateX={['10em', '0rem']}
                    opacity={[0, 1]}
                >
                    <Flex
                        $style={{
                            fDirection: 'column',
                            vAlign: 'flex-end'
                        }}
                    >
                        <FirstRect position='right' />
                        <SmallCard image={Screen1} title='Geek Metaverse' price='1.4ETH' position={"right"} isFirst />
                        <UpRect position={"right"} />
                        <Flex $style={{
                            vAlign: "center"
                        }}>
                            <SideRect />
                            <SmallCard image={Screen2} title='Illuvium' price='1.4ETH' position={"right"} />
                        </Flex>
                        <UpRect position={"right"} />
                        <Flex $style={{
                            vAlign: "center"
                        }}>
                            <SideRect />
                            <SmallCard image={Screen3} title='Fortenite' price='2.5ETH' position={"right"} />
                        </Flex>
                    </Flex>
                </Anime>
            </Flex>
            <Flex $style={{
                fDirection: "column",
                vAlign: "center"
            }}>
                <DownButton href='#hire_section'><Icon icon='ArrowDown' /></DownButton>
            </Flex>
        </HeroContainer>
    )
}

export default Hero;

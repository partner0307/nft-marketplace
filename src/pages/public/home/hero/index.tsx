import React from 'react';
import { Flex } from '@/components/basic';
import { Icon } from '@/components/custom';
import { SmallCard, BigCard } from '@/components/page/public/home/screen';

import Screen from '@/assets/img/screen.png';
import Screen1 from '@/assets/img/screen1.png';
import Screen2 from '@/assets/img/screen1.png';
import Screen3 from '@/assets/img/screen1.png';
import { CenterRect, CustomButton, DownButton, HeroContainer, HoveredHeading } from './style';
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
                    delay={1000}
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
                <Flex
                    $style={{
                        fDirection: 'column',
                    }}
                >
                    <Anime
                        easing="linear"
                        duration={500}
                        delay={1000}
                        translateY={['-2rem', '0rem']}
                        opacity={[0, 1]}
                    >
                        <Flex $style={{ hAlign: 'center' }}>
                            <FirstRect position='left' />
                        </Flex>
                    </Anime>
                    <Anime
                        easing="easeOutElastic"
                        duration={500}
                        delay={1500}
                        translateX={['-10rem', '0rem']}
                        opacity={[0, 1]}
                    >
                        <SmallCard image={Screen1} title='LalaVerse' price='1.4ETH' position={"left"} isFirst />
                    </Anime>
                    <Anime
                        easing="linear"
                        duration={500}
                        delay={2000}
                        translateY={['-2rem', '0rem']}
                        opacity={[0, 1]}
                    >
                        <Flex $style={{ hAlign: 'center' }}>
                            <UpRect position={"left"} />
                        </Flex>
                    </Anime>
                    <Anime
                        easing="easeOutElastic"
                        duration={500}
                        delay={2500}
                        translateX={['-10rem', '0rem']}
                        opacity={[0, 1]}
                    >
                        <Flex $style={{
                            vAlign: "center"
                        }}>
                            <SmallCard image={Screen2} title='Somnium' price='1.4ETH' position={"left"} />
                            <SideRect />
                        </Flex>
                    </Anime>
                    <Anime
                        easing="linear"
                        duration={500}
                        delay={2500}
                        translateY={['-2rem', '0rem']}
                        opacity={[0, 1]}
                    >
                        <Flex $style={{ hAlign: 'center' }}>
                            <UpRect position={"left"} />
                        </Flex>
                    </Anime>
                    <Anime
                        easing="easeOutElastic"
                        duration={500}
                        delay={3000}
                        translateX={['-10rem', '0rem']}
                        opacity={[0, 1]}
                    >
                        <Flex $style={{
                            vAlign: "center"
                        }}>
                            <SmallCard image={Screen3} title='Roblox' price='2.5ETH' position={"left"} />
                            <SideRect />
                        </Flex>
                    </Anime>
                </Flex>
                <Flex
                    $style={{
                        flex: '1',
                        fDirection: 'column',
                        hAlign: 'flex-end',
                        p: "0 0 0.2rem",
                        overflow: "hidden"
                    }}
                >
                    <Flex $style={{
                        hAlign: "center"
                    }}>
                        <Anime
                            easing="easeInOutSine"
                            duration={1500}
                            delay={1500}
                            opacity={[0, 1]}
                        >
                            <Link to={_ROUTERS.metaverse}>
                                <CustomButton>See Full Metaverse</CustomButton>
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
                <Flex
                    $style={{
                        fDirection: 'column'
                    }}
                >
                    <Anime
                        easing="linear"
                        duration={500}
                        delay={6000}
                        translateY={['2rem', '0rem']}
                        opacity={[0, 1]}
                    >
                        <Flex $style={{ hAlign: 'center' }}>
                            <FirstRect position='right' />
                        </Flex>
                    </Anime>
                    <Anime
                        easing="easeOutElastic"
                        duration={500}
                        delay={5500}
                        translateX={['10rem', '0rem']}
                        opacity={[0, 1]}
                    >
                        <Flex $style={{ hAlign: 'flex-end' }}>
                            <SmallCard image={Screen1} title='Geek Metaverse' price='1.4ETH' position={"right"} isFirst />
                        </Flex>
                    </Anime>
                    <Anime
                        easing="linear"
                        duration={500}
                        delay={5000}
                        translateY={['2rem', '0rem']}
                        opacity={[0, 1]}
                    >
                        <Flex $style={{ hAlign: 'center' }}>
                            <UpRect position={"right"} />
                        </Flex>
                    </Anime>
                    <Anime
                        easing="easeOutElastic"
                        duration={500}
                        delay={4500}
                        translateX={['10rem', '0rem']}
                        opacity={[0, 1]}
                    >
                        <Flex $style={{
                            vAlign: "center"
                        }}>
                            <SideRect />
                            <SmallCard image={Screen2} title='Illuvium' price='1.4ETH' position={"right"} />
                        </Flex>
                    </Anime>
                    <Anime
                        easing="linear"
                        duration={500}
                        delay={4000}
                        translateY={['2rem', '0rem']}
                        opacity={[0, 1]}
                    >
                        <Flex $style={{ hAlign: 'center' }}>
                            <UpRect position={"right"} />
                        </Flex>
                    </Anime>
                    <Anime
                        easing="easeOutElastic"
                        duration={500}
                        delay={3500}
                        translateX={['10rem', '0rem']}
                        opacity={[0, 1]}
                    >
                        <Flex $style={{
                            vAlign: "center"
                        }}>
                            <SideRect />
                            <SmallCard image={Screen3} title='Fortenite' price='2.5ETH' position={"right"} />
                        </Flex>
                    </Anime>
                </Flex>
            </Flex>
            <Flex $style={{
                fDirection: "column",
                vAlign: "center"
            }}>
                <DownButton href='#hire'>
                    <Anime
                        easing="easeInOutSine"
                        duration={1500}
                        delay={0}
                        loop={true}
                        translateY={['-1rem', '2rem']}
                        opacity={[0, 1]}
                    >
                        <Icon icon='ArrowDown' />
                    </Anime>
                </DownButton>
            </Flex>
        </HeroContainer>
    )
}

export default Hero;

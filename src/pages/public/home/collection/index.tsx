import React from 'react';
import { ArrowButton, ArrowContainer, CardContainer, CardContainer1, CardWrapper, CollectionContainer, CollectionWrapper, ContentColor, Cursor, EffectIcon, EffectSVG, EffectText, Mark1, Mark2, Progress, ProgressContainer, Rect1, Rect2, Rect3, SlideCard } from './style';
import { Flex, Heading, P } from '@/components/basic';
import { Button, Icon } from '@/components/custom';
import { GV } from '@/utils/style.util';
import Anime, {anime} from 'react-anime';
import { useInView } from 'react-intersection-observer';
import Letters from './letters/index';

import Background1 from '@/assets/img/card1.png';
import Ether from '@/assets/img/ether-icon.png';
import CardImage from '@/assets/img/card-image.svg';
import CardItem from '@/components/page/public/home/carditem';
import Avatar from '@/assets/img/avatar1.png';
import Image from '@/assets/img/avatar1.png';

const Collection = () => {
    const {ref: firstRef, inView: firstInView} = useInView({ threshold: 0.4, triggerOnce: true });
    const {ref: secondRef, inView: secondInView} = useInView({ threshold: 0.5, triggerOnce: true });
    const {ref: thirdRef, inView: thirdInView} = useInView({ threshold: 0.6, triggerOnce: true });

    return <CollectionContainer>
        <Rect1 />
        <Rect2 />
        <Rect3 />
        <CollectionWrapper>
            <div ref={firstRef}>
                {firstInView && (
                    <React.Fragment>
                        <Flex $style={{
                            w: '100%',
                            fDirection: 'row',
                            hAlign: 'space-between',
                            mb: "2.75rem"
                        }}>
                            <Anime
                                easing="easeInOutQuart"
                                duration={1000}
                                delay={500}
                                opacity={[0, 1]}
                            >
                                <Heading level={1} $style={{
                                    maxW: '500px'
                                }}>Buy, C<EffectText>o</EffectText>llect, Sell NFTs, DApps, Spaces etc.</Heading>
                            </Anime>
                            <Flex $style={{
                                maxW: '400px',
                                fDirection: 'column',
                                vAlign: 'flex-start',
                                gap: '24px'
                            }}>
                                <Anime
                                    easing="linear"
                                    duration={500}
                                    delay={1500}
                                    opacity={[0, 1]}
                                    translateY={['2rem', '0rem']}
                                >
                                    <Flex
                                        $style={{
                                            overflow: "hidden"
                                        }}
                                    >
                                        <P
                                            $style={{
                                                size: GV('font-size-3')
                                            }}
                                        >Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,..</P>
                                    </Flex>
                                </Anime>
                                <Anime
                                    easing="easeOutSine"
                                    duration={2000}
                                    delay={1000}
                                    opacity={[0, 1]}
                                    translateX={['20rem', '0rem']}
                                >
                                    <Button $style={{
                                        bg: GV('gradient'),
                                        p: '8px 48px',
                                        radius: '4px',
                                        shadow: '0px -8px 8px 0px rgba(0, 0, 0, 0.25);'
                                    }}>Explore All NFTs</Button>
                                </Anime>
                            </Flex>
                        </Flex>
                        <Flex $style={{
                            fDirection: 'row',
                            hAlign: 'space-between',
                            w: '100%',
                            gap: "5rem",
                            mb: "5rem"
                        }}>
                            <Flex
                                $style={{
                                    fDirection: 'column',
                                    vAlign: 'center',
                                    gap: '3.875rem'
                                }}
                            >
                                <Flex
                                    $style={{
                                        fDirection: 'column',
                                        hAlign: 'space-between',
                                        gap: "1rem"
                                    }}
                                >
                                    <Anime
                                        easing="easeOutQuad"
                                        duration={1500}
                                        delay={anime.stagger(200, {start: 2000})}
                                        translateX={['-10rem', '0rem']}
                                        opacity={[0, 1]}
                                    >
                                        <Flex $style={{
                                            fDirection: 'column',
                                            vAlign: 'flex-start',
                                            gap: '6px'
                                        }}>
                                            <P $style={{
                                                size: GV('font-size-2'),
                                                weight: '700'
                                            }}><ContentColor>560+</ContentColor></P>
                                            <P>Active NFTs</P>
                                        </Flex>
                                        <Flex $style={{
                                            fDirection: 'column',
                                            vAlign: 'flex-start',
                                            gap: '6px'
                                        }}>
                                            <P $style={{
                                                size: GV('font-size-2'),
                                                weight: '600'
                                            }}>348</P>
                                            <P>Active NFTs</P>
                                        </Flex>
                                        <Flex $style={{
                                            fDirection: 'column',
                                            vAlign: 'flex-start',
                                            gap: '6px'
                                        }}>
                                            <P $style={{
                                                size: GV('font-size-2'),
                                                weight: '600'
                                            }}>277</P>
                                            <P>Active NFTs</P>
                                        </Flex>
                                    </Anime>
                                </Flex>
                                <Anime
                                    easing="easeOutQuad"
                                    duration={1000}
                                    delay={3000}
                                    translateY={['-20rem', '0rem']}
                                    opacity={[0, 1]}
                                >
                                    <ArrowButton>
                                        <EffectSVG>
                                            <Flex>
                                                <Letters />
                                            </Flex>
                                        </EffectSVG>
                                        <ArrowContainer>
                                            <EffectIcon>
                                                <Icon icon='ArrowLowerRight' />
                                            </EffectIcon>
                                        </ArrowContainer>
                                    </ArrowButton>
                                </Anime>
                            </Flex>
                            <Anime
                                easing="easeInQuart"
                                duration={1000}
                                delay={2500}
                                translateX={['100%', '0']}
                                opacity={[0, 1]}
                            >
                                <Flex
                                    $style={{
                                        fDirection: 'column',
                                        vAlign: 'flex-start',
                                        gap: '18px'
                                    }}
                                >
                                    <Flex $style={{
                                        fDirection: 'row'
                                    }}>
                                        <CardContainer>
                                            <CardWrapper>
                                                <img src={Background1} alt="" />
                                                <Mark1>
                                                    <Icon icon='Heart' />
                                                    <P $style={{
                                                        weight: '600',
                                                        color: 'black'
                                                    }}>320</P>
                                                </Mark1>
                                                <Mark2>
                                                    <P $style={{
                                                        weight: '600',
                                                        color: 'black'
                                                    }}>TAOFEEK</P>
                                                </Mark2>
                                            </CardWrapper>
                                            <Flex $style={{
                                                fDirection: 'row',
                                                hAlign: 'space-between',
                                                p: '7px 0 18px'
                                            }}>
                                                <Flex $style={{
                                                    fDirection: 'row',
                                                    hAlign: 'center',
                                                    vAlign: 'center',
                                                    gap: '8px',
                                                    queries: {
                                                        1024: {
                                                            gap: '4px'
                                                        }
                                                    }
                                                }}>
                                                    <Icon icon='Clock' />
                                                    <P $style={{
                                                        weight: '600',
                                                        color: 'black'
                                                    }}>12h : 08m : 21s</P>
                                                </Flex>
                                                <Flex $style={{
                                                    fDirection: 'row',
                                                    vAlign: 'center',
                                                    gap: '4px',
                                                    queries: {
                                                        1024: {
                                                            gap: '2px'
                                                        }
                                                    }
                                                }}>
                                                    <img src={Ether} alt="" />
                                                    <P $style={{
                                                        weight: '700',
                                                        color: 'black'
                                                    }}>4.45ETH</P>
                                                </Flex>
                                            </Flex>
                                            <Flex $style={{
                                                fDirection: 'row',
                                                vAlign: 'center',
                                                hAlign: 'space-between'
                                            }}>
                                                <P $style={{
                                                    size: GV('font-size-3'),
                                                    color: 'black',
                                                    weight: GV('weight-lg')
                                                }}>TAOFEEK #2545</P>
                                                <Button $style={{
                                                    bg: 'black',
                                                    color: 'bg',
                                                    p: '4px 16px',
                                                    radius: '4px',
                                                    h: '0'
                                                }}>Bid Now</Button>
                                            </Flex>
                                        </CardContainer>
                                        <CardContainer1>
                                            <Flex $style={{
                                                fDirection: 'column',
                                                vAlign: 'flex-start',
                                                maxW: '530px',
                                                gap: '14px'
                                            }}>
                                                <P $style={{
                                                    size: GV('font-size-2'),
                                                    weight: '700'
                                                }}>TAOFEEK</P>
                                                <Flex $style={{
                                                    maxW: '470px'
                                                }}>
                                                    <P $style={{
                                                        size: GV('font-size-3'),
                                                    }}>Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</P>
                                                </Flex>
                                                <ProgressContainer>
                                                    <Progress />
                                                </ProgressContainer>
                                                <Flex $style={{
                                                    w: '100%',
                                                    fDirection: 'row',
                                                    hAlign: 'space-between'
                                                }}>
                                                    <P $style={{ weight: '700' }}>62% Sold</P>
                                                    <P $style={{ weight: '700 ' }}>2435/4321</P>
                                                </Flex>
                                            </Flex>
                                            <Flex $style={{
                                                fDirection: 'row',
                                                gap: '14px'
                                            }}>
                                                <SlideCard>
                                                    <img src={CardImage} alt="" />
                                                </SlideCard>
                                                <SlideCard>
                                                    <img src={CardImage} alt="" />
                                                </SlideCard>
                                                <SlideCard>
                                                    <img src={CardImage} alt="" />
                                                </SlideCard>
                                                <SlideCard>
                                                    <img src={CardImage} alt="" />
                                                </SlideCard>
                                            </Flex>
                                        </CardContainer1>
                                    </Flex>
                                    <Flex $style={{
                                        fDirection: 'row',
                                        gap: '12px'
                                    }}>
                                        <Cursor isSelected={true} />
                                        <Cursor isSelected={false} />
                                        <Cursor isSelected={false} />
                                    </Flex>
                                </Flex>
                            </Anime>
                        </Flex>
                    </React.Fragment>
                )}
            </div>
            <Flex $style={{
                fDirection: "column",
                gap: "2rem",
                w: '100%'
            }}>
                <div ref={secondRef}>
                    {secondInView && (
                        <Anime
                            easing="easeInQuart"
                            duration={1000}
                            delay={1500}
                            translateX={['20rem', '0']}
                            opacity={[0, 1]}
                        >
                            <Flex
                                $style={{
                                    gap: "2rem"
                                }}
                            >
                                <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                                <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                                <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                                <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' isLast />
                            </Flex>
                        </Anime>
                    )}
                </div>
                <div ref={thirdRef}>
                    {thirdInView && (
                        <Anime
                            easing="easeInQuart"
                            duration={1000}
                            delay={2000}
                            translateX={['-20rem', '0']}
                            opacity={[0, 1]}
                        >
                            <Flex
                                $style={{
                                    gap: "2rem"
                                }}
                            >
                                <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                                <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                                <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                                <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' isLast />
                            </Flex>
                        </Anime>
                    )}
                </div>
            </Flex>
            <Anime
                easing="easeInQuart"
                duration={1000}
                delay={2500}
                translateY={['20rem', '0']}
                opacity={[0, 1]}
            >
                <Flex
                    $style={{
                        fDirection: 'row',
                        hAlign: 'center',
                        p: '80px 0 0'
                    }}
                >
                    <Button $style={{
                        bg: GV('gradient'),
                        p: '8px 64px',
                        radius: '8px'
                    }}>View All Marketplace</Button>
                </Flex>
            </Anime>
        </CollectionWrapper>
    </CollectionContainer>
}

export default Collection;
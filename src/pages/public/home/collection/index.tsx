import React from 'react';
import { motion } from "framer-motion";
import { ArrowButton, ArrowContainer, CardContainer, CardContainer1, CardWrapper, CollectionContainer, CollectionWrapper, ContentColor, Cursor, Mark1, Mark2, Progress, ProgressContainer, Rect1, Rect2, Rect3, SlideCard } from './style';
import { Flex, Heading, P } from '@/components/basic';
import { Button, Icon } from '@/components/custom';
import { GV } from '@/utils/style.util';
import Letters from './letters/index';

import Background1 from '@/assets/img/card1.png';
import Ether from '@/assets/img/ether-icon.png';
import CardImage from '@/assets/img/card-image.svg';
import CardItem from '@/components/page/public/home/carditem';
import Avatar from '@/assets/img/avatar1.png';
import Image from '@/assets/img/avatar1.png';

const Collection = () => {
    return <CollectionContainer>
        <Rect1 />
        <Rect2 />
        <Rect3 />
        <CollectionWrapper>
            <Flex $style={{
                w: '100%',
                fDirection: 'row',
                hAlign: 'space-between',
                mb: "2.75rem"
            }}>
                <Heading level={1} $style={{
                    maxW: '500px'
                }}>Buy, Collect, Sell NFTs, DApps, Spaces etc.</Heading>
                <Flex $style={{
                    maxW: '400px',
                    fDirection: 'column',
                    vAlign: 'flex-start',
                    gap: '24px'
                }}>
                    <Flex
                        $style={{
                            overflow: "hidden"
                        }}
                    >
                        <P
                            as={motion.div}
                            initial={{ translateY: "100%" }}
                            whileInView={{ translateY: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            $style={{
                                size: '20px'
                            }}
                        >Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,..</P>
                    </Flex>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Button $style={{
                            bg: GV('gradient'),
                            p: '8px 48px',
                            radius: '4px',
                            shadow: '0px -8px 8px 0px rgba(0, 0, 0, 0.25);'
                        }}>Explore All NFTs</Button>
                    </motion.div>
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
                    as={motion.div}
                    initial={{ translateX: "-200%", opacity: 0 }}
                    whileInView={{ translateX: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
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
                        <Flex $style={{
                            fDirection: 'column',
                            vAlign: 'flex-start',
                            gap: '6px'
                        }}>
                            <P $style={{
                                size: '32px',
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
                                size: '32px',
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
                                size: '32px',
                                weight: '600'
                            }}>277</P>
                            <P>Active NFTs</P>
                        </Flex>
                    </Flex>
                    <ArrowButton>
                        <Flex>
                            <Letters />
                        </Flex>
                        <ArrowContainer>
                            <Icon icon='ArrowLowerRight' />
                        </ArrowContainer>
                    </ArrowButton>
                </Flex>
                <Flex
                    as={motion.div}
                    initial={{ translateX: "100%", opacity: 0 }}
                    whileInView={{ translateX: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0 }}
                    viewport={{ once: true }}
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
                                    gap: '8px'
                                }}>
                                    <Icon icon='Clock' />
                                    <P $style={{
                                        weight: '600',
                                        color: 'black'
                                    }}>12h : 08m : 21s</P>
                                </Flex>
                                <Flex $style={{
                                    fDirection: 'row',
                                    gap: '4px'
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
                                hAlign: 'space-between'
                            }}>
                                <P $style={{
                                    size: '20px',
                                    color: 'black',
                                    weight: '600'
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
                                    size: '32px',
                                    weight: '700'
                                }}>TAOFEEK</P>
                                <Flex $style={{
                                    maxW: '470px'
                                }}>
                                    <P $style={{
                                        size: '20px',
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
            </Flex>
            <Flex $style={{
                fDirection: "column",
                gap: "2rem"
            }}>
                <Flex
                    as={motion.div}
                    initial={{ translateX: "-100%", opacity: 0 }}
                    whileInView={{ translateX: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0 }}
                    viewport={{ once: true }}
                    $style={{
                        gap: "2rem"
                    }}
                >
                    <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                    <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                    <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                    <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                </Flex>
                <Flex
                    as={motion.div}
                    initial={{ translateX: "100%", opacity: 0 }}
                    whileInView={{ translateX: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    $style={{
                        gap: "2rem"
                    }}
                >
                    <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                    <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                    <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                    <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                </Flex>
            </Flex>
            <Flex
                as={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
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
        </CollectionWrapper>
    </CollectionContainer>
}

export default Collection;
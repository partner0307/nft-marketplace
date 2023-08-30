import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Anime from 'react-anime';
import { useInView } from 'react-intersection-observer';

import _ROUTERS from '@/constants/route.constant';
import { categories, talents } from '@/constants/mockup/tablents';

import { ArrowButton, Avatar, HireContainer, HireWrapper, ImageWrapper, Item, ItemList } from './style';
import { Flex, Heading, Span } from '@/components/basic';
import { GV } from '@/utils/style.util';
import { Button, Checkbox, Icon } from '@/components/custom';
import TalentCard from '@/components/custom/talent-card';

import "swiper/css";
import "swiper/css/pagination";

import Image1 from '@/assets/img/hire1.png';
import Avatar1 from '@/assets/img/avatar1.png';
import Avatar2 from '@/assets/img/avatar2.png';

const HireSection = () => {
    const [checkedList, setCheckedList] = useState<boolean[]>(new Array(categories.length).fill(false));
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    const set = (index: number) => {
        let tempList = [...checkedList];
        tempList[index] = !tempList[index];
        setCheckedList(tempList);
    }

    useEffect(() => {
        set(0);
    }, [])

    const renderTalentCards = () => {
        return (
            <React.Fragment>
                {talents.map((talent, i) => (
                    <SwiperSlide key={i}>
                        <TalentCard
                            key={i}
                            talent={talent}
                        />
                    </SwiperSlide>
                ))}
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <HireContainer ref={ref}>
                <HireWrapper>
                    <Flex
                        $style={{
                            p: "0 10rem 5rem",
                            vAlign: "center",
                            overflow: "hidden"
                        }}
                    >
                        <Flex $style={{
                            fDirection: 'column',
                            hAlign: 'flex-start',
                            vAlign: 'flex-start',
                            gap: '48px',
                            maxW: "80%"
                        }}>
                            <Flex $style={{
                                fDirection: 'column',
                                vAlign: 'flex-start',
                                gap: '4.5px'
                            }}>
                                {inView && <Anime
                                    easing="easeInOutSine"
                                    duration={1000}
                                    delay={1000}
                                    translateY={['5rem', '0rem']}
                                    opacity={[0, 1]}
                                >
                                    <Span $style={{
                                        size: GV('font-size-3'),
                                        color: GV('caption-color1')
                                    }}>It's Time To</Span>
                                </Anime>}
                                {inView && <Anime
                                    easing="easeInOutSine"
                                    duration={1000}
                                    delay={1500}
                                    translateY={['5rem', '0rem']}
                                    opacity={[0, 1]}
                                >
                                    <Heading level={1} weight='900'>Hire Perfect Talent For Your Web3 Project</Heading>
                                </Anime>}
                            </Flex>
                            {inView && <Anime
                                easing="easeOutElastic"
                                duration={1000}
                                delay={2000}
                                translateX={['-200%', '0']}
                            >
                                <ItemList>
                                    {categories.map((category, index) => (
                                        <Item key={index} isChecked={checkedList[index]} onClick={() => {set(index)}}>
                                            <Checkbox label={category} isChecked={checkedList[index]} />
                                        </Item>
                                    ))}
                                </ItemList>
                            </Anime>}
                        </Flex>
                        {inView && <ImageWrapper>
                            <Anime
                                easing="easeInOutSine"
                                duration={3000}
                                delay={2000}
                                translateX={['200%', '0']}
                            >
                                <Flex>
                                    <img src={Image1} alt="" />
                                </Flex>
                            </Anime>
                            <Anime
                                easing="easeOutBounce"
                                duration={1000}
                                delay={2000}
                                translateY={['-20rem', '0']}
                                opacity={[0.2, 1]}
                            >
                                <Flex
                                    $style={{
                                        fDirection: 'row',
                                        vAlign: 'center',
                                        hAlign: 'center'
                                    }}
                                >
                                    <Avatar src={Avatar1} />
                                    <Avatar src={Avatar2} />
                                    <Avatar src={Avatar1} />
                                </Flex>
                            </Anime>
                        </ImageWrapper>}
                    </Flex>
                    {inView && <Anime
                        easing="easeInOutSine"
                        duration={2000}
                        delay={2000}
                        translateX={['200%', '0']}
                    >
                        <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            navigation
                            modules={[Navigation]}
                            grabCursor={true}
                            className="mySwiper"
                        >
                            {renderTalentCards()}
                        </Swiper>
                    </Anime>}
                    {inView && <Anime
                        easing="easeInOutSine"
                        duration={1000}
                        delay={1500}
                        translateY={['-10rem', '0']}
                        opacity={[0, 1]}
                    >
                        <Flex
                            $style={{
                                fDirection: 'row',
                                vAlign: "center",
                                hAlign: 'space-between',
                                p: '5rem 32px 0 0'
                            }}
                        >
                            <Link to={_ROUTERS.hire_talents}>
                                <Button $style={{
                                    bg: GV('gradient'),
                                    radius: '8px',
                                    p: '0.25rem 3rem',
                                }}>View All Talent</Button>
                            </Link>
                            <Flex $style={{
                                fDirection: 'row',
                                gap: '45px'
                            }}>
                                <ArrowButton isFill={false}><Icon icon='ArrowColorLeft' /></ArrowButton>
                                <ArrowButton isFill={true}><Icon icon='ArrowRight' /></ArrowButton>
                            </Flex>
                        </Flex>
                    </Anime>}
                </HireWrapper>
            </HireContainer>
        </React.Fragment>
    )
}

export default HireSection;
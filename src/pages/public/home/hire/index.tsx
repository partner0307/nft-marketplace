import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import _ROUTERS from '@/constants/route.constant';
import { categories, talents } from '@/constants/mockup/tablents';

import { ArrowButton, Avatar, ContextContainer, HireContainer, HireWrapper, ImageWrapper, Item, ItemList } from './style';
import { Flex, Heading, P, Span } from '@/components/basic';
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
            <HireContainer>
                <HireWrapper>
                    <ContextContainer>
                        <Flex $style={{
                            fDirection: 'column',
                            hAlign: 'flex-start',
                            vAlign: 'flex-start',
                            gap: '48px',
                            maxW: "80%"
                        }}>
                            <Flex
                                $style={{
                                    fDirection: "column",
                                    overflow: "hidden"
                                }}
                            >
                                <motion.div
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true, margin: "-200px" }}
                                >
                                    <Flex $style={{
                                        fDirection: 'column',
                                        vAlign: 'flex-start',
                                        gap: '4.5px'
                                    }}>
                                        <Span $style={{
                                            size: '20px',
                                            color: GV('caption-color1')
                                        }}>It's Time To</Span>
                                        <Heading level={1} weight='900'>Hire Perfect Talent For Your Web3 Project</Heading>
                                    </Flex>
                                </motion.div>
                            </Flex>
                            <motion.div
                                initial={{ x: "-100%", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true, margin: "-200px" }}
                            >
                                <ItemList>
                                    {categories.map((category, index) => (
                                        <Item key={index} isChecked={checkedList[index]} onClick={() => {set(index)}}>
                                            <Checkbox label={category} isChecked={checkedList[index]} />
                                        </Item>
                                    ))}
                                </ItemList>
                            </motion.div>
                        </Flex>
                        <ImageWrapper>
                            <Flex
                                as={motion.div}
                                initial={{ translateX: "100%" }}
                                whileInView={{ translateX: "0%" }}
                                transition={{ duration: 1.5 }}
                                viewport={{ once: true, margin: "-200px" }}
                            >
                                <img src={Image1} alt="" />
                            </Flex>
                            <Flex
                                as={motion.div}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.5 }}
                                viewport={{ once: true, margin: "-200px" }}
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
                        </ImageWrapper>
                    </ContextContainer>
                    <motion.div
                        initial={{ translateX: "100%" }}
                        whileInView={{ translateX: "0%" }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-200px" }}
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
                    </motion.div>
                    <Flex
                        as={motion.div}
                        initial={{ translateY: "100%" }}
                        whileInView={{ translateY: "0%" }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true, margin: "-200px" }}
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
                </HireWrapper>
            </HireContainer>
        </React.Fragment>
    )
}

export default HireSection;
import React from 'react';
import { Flex, P, Span } from '@/components/basic';

import { GV } from '@/utils/style.util';
import Card from '@/components/custom/card';
import Image from '@/components/basic/img';
import { SmallCardContainer } from './style';
import HoverableMedia from '@/components/custom/hoverable-media';

import Mana from '@/assets/img/mana.png';
import Ether from '@/assets/img/ether.png';
import GifImg from '@/assets/img/video.gif'

type SmallCardType = {
    image?: string,
    title?: string,
    price?: string,
    position?: 'left' | 'right',
    isFirst?: boolean
}

type BigCardType = {
    image?: string,
    title?: string
}

export const SmallCard: React.FC<SmallCardType> = ({ image, title, price, position, isFirst }) => {
    return (
        <SmallCardContainer
            w='20vw'
            h='20vh'
            transform={`perspective(23rem) rotateY(${position === 'left' ? `5deg` : `-5deg`}) translateX(${position === 'left' ? `5px` : `-5px`})`}
            position={position}
            isFirst={isFirst}
        >
            {/* <img src={image} alt="" /> */}
            <HoverableMedia
                imageOption={{
                    alt: "Hero",
                    src: image || "",
                    h: "calc(20vh - 35px)",
                    bradius: "1rem"
                }}
                mediaOption={{
                    src: GifImg,
                    type: "gif"
                }}
            />
            <Flex $style={{
                vAlign: 'center',
                hAlign: 'space-between',
                p: '0 8px'
            }}>
                <Span $style={{
                    weight: GV("weight-lg")
                }}>{title}</Span>
                <Span $style={{
                    color: GV('info')
                }}>{price}</Span>
            </Flex>
        </SmallCardContainer>
    )
}

export const BigCard: React.FC<BigCardType> = ({ image, title }) => {
    return (
        <Card>
            {/* <img src={image} style={{height: "21.25rem"}} alt="" /> */}
            {/* <Image src={image || ""} alt="hero" h={"21.25rem"} /> */}
            <HoverableMedia
                imageOption={{
                    alt: "Hero",
                    src: image || "",
                    h: "calc(41.75vh - 50px)",
                    bradius: "1rem"
                }}
                mediaOption={{
                    src: GifImg,
                    type: "gif"
                }}
            />
            <Flex $style={{
                fDirection: 'row',
                vAlign: 'center',
                hAlign: 'space-between',
                p: '0 1rem 0.5rem'
            }}>
                <Span $style={{
                    size: GV("font-size-3"),
                    weight: GV("weight-lg"),
                }}>{title}</Span>
                <Flex $style={{
                    fDirection: 'row',
                    vAlign: 'center',
                    gap: '8px'
                }}>
                    <img src={Mana} alt="" />
                    <img src={Ether} alt="" />
                </Flex>
            </Flex>
        </Card>
    )
}
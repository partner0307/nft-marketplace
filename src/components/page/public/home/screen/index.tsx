import React from 'react';
import { CardContainer } from './style';
import { Flex, P, Span } from '@/components/basic';

import Mana from '@/assets/img/mana.png';
import Ether from '@/assets/img/ether.png';
import { GV } from '@/utils/style.util';
import Card from '@/components/custom/card';
import Image from '@/components/basic/img';

type SmallCardType = {
    image?: string,
    title?: string,
    price?: string,
}

type BigCardType = {
    image?: string,
    title?: string
}

export const SmallCard: React.FC<SmallCardType> = ({ image, title, price }) => {
    return (
        <Card h='12.1875rem'>
            <img src={image} alt="" />
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
        </Card>
    )
}

export const BigCard: React.FC<BigCardType> = ({ image, title }) => {
    return (
        <Card>
            {/* <img src={image} style={{height: "21.25rem"}} alt="" /> */}
            <Image src={image || ""} alt="hero" h={"21.25rem"} />
            <Flex $style={{
                fDirection: 'row',
                vAlign: 'center',
                hAlign: 'space-between',
                p: '0 1rem'
            }}>
                <Span $style={{
                    weight: GV("weight-lg")
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
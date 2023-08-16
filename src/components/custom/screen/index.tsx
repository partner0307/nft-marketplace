import React from 'react';
import { CardContainer } from './style';
import { Flex, P, Span } from '../../basic';

import Mana from '../../../assets/img/mana.png';
import Ether from '../../../assets//img/ether.png';
import { GV } from '../../../utils/style.util';

type SmallCardType = {
    image?: string,
    title?: string,
    price?: string,
}

type BigCardType = {
    image?: string,
    title?: string
}

export const SmallCard: React.FC<SmallCardType> = ({image, title, price}) => {
    return <CardContainer>
        <img src={image} alt="" />
        <Flex $style={{
            vAlign: 'center',
            hAlign: 'space-between',
            p: '0 8px'
        }}>
            <P>{title}</P>
            <Span $style={{
                color: GV('info')
            }}>{price}</Span>
        </Flex>
    </CardContainer>
}

export const BigCard: React.FC<BigCardType> = ({ image, title }) => {
    return <CardContainer>
        <img src={image} alt="" />
        <Flex $style={{
            fDirection: 'row',
            vAlign: 'center',
            hAlign: 'space-between',
            p: '0 1rem'
        }}>
            <P>{title}</P>
            <Flex $style={{
                fDirection: 'row',
                vAlign: 'center',
                gap: '8px'
            }}>
                <img src={Mana} alt="" />
                <img src={Ether} alt="" />
            </Flex>
        </Flex>
    </CardContainer>
}
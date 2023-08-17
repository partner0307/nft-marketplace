import React from 'react';
import { Avatar, CardContainer, IconLoader, ImageLoader } from './style';
import { Flex, P } from '../../../../basic';

type CardType = {
    title: string,
    image: string,
    avatar: string,
    icon1: string,
    icon2: string
}

const Card: React.FC<CardType> = ({ title, image, avatar, icon1, icon2 }) => {
    return <CardContainer>
        <ImageLoader src={image} />
        <Flex $style={{ hAlign: 'space-between', vAlign: 'center' }}>
            <Flex $style={{ fDirection: 'row', hAlign: 'flex-start', gap: '12px' }}>
                <Avatar>
                    <img src={avatar} alt="" />
                </Avatar>
                <P $style={{ size: '20px', weight: '600' }}>{title}</P>
            </Flex>
            <Flex>
                <IconLoader src={icon1} />
                <IconLoader src={icon2} />
            </Flex>
        </Flex>
    </CardContainer>
}

export default Card;
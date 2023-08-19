import React from 'react';
import { CardAvatar, CardContainer, CardImage, ImageWrapper, MarkWrapper, StatusContainer } from './style';

import { Flex, P, Span } from '@/components/basic';
import { Icon } from '@/components/custom';

import Ether from '@/assets/img/ether-icon.png';

type CardItemType = {
    nft?: string
    avatar?: string
    name?: string
    username?: string
    current_price?: string
    start_price?: string
    reduce_price?: string
    reduce_percent?: string
}

const CardItem: React.FC<CardItemType> = ({ nft, avatar, name, username, current_price, start_price, reduce_price, reduce_percent }) => {
    return <CardContainer>
        <CardImage image={nft}>
            <MarkWrapper>
                <Span>Open Sea</Span>
            </MarkWrapper>
        </CardImage>
        <Flex $style={{
            fDirection: 'row',
            hAlign: 'space-between',
            vAlign: 'center',
            w: '100%'
        }}>
            <Flex $style={{
                fDirection: 'row',
                hAlign: 'flex-start',
                gap: '8px'
            }}>
                <CardAvatar src={avatar} />
                <Flex $style={{
                    fDirection: 'column',
                    hAlign: 'space-between',
                    vAlign: 'flex-start'
                }}>
                    <Flex $style={{
                        fDirection: 'row',
                        vAlign: 'center',
                        gap: '2px'
                    }}>
                        <Span $style={{
                            size: '10px'
                        }}>{name}</Span>
                        <Icon icon='CircleCheck' />
                    </Flex>
                    <P $style={{
                        color: 'caption-color1'
                    }}>{username}</P>
                </Flex>
            </Flex>
            <ImageWrapper>
                <img src={Ether} alt="" />
            </ImageWrapper>
        </Flex>
        <StatusContainer>
            <Flex $style={{
                fDirection: 'column',
                vAlign: 'flex-start',
                gap: '4px'
            }}>
                <P $style={{ weight: '600' }}>{current_price}</P>
                <Span $style={{ size: '10px' }}>Latest Bid</Span>
            </Flex>
            <Flex $style={{
                fDirection: 'column',
                vAlign: 'flex-start',
                gap: '4px'
            }}>
                <P $style={{ weight: '600' }}>{start_price}</P>
                <Span $style={{ size: '10px' }}>From</Span>
            </Flex>
            <Flex $style={{
                fDirection: 'column',
                vAlign: 'flex-start',
                gap: '4px'
            }}>
                <P $style={{ weight: '600' }}>{reduce_price}</P>
                <Span $style={{ size: '10px', color: 'purple' }}>{reduce_percent}</Span>
            </Flex>
        </StatusContainer>
    </CardContainer>
}

export default CardItem;
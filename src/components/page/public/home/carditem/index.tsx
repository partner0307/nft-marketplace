import React from 'react';
import { CardAvatar, CardContainer, CardImage, ImageWrapper, MarkWrapper, StatusContainer } from './style';

import { Flex, P, Span } from '@/components/basic';
import { Icon } from '@/components/custom';

import Avatar from '@/assets/img/avatar1.png';
import Ether from '@/assets/img/ether-icon.png';

const CardItem = () => {
    return <CardContainer>
        <CardImage>
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
                <CardAvatar src={Avatar} />
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
                        }}>Thenftmakers</Span>
                        <Icon icon='CircleCheck' />
                    </Flex>
                    <P $style={{
                        color: 'caption-color1'
                    }}>Wasdoke1#61</P>
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
                <P $style={{ weight: '600' }}>4.45ETH</P>
                <Span $style={{ size: '10px' }}>Latest Bid</Span>
            </Flex>
            <Flex $style={{
                fDirection: 'column',
                vAlign: 'flex-start',
                gap: '4px'
            }}>
                <P $style={{ weight: '600' }}>2.45ETH</P>
                <Span $style={{ size: '10px' }}>From</Span>
            </Flex>
            <Flex $style={{
                fDirection: 'column',
                vAlign: 'flex-start',
                gap: '4px'
            }}>
                <P $style={{ weight: '600' }}>4.45ETH</P>
                <Span $style={{ size: '10px', color: 'purple' }}>+2.00%</Span>
            </Flex>
        </StatusContainer>
    </CardContainer>
}

export default CardItem;
import React from 'react';
import { Avatar, HireContainer, ImageWrapper, Item, ItemList } from './style';
import { Flex, Heading, P, Span } from '../../../../basic';
import { GV } from '../../../../../utils/style.util';
import { Checkbox } from '../../../../custom';

import Image1 from '../../../../../assets/img/hire1.png';
import Avatar1 from '../../../../../assets/img/avatar1.png';
import Avatar2 from '../../../../../assets/img/avatar2.png';

const HireSection = () => {

    return (
        <HireContainer>
            <Flex $style={{
                p: "0 10rem",
                vAlign: "center"
            }}>
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
                        <Span $style={{
                            size: '20px',
                            color: GV('caption-color1')
                        }}>It's Time To</Span>
                        <Heading level={3} weight='900'>Hire Perfect Talent For Your Web3 Project</Heading>
                    </Flex>
                    <ItemList>
                    <Item isChecked>
                        <Checkbox label='All' isChecked />
                    </Item>
                    <Item isChecked={false}>
                        <Checkbox label='Metaverse' />
                    </Item>
                    <Item isChecked={false}>
                        <Checkbox label='Web3' />
                    </Item>
                    <Item isChecked={false}>
                        <Checkbox label='Designers' />
                    </Item>
                    <Item isChecked={false}>
                        <Checkbox label='Developers' />
                    </Item>
                    <Item isChecked={false}>
                        <Checkbox label='Modelers' />
                    </Item>
                    <Item isChecked={false}>
                        <Checkbox label='AI Experts' />
                    </Item>
                    <Item isChecked={false}>
                        <Checkbox label='Animators' />
                    </Item>
                    <Item isChecked={false}>
                        <Checkbox label='Managers' />
                    </Item>
                </ItemList>
                </Flex>
                <ImageWrapper>
                    <img src={Image1} alt="" />
                    <Flex $style={{
                        fDirection: 'row',
                        vAlign: 'center',
                        hAlign: 'center'
                    }}>
                        <Avatar src={Avatar1} />
                        <Avatar src={Avatar2} />
                        <Avatar src={Avatar1} />
                    </Flex>
                </ImageWrapper>
            </Flex>
        </HireContainer>
    )
}

export default HireSection;
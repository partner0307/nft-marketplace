import React from 'react';
import { ArrowButton, Avatar, HireContainer, HireWrapper, ImageWrapper, Item, ItemList } from './style';
import { Flex, Heading, P, Span } from '@/components/basic';
import { GV } from '@/utils/style.util';
import { Button, Checkbox, Icon } from '@/components/custom';
import TalentCard from '@/components/custom/talent-card';

import Image1 from '@/assets/img/hire1.png';
import Avatar1 from '@/assets/img/avatar1.png';
import Avatar2 from '@/assets/img/avatar2.png';

import Person1 from '@/assets/img/avatar/pic1.png';
import Person2 from '@/assets/img/avatar/pic2.png';
import Person3 from '@/assets/img/avatar/pic3.png';
import Person4 from '@/assets/img/avatar/pic4.png';

const talents: TablentObject[] = [
    {
        name: "Rafel Benitez",
        picture: Person1,
        profession: "UIUX Designer",
        price: 50,
        rate: 4.5,
        favors: 23,
        endjobs: 41,
        skills: ["Prototyping", "Prototyping", "Prototyping", "Prototyping", "Prototyping"]
    },
    {
        name: "Rafel Benitez",
        picture: Person2,
        profession: "UIUX Designer",
        price: 50,
        rate: 4.5,
        favors: 23,
        endjobs: 41,
        skills: ["Prototyping", "Prototyping", "Prototyping", "Prototyping", "Prototyping"]
    },
    {
        name: "Rafel Benitez",
        picture: Person3,
        profession: "UIUX Designer",
        price: 50,
        rate: 4.5,
        favors: 23,
        endjobs: 41,
        skills: ["Prototyping", "Prototyping", "Prototyping", "Prototyping", "Prototyping"]
    },
    {
        name: "Rafel Benitez",
        picture: Person4,
        profession: "UIUX Designer",
        price: 50,
        rate: 4.5,
        favors: 23,
        endjobs: 41,
        skills: ["Prototyping", "Prototyping", "Prototyping", "Prototyping", "Prototyping"]
    },
    {
        name: "Rafel Benitez",
        picture: Person1,
        profession: "UIUX Designer",
        price: 50,
        rate: 4.5,
        favors: 23,
        endjobs: 41,
        skills: ["Prototyping", "Prototyping", "Prototyping", "Prototyping", "Prototyping"]
    },
    {
        name: "Rafel Benitez",
        picture: Person1,
        profession: "UIUX Designer",
        price: 50,
        rate: 4.5,
        favors: 23,
        endjobs: 41,
        skills: ["Prototyping", "Prototyping", "Prototyping", "Prototyping", "Prototyping"]
    },
    {
        name: "Rafel Benitez",
        picture: Person1,
        profession: "UIUX Designer",
        price: 50,
        rate: 4.5,
        favors: 23,
        endjobs: 41,
        skills: ["Prototyping", "Prototyping", "Prototyping", "Prototyping", "Prototyping"]
    }
]

const HireSection = () => {
    return (
        <HireContainer>
            <HireWrapper>
                <Flex $style={{
                    p: "0 10rem 5rem",
                    vAlign: "center",
                    maxW: '1440px',
                    overflow: "hidden"
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
                            <Heading level={1} weight='900'>Hire Perfect Talent For Your Web3 Project</Heading>
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
                <Flex $style={{
                    fDirection: 'row',
                    gap: '32px',
                    p: '0 0 3rem',
                    overflow: "auto",
                    mb: "3.5rem"
                }}>
                    {talents.map(talent => (
                        <TalentCard
                            talent={talent}
                        />
                    ))}
                </Flex>
                <Flex $style={{
                    fDirection: 'row',
                    hAlign: 'space-between',
                    p: '0 32px 0 0'
                }}>
                    <Button $style={{
                        bg: GV('gradient'),
                        radius: '8px',
                        p: '0.25rem 3rem',
                    }}>View All Talent</Button>
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
    )
}

export default HireSection;
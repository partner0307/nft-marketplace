import React from 'react';
import { SubHeaderContainer, ItemContainer, TabButton, TabGroup } from './style';
import { Flex, Heading, P } from '@/components/basic';
import { Dropdown, Icon, Input } from '@/components/custom';

type SubHeaderType = {
    rightComponent?: React.ReactNode
    title?: string
    description?: string
    isSearch?: boolean
}

const SubHeader: React.FC<SubHeaderType> = ({ rightComponent, title, description, isSearch }) => {
    return <>
        <SubHeaderContainer>
            <Flex $style={{ fDirection: 'column', vAlign: 'flex-start', gap: '18px' }}>
                <Heading level={3} $style={{ weight: '500' }}>{title}</Heading>
                <Flex $style={{ maxW: '400px' }}>
                    <P>{description ?? ''}</P>
                </Flex>
            </Flex>
            {rightComponent}
        </SubHeaderContainer>
        {isSearch
        ?
        <Flex $style={{ fDirection: 'column', gap: '32px' }}>
            <Flex $style={{ vAlign: 'center', p: '24px 35px', gap: '20px' }}>
                <ItemContainer>
                    <Dropdown initialLabel='Filter' hideIcon customIcon={<Icon icon='Filter' />} />
                </ItemContainer>
                <Flex $style={{ flex: '6' }}>
                    <Input value='' placeholder='Search Metaverse' padding='6px 12px' helpSide={<Icon icon='Search' />} />
                </Flex>
                <ItemContainer>
                    <Dropdown initialLabel='Newly Listed' />
                </ItemContainer>
            </Flex>
            <TabGroup>
                <TabButton isSelected={true}>All Categories</TabButton>
                <TabButton isSelected={false}>Games</TabButton>
                <TabButton isSelected={false}>Gambling</TabButton>
                <TabButton isSelected={false}>Social</TabButton>
                <TabButton isSelected={false}>Collectibles</TabButton>
                <TabButton isSelected={false}>Marketplace</TabButton>
                <TabButton isSelected={false}>Real Estate</TabButton>
                <TabButton isSelected={false}><Dropdown initialLabel='More' /></TabButton>
            </TabGroup>
        </Flex>
        : ''}
    </>
}

export default SubHeader;
import React from 'react';
import { SubHeaderContainer, ItemContainer, TabButton, TabGroup } from './style';
import { Flex, Heading, P } from '@/components/basic';
import { Dropdown, Icon, Input } from '@/components/custom';

type SubHeaderType = {
    rightComponent?: React.ReactNode
    title?: string
    description?: string
    tabList?: object[]
    isNFT?: boolean
    isSearch?: boolean
}

const SubHeader: React.FC<SubHeaderType> = ({ rightComponent, title, description, tabList, isNFT, isSearch }) => {
    return <>
        <SubHeaderContainer>
            <Flex $style={{ fDirection: 'column', vAlign: 'flex-start', gap: '18px' }}>
                <Heading level={1} $style={{ weight: '500' }}>{title}</Heading>
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
                    <Input value='' placeholder={isNFT ? 'Search NFTs' : 'Search Metaverse'} padding='6px 12px' helpSide={<Icon icon='Search' />} />
                </Flex>
                <ItemContainer>
                    <Dropdown initialLabel={isNFT ? 'Trending' : 'Newly Listed'} />
                </ItemContainer>
            </Flex>
            <TabGroup>
                {tabList?.map((p: any) => <TabButton isSelected={p.active}>{p.name}</TabButton>)}
                {!isNFT && <TabButton isSelected={false}><Dropdown initialLabel='More' /></TabButton>}
            </TabGroup>
        </Flex>
        : ''}
    </>
}

export default SubHeader;
import React from 'react';
import { TitleBar } from './style';
import { Flex, List, ListItem, P } from '@/components/basic';

const EstateList = () => {
    return <Flex $style={{ fDirection: 'column', gap: '12px' }}>
        <TitleBar>
            <P $style={{ size: '32px', weight: '600' }}>Bedrooms & Bathrooms</P>
        </TitleBar>
        <List dir='column'>
            <ListItem color='#fff'><P>Bedrooms: 3</P></ListItem>
            <ListItem color='#fff'><P>Bathrooms: 2</P></ListItem>
            <ListItem color='#fff'><P>Visitor Toilet: 1</P></ListItem>
            <ListItem color='#fff'><P>2 garage spaces</P></ListItem>
        </List>
    </Flex>
}

export default EstateList;
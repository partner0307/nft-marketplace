import React from 'react';
import { Flex, P } from '@/components/basic';
import EstateList from '@/components/page/public/explore/real-estate-list';
import { Line } from './style';

const Features = () => {
    return <Flex $style={{ fDirection: 'column', gap: '48px' }}>
        <P $style={{ size: '32px', weight: '600' }}>Interior Details</P>
        <Flex $style={{ fWrap: 'wrap', w: '100%', gap: '48px' }}>
            <EstateList />
            <EstateList />
            <EstateList />
            <EstateList />
        </Flex>
        <Line />
        <P $style={{ size: '32px', weight: '600' }}>Interior Details</P>
        <Flex $style={{ gap: '48px' }}>
            <EstateList />
            <EstateList />
        </Flex>
    </Flex>
}

export default Features;
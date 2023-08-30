import React from 'react';
import { Flex, P } from '@/components/basic';
import EstateList from '@/components/page/public/explore/real-estate-list';
import { Line } from './style';
import { GV } from '@/utils/style.util';

const Features = () => {
    return <Flex $style={{ fDirection: 'column', gap: '48px' }}>
        <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg') }}>Interior Details</P>
        <Flex $style={{ fWrap: 'wrap', w: '100%', gap: '48px' }}>
            <EstateList />
            <EstateList />
            <EstateList />
            <EstateList />
        </Flex>
        <Line />
        <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg') }}>Interior Details</P>
        <Flex $style={{ gap: '48px' }}>
            <EstateList />
            <EstateList />
        </Flex>
    </Flex>
}

export default Features;
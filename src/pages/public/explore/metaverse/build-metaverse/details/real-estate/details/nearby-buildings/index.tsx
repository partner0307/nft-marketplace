import React from 'react';
import { Flex, P } from '@/components/basic';
import { BuildingImage, Line } from './style';
import Building from '@/assets/img/home.png'
import { GV } from '@/utils/style.util';

const NearbyBuilding = () => {
    return <Flex $style={{ fDirection: 'column', gap: '48px' }}>
        <Flex $style={{ gap: '43px' }}>
            <BuildingImage src={Building} />
            <Flex $style={{ fDirection: 'column', gap: '12px' }}>
                <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg') }}>Harvard Business School</P>
                <P $style={{ size: GV('font-size-3') }}>Science & Technology</P>
                <P $style={{ size: GV('font-size-3') }}>Distance: 0.8mi</P>
            </Flex>
        </Flex>
        <Line />
        <Flex $style={{ gap: '43px' }}>
            <BuildingImage src={Building} />
            <Flex $style={{ fDirection: 'column', gap: '12px' }}>
                <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg') }}>Supermarche Store</P>
                <P $style={{ size: GV('font-size-3') }}>Science & Technology</P>
                <P $style={{ size: GV('font-size-3') }}>Distance: 0.8mi</P>
            </Flex>
        </Flex>
        <Line />
        <Flex $style={{ gap: '43px' }}>
            <BuildingImage src={Building} />
            <Flex $style={{ fDirection: 'column', gap: '12px' }}>
                <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg') }}>Lake Sheebarah</P>
                <P $style={{ size: GV('font-size-3') }}>Science & Technology</P>
                <P $style={{ size: GV('font-size-3') }}>Distance: 0.8mi</P>
            </Flex>
        </Flex>
    </Flex>
}

export default NearbyBuilding;
import React from 'react';
import { Flex, P } from '@/components/basic';
import { BuildingImage, Line } from './style';
import Building from '@/assets/img/home.png'

const NearbyBuilding = () => {
    return <Flex $style={{ fDirection: 'column', gap: '48px' }}>
        <Flex $style={{ gap: '43px' }}>
            <BuildingImage src={Building} />
            <Flex $style={{ fDirection: 'column', gap: '12px' }}>
                <P $style={{ size: '32px', weight: '600' }}>Harvard Business School</P>
                <P $style={{ size: '20px' }}>Science & Technology</P>
                <P $style={{ size: '20px' }}>Distance: 0.8mi</P>
            </Flex>
        </Flex>
        <Line />
        <Flex $style={{ gap: '43px' }}>
            <BuildingImage src={Building} />
            <Flex $style={{ fDirection: 'column', gap: '12px' }}>
                <P $style={{ size: '32px', weight: '600' }}>Supermarche Store</P>
                <P $style={{ size: '20px' }}>Science & Technology</P>
                <P $style={{ size: '20px' }}>Distance: 0.8mi</P>
            </Flex>
        </Flex>
        <Line />
        <Flex $style={{ gap: '43px' }}>
            <BuildingImage src={Building} />
            <Flex $style={{ fDirection: 'column', gap: '12px' }}>
                <P $style={{ size: '32px', weight: '600' }}>Lake Sheebarah</P>
                <P $style={{ size: '20px' }}>Science & Technology</P>
                <P $style={{ size: '20px' }}>Distance: 0.8mi</P>
            </Flex>
        </Flex>
    </Flex>
}

export default NearbyBuilding;
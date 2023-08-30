import React from 'react';
import { Flex, P } from '@/components/basic';
import { CustomColor } from './style';
import { Line } from './style';
import { GV } from '@/utils/style.util';

const Cost = () => {
    return <Flex $style={{ fDirection: 'column', gap: '24px', w: '100%' }}>
        <Flex $style={{ hAlign: 'space-between' }}>
            <P $style={{ size: GV('font-size-2') }}><CustomColor>Principal Interest</CustomColor></P>
            <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg') }}>$1,345</P>
        </Flex>
        <Line />
        <Flex $style={{ hAlign: 'space-between' }}>
            <P $style={{ size: GV('font-size-2') }}><CustomColor>Mortgage Insurance</CustomColor></P>
            <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg') }}>$5.4</P>
        </Flex>
        <Line />
        <Flex $style={{ hAlign: 'space-between' }}>
            <P $style={{ size: GV('font-size-2') }}><CustomColor>Property Taxes</CustomColor></P>
            <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg') }}>$495</P>
        </Flex>
        <Line />
        <Flex $style={{ hAlign: 'space-between' }}>
            <P $style={{ size: GV('font-size-2') }}><CustomColor>Home Insurance</CustomColor></P>
            <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg') }}>$63</P>
        </Flex>
        <Line />
        <Flex $style={{ hAlign: 'space-between' }}>
            <P $style={{ size: GV('font-size-2') }}><CustomColor>Rental Value</CustomColor></P>
            <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg') }}>$2,587</P>
        </Flex>
        <Line />
        <Flex $style={{ hAlign: 'space-between' }}>
            <P $style={{ size: GV('font-size-2'), color: 'purple' }}>Total Cost</P>
            <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg'), color: 'purple' }}>$2,587</P>
        </Flex>
    </Flex>
}

export default Cost;
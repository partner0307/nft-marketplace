import React from 'react';
import { Flex, P } from '@/components/basic';
import { CustomColor } from './style';
import { Line } from './style';

const Cost = () => {
    return <Flex $style={{ fDirection: 'column', gap: '24px', w: '100%' }}>
        <Flex $style={{ hAlign: 'space-between' }}>
            <P $style={{ size: '32px' }}><CustomColor>Principal Interest</CustomColor></P>
            <P $style={{ size: '32px', weight: '600' }}>$1,345</P>
        </Flex>
        <Line />
        <Flex $style={{ hAlign: 'space-between' }}>
            <P $style={{ size: '32px' }}><CustomColor>Mortgage Insurance</CustomColor></P>
            <P $style={{ size: '32px', weight: '600' }}>$5.4</P>
        </Flex>
        <Line />
        <Flex $style={{ hAlign: 'space-between' }}>
            <P $style={{ size: '32px' }}><CustomColor>Property Taxes</CustomColor></P>
            <P $style={{ size: '32px', weight: '600' }}>$495</P>
        </Flex>
        <Line />
        <Flex $style={{ hAlign: 'space-between' }}>
            <P $style={{ size: '32px' }}><CustomColor>Home Insurance</CustomColor></P>
            <P $style={{ size: '32px', weight: '600' }}>$63</P>
        </Flex>
        <Line />
        <Flex $style={{ hAlign: 'space-between' }}>
            <P $style={{ size: '32px' }}><CustomColor>Rental Value</CustomColor></P>
            <P $style={{ size: '32px', weight: '600' }}>$2,587</P>
        </Flex>
        <Line />
        <Flex $style={{ hAlign: 'space-between' }}>
            <P $style={{ size: '32px', color: 'purple' }}>Total Cost</P>
            <P $style={{ size: '32px', weight: '600', color: 'purple' }}>$2,587</P>
        </Flex>
    </Flex>
}

export default Cost;
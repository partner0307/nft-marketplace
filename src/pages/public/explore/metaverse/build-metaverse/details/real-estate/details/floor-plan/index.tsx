import React from 'react';
import { Flex, P } from '@/components/basic';
import { Icon } from '@/components/custom';
import { FloorImage } from './style';

import Image from '@/assets/img/floor-plan.png';
import { GV } from '@/utils/style.util';

const FloorPlan = () => {
    return <Flex $style={{ fDirection: 'column', gap: '48px' }}>
        <Flex $style={{ hAlign: 'space-between', vAlign: 'center' }}>
            <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg') }}>Main Floor Plan</P>
            <Icon icon='Zoom' />
        </Flex>
        <FloorImage src={Image} />
    </Flex>
}

export default FloorPlan;
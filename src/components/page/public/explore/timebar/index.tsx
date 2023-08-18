import React from 'react';
import { TimeBarContainer, TimeSelector } from './style';
import { Icon } from '@/components/custom';
import { Flex, Span } from '@/components/basic';

const TimeBar = () => {
    return <TimeBarContainer>
        <Icon icon='Refresh' />
        <Flex $style={{ fDirection: 'row', gap: '8px' }}>
            <TimeSelector><Span>1m</Span></TimeSelector>
            <TimeSelector><Span>5m</Span></TimeSelector>
            <TimeSelector><Span>15m</Span></TimeSelector>
            <TimeSelector><Span>30m</Span></TimeSelector>
            <TimeSelector isSelect><Span>1h</Span></TimeSelector>
            <TimeSelector><Span>12h</Span></TimeSelector>
            <TimeSelector><Span>1d</Span></TimeSelector>
        </Flex>
        <Flex $style={{ fDirection: 'row', gap: '8px' }}>
            <TimeSelector><Span>7d</Span></TimeSelector>
            <TimeSelector><Span>14d</Span></TimeSelector>
            <TimeSelector><Span>30d</Span></TimeSelector>
        </Flex>
    </TimeBarContainer>
}

export default TimeBar
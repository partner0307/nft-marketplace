import React from 'react';
import { CustomFont, StatusBarContainer } from './style';
import { Flex, P } from '@/components/basic';
import { Icon } from '@/components/custom';

type StatusBarType = {
    title?: string
    number?: string
    right?: string | React.ReactNode
    percent?: string
    percent_color?: string
}

const StatusBar: React.FC<StatusBarType> = ({ title, number, right, percent, percent_color }) => {
    return <StatusBarContainer>
        <Flex $style={{ hAlign: 'space-between', w: '100%' }}>
            <Flex $style={{ fDirection: 'column', gap: '4px' }}>
                <P $style={{ size: '20px' }}><CustomFont color='#8D8E8D'>{title}</CustomFont></P>
                <P $style={{ size: '20px', weight: '600' }}>{number}</P>
            </Flex>
            <Flex $style={{ fDirection: 'column', vAlign: 'flex-end', hAlign: 'space-between', h: '100%', p: '4px 0 2px' }}>
                {right}
                <P><CustomFont color={percent_color}>{percent}</CustomFont></P>
            </Flex>
        </Flex>
    </StatusBarContainer>
}

export default StatusBar;
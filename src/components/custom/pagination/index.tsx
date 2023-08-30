import React from 'react';
import { CustomFont, PageStep, StepButton } from './style';
import { Flex, P } from '@/components/basic';
import { Icon, Dropdown } from '@/components/custom';
import { GV } from '@/utils/style.util';

const Pagination = () => {
    return <>
        <Flex $style={{ fDirection: 'row', w: '100%', hAlign: 'space-between', vAlign: 'center' }}>
            <Flex $style={{ vAlign: 'center', gap: '16px' }}>
                <PageStep><CustomFont><Dropdown initialLabel='15' /></CustomFont></PageStep>
                <P $style={{ size: GV('font-size'), weight: GV('weight-sm') }}><CustomFont>Showing 1 - 15 of 10534</CustomFont></P>
            </Flex>
            <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '48px' }}>
                <Flex $style={{ vAlign: 'center', gap: '12px' }}>
                    <StepButton><Icon icon='First' /></StepButton>
                    <StepButton><Icon icon='Prev' /></StepButton>
                </Flex>
                <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '12px' }}>
                    <StepButton isActive padding='8px 16px'>1</StepButton>
                    <P $style={{ size: GV('font-size') }}><CustomFont>2</CustomFont></P>
                    <P $style={{ size: GV('font-size') }}><CustomFont>3</CustomFont></P>
                    <P $style={{ size: GV('font-size') }}><CustomFont>...</CustomFont></P>
                    <P $style={{ size: GV('font-size') }}><CustomFont>1534</CustomFont></P>
                </Flex>
                <Flex $style={{ vAlign: 'center', gap: '12px' }}>
                    <StepButton><Icon icon='Next' /></StepButton>
                    <StepButton><Icon icon='Last' /></StepButton>
                </Flex>
            </Flex>
        </Flex>
    </>
}

export default Pagination;
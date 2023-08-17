import React from 'react';
import { CustomFont, PageStep, PaginationWrapper, StepButton } from './style';
import { Flex, P } from '../../basic';
import Icon from '../icon';
import Dropdown from '../dropdown';

const Pagination = () => {
    return <>
        <PaginationWrapper>
            <Flex $style={{ fDirection: 'row', hAlign: 'space-between', vAlign: 'center' }}>
                <Flex $style={{ vAlign: 'center', gap: '16px' }}>
                    <PageStep><CustomFont><Dropdown initialLabel='15' /></CustomFont></PageStep>
                    <P $style={{ size: '16px', weight: '400' }}><CustomFont>Showing 1 - 15 of 10534</CustomFont></P>
                </Flex>
                <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '48px' }}>
                    <Flex $style={{ vAlign: 'center', gap: '12px' }}>
                        <StepButton><Icon icon='First' /></StepButton>
                        <StepButton><Icon icon='Prev' /></StepButton>
                    </Flex>
                    <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '12px' }}>
                        <StepButton isActive padding='8px 16px'>1</StepButton>
                        <P $style={{ size: '16px' }}><CustomFont>2</CustomFont></P>
                        <P $style={{ size: '16px' }}><CustomFont>3</CustomFont></P>
                        <P $style={{ size: '16px' }}><CustomFont>...</CustomFont></P>
                        <P $style={{ size: '16px' }}><CustomFont>1534</CustomFont></P>
                    </Flex>
                    <Flex $style={{ vAlign: 'center', gap: '12px' }}>
                        <StepButton><Icon icon='Next' /></StepButton>
                        <StepButton><Icon icon='Last' /></StepButton>
                    </Flex>
                </Flex>
            </Flex>
        </PaginationWrapper>
    </>
}

export default Pagination;
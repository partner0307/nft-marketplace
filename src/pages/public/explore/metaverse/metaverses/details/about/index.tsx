import React from 'react';
import { AboutContainer, AboutWrapper, Options, Rect, StatusBar, StatusBar1 } from './style';
import { Flex, P } from '@/components/basic';
import { ItemContainer } from '../../style';
import { Dropdown, Icon, Input } from '@/components/custom';
import Table from '@/components/custom/table';
import Pagination from '@/components/custom/pagination';

const About = () => {
    return <>
        <Rect />
        <AboutContainer>
            <AboutWrapper>
                <Flex $style={{ w: '100%' }}>
                    <P $style={{ size: '32px', weight: '600' }}>Smart Contracts (5432)</P>
                </Flex>
                <Flex $style={{ w: '100%' }}>
                    <Input value='' placeholder='Search contracts' helpSide={<Icon icon='Search' />} padding='6px 12px' />
                </Flex>
            </AboutWrapper>
            <Options>
                <P $style={{ size: '32px', weight: '600' }}>Decentraland Details</P>
                <Flex $style={{ gap: '16px' }}>
                    <StatusBar>
                        <P $style={{ size: '20px' }}>Date Listed</P>
                        <P $style={{ size: '20px', weight: '600' }}>July 23, 2023</P>
                    </StatusBar>
                    <StatusBar>
                        <P>Last Updated</P>
                        <P>August 15, 2023</P>
                    </StatusBar>
                </Flex>
                <StatusBar1>
                    <Flex $style={{ fDirection: 'column', gap: '4px' }}>
                        <P>Metaverse ID</P>
                        <P>AD54612</P>
                    </Flex>
                    <Icon icon='Info' />
                </StatusBar1>
            </Options>
        </AboutContainer>
    </>
}

export default About;
import React from 'react';
import { AboutContainer, AboutWrapper, Options, Rect, StatusBar, StatusBar1 } from './style';
import { Flex, P } from '@/components/basic';
import { Icon, Input } from '@/components/custom';
import Table, { TableFieldInterface } from '@/components/custom/table';
import { transactions } from '@/constants/mockup/transactions';
import { tokillo } from '@/utils/util';
import { GV } from '@/utils/style.util';

const fields: TableFieldInterface[] = [
    {
        key: "address",
        label: "ADDRESS",
        render: (i, v, n) => (
            <Flex $style={{
                vAlign: "center",
                gap: "0.5rem"
            }}>
                <P $style={{ size: GV('font-size'), weight: GV('weight-xl'), color: 'info' }}>{v}</P>
                <Icon icon='Copy' />
            </Flex>
        ),
        sort: (i: any, v: any) => v,
        description: "This field is ..."
    },
    {
        key: "blockchain",
        label: "BLOCKCHAIN",
        render: (i, v) => <P $style={{ size: GV('font-size'), weight: GV('weight-xl') }}>{v}</P>,
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "180px"
    },
    {
        key: "uaw",
        label: "UAW",
        render: (i, v) => <P $style={{ size: GV('font-size'), weight: GV('weight-xl') }}>{tokillo(v)}</P>,
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "150px"
    },
]

const About = () => {
    return <>
        <Rect />
        <AboutContainer>
            <AboutWrapper>
                <Flex $style={{ w: '100%' }}>
                    <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg') }}>Smart Contracts (5432)</P>
                </Flex>
                <Flex $style={{ w: '100%' }}>
                    <Input value='' placeholder='Search contracts' helpSide={<Icon icon='Search' />} padding='6px 12px' />
                </Flex>
                <Table fields={fields} data={transactions} />
            </AboutWrapper>
            <Options>
                <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg') }}>Decentraland Details</P>
                <Flex $style={{ gap: '16px' }}>
                    <StatusBar>
                        <P $style={{ size: GV('font-size-3') }}>Date Listed</P>
                        <P $style={{ size: GV('font-size-3'), weight: GV('weight-lg') }}>July 23, 2023</P>
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
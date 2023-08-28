import React from 'react';
import { AboutContainer, AboutWrapper, Options, Rect, StatusBar, StatusBar1 } from './style';
import { Flex, P } from '@/components/basic';
import { Icon, Input } from '@/components/custom';
import Table, { TableFieldInterface } from '@/components/custom/table';
import { transactions } from '@/constants/mockup/transactions';
import { tokillo } from '@/utils/util';

const fields: TableFieldInterface[] = [
    {
        key: "address",
        label: "ADDRESS",
        render: (i, v, n) => (
            <Flex $style={{
                vAlign: "center",
                gap: "0.5rem"
            }}>
                <P $style={{ size: '16px', weight: '700', color: 'info' }}>{v}</P>
                <Icon icon='Copy' />
            </Flex>
        ),
        sort: (i: any, v: any) => v,
        description: "This field is ..."
    },
    {
        key: "blockchain",
        label: "BLOCKCHAIN",
        render: (i, v) => <P $style={{ size: '16px', weight: '700' }}>{v}</P>,
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "180px"
    },
    {
        key: "uaw",
        label: "UAW",
        render: (i, v) => <P $style={{ size: '16px', weight: '700' }}>{tokillo(v)}</P>,
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
                    <P $style={{ size: '32px', weight: '600' }}>Smart Contracts (5432)</P>
                </Flex>
                <Flex $style={{ w: '100%' }}>
                    <Input value='' placeholder='Search contracts' helpSide={<Icon icon='Search' />} padding='6px 12px' />
                </Flex>
                <Table fields={fields} data={transactions} />
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
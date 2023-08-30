import React from 'react';
import { Flex, P } from '@/components/basic';
import Table, { TableFieldInterface } from '@/components/custom/table';
import { histories } from './mockdata';
import { ActionButton } from './style';
import { GV } from '@/utils/style.util';

const fields: TableFieldInterface[] = [
    {
        key: 'date',
        label: 'DATE',
        render: (d: any, v: any, i: number) => <P $style={{ size: GV('font-size'), weight: GV('weight-xl') }}>{v}</P>,
        width: '260px'
    },
    {
        key: 'price',
        label: 'PRICE/SQFT',
        render: (d: any, v: any, i: number) => <P $style={{ size: GV('font-size'), weight: GV('weight-xl'), color: 'info' }}>{v}</P>,
        width: '200px'
    },
    {
        key: 'value',
        label: 'VALUE',
        render: (d: any, v: any, i: number) => <Flex $style={{ fDirection: 'column', gap: '4px' }}>
            <P $style={{ size: GV('font-size'), weight: GV('weight-xl') }}>{v}</P>
            <P $style={{ color: 'success', size: GV('font-size-5') }}>{v}</P>
        </Flex>,
        width: '200px'
    },
    {
        key: 'action',
        label: 'Action',
        render: (d: any, v: any, i: number) => <ActionButton isListed={i === 0}>{ i === 0 ? 'Listed' : 'Sold' }</ActionButton>,
        width: '210px'
    }
]

const PriceHistory = () => {
    return <>
        <Table fields={fields} data={histories} />
    </>
}

export default PriceHistory;
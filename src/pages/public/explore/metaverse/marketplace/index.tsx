import React from 'react';
import { MarketplaceContainer, Rect, Rect1 } from './style';
import SubHeader from '@/components/page/public/explore/subheader';
import { ItemContainer } from '../metaverses/style';
import { Dropdown } from '@/components/custom';
import Pagination from '@/components/custom/pagination';
import Table, { TableFieldInterface } from '@/components/custom/table';
import { Flex, Span } from '@/components/basic';
import { tokillo } from '@/utils/util';
import { metaverses } from '@/pages/public/home/explore/mockdata';

const fields: TableFieldInterface[] = [
    {
        key: "name",
        label: "Name",
        render: (i, v, n) => (
            <Flex $style={{
                vAlign: "center",
                gap: "1rem"
            }}>
                <Span>{n + 1}</Span>
                <Flex $style={{
                    vAlign: "center"
                }}>
                    <Flex $style={{
                        gap: "0.75rem",
                        vAlign: "center"
                    }}>
                        <img src={`public/imgs/${i.avatar}`} width={40} height={40} />
                        <Flex $style={{
                            fDirection: "column"
                        }}>
                            <Flex>
                                <Span $style={{
                                    weight: "bold"
                                }}>{v}</Span>
                            </Flex>
                            <Flex>
                                {i.networks.map((network: string, i: number) => (
                                    <React.Fragment>
                                        <Flex $style={{
                                            gap: "0.25rem",
                                            vAlign: "center"
                                        }}>
                                            <img src={`public/imgs/chains/ethereum.png`} width={12} height={12} />
                                            <Span $style={{
                                                size: "12px"
                                            }}>{network}</Span>
                                        </Flex>
                                    </React.Fragment>
                                ))}
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        ),
        sort: (i: any, v: any) => v,
        description: "This field is ..."
    },
    {
        key: "balance",
        label: "Balance",
        render: (i, v) => (<Span $style={{ weight: "bold" }}>${tokillo(v)}</Span>),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "180px"
    },
    {
        key: "uaw",
        label: "UAW",
        render: (i, v) => (<Span $style={{ weight: "bold" }}>${tokillo(v)}</Span>),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "180px"
    },
    {
        key: "prouaw",
        label: "%UAW",
        render: (i, v) => (<Span $style={{ weight: "bold", color: v > 0 ? v === 0 ? "white" : "success" : "danger" }}>{v}%</Span>),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "180px"
    },
    {
        key: "volume",
        label: "Volume",
        render: (i, v) => (<Span $style={{ weight: "bold" }}>${tokillo(v)}</Span>),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "180px"
    },
    {
        key: "provolume",
        label: "%Volume",
        render: (i, v) => (<Span $style={{ weight: "bold", color: v > 0 ? v === 0 ? "white" : "success" : "danger" }}>{v}%</Span>),
        description: "This field is ...",
        width: "180px"
    },
    {
        key: "uaw24h",
        label: "24HUAW",
        render: (i, v) => (v),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "180px"
    },
]

const tabList = [
    { name: 'All Categories', active: true },
    { name: 'Games', active: false },
    { name: 'Gambling', active: false},
    { name: 'Social', active: false},
    { name: 'Collectibles', active: false},
    { name: 'Marketplace', active: false},
    { name: 'Real Estate', active: false }
]


const Marketplace = () => {
    return <MarketplaceContainer>
        <Rect />
        <Rect1 />
        <SubHeader title='Top Metaverses' tabList={tabList} isSearch rightComponent={
        <ItemContainer>
            <Dropdown initialLabel='All Chains' />
        </ItemContainer>} />
        <Flex $style={{ p: '32px' }}>
            <Table
                data={metaverses}
                fields={fields}
            />
        </Flex>
        <Flex $style={{ p: '0 32px 48px' }}>
            <Pagination />
        </Flex>
    </MarketplaceContainer>
}

export default Marketplace;
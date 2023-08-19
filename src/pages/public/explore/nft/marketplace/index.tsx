import React from 'react';
import { Flex, Span } from '@/components/basic';
import SubHeader from '@/components/page/public/explore/subheader';

const tabList = [
    { name: 'Popular', active: true },
    { name: 'Art', active: false },
    { name: 'Games', active: false},
    { name: 'Sport', active: false},
    { name: 'Photography', active: false},
    { name: 'Nature', active: false},
    { name: 'Sci-fi', active: false },
    { name: 'PFPs', active: false },
    { name: 'Music', active: false },
    { name: 'Others', active: false }
]

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

import Pagination from '@/components/custom/pagination';
import { ItemContainer } from './style';
import { Dropdown } from '@/components/custom';
import Table, { TableFieldInterface } from '@/components/custom/table';
import { tokillo } from '@/utils/util';
import TimeBar from '@/components/page/public/explore/timebar';
import { metaverses } from '@/pages/public/home/explore/mockdata';

const NFTMarketplace = () => {
    return <Flex $style={{ fDirection: 'column', gap: '24px' }}>
        <SubHeader
        title='NFT Collections'
        description='Discover the top NFT collections across multiple chains including Ethereum, BNB Chain, Polygon etc.'
        tabList={tabList}
        isSearch
        isNFT
        rightComponent={
        <ItemContainer>
            <Dropdown initialLabel='All Chains' />
        </ItemContainer>} />
        <Flex $style={{ fDirection: 'column', p: '24px 32px' }}>
            <TimeBar />
            <Table
                data={metaverses}
                fields={fields}
            />
            <Flex $style={{ p: '32px 48px' }}>
                <Pagination />
            </Flex>
        </Flex>
    </Flex>
}

export default NFTMarketplace;
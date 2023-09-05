import React from 'react';
import { Flex, Span } from '@/components/basic';
import SubHeader from '@/components/page/public/explore/subheader';

import Pagination from '@/components/custom/pagination';
import { ItemContainer } from './style';
import { Dropdown } from '@/components/custom';
import Table, { TableFieldInterface } from '@/components/custom/table';
import { routerer, tokillo } from '@/utils/util';
import TimeBar from '@/components/page/public/explore/timebar';
import { nfts } from '@/constants/mockup/nfts';
import { Link } from 'react-router-dom';
import _ROUTERS from '@/constants/route.constant';
import { GV } from '@/utils/style.util';

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

const nft_fields: TableFieldInterface[] = [
    {
        key: 'collections',
        label: 'COLLECTIONS',
        render: (i, v, n) => (
            <Link to={routerer("nft_details", "nft_collections")}>
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
                                        <React.Fragment key={i}>
                                            <Flex $style={{
                                                gap: "0.25rem",
                                                vAlign: "center"
                                            }}>
                                                <img src={`public/imgs/chains/ethereum.png`} width={12} height={12} />
                                                <Span $style={{
                                                    size: GV('font-size-6')
                                                }}>{network}</Span>
                                            </Flex>
                                        </React.Fragment>
                                    ))}
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Link>
        ),
        sort: (i: any, v: any) => v,
        description: "This field is ..."
    },
    {
        key: 'floorprice',
        label: 'FLOOR PRICE',
        render: (i, v, n) => (
            <Flex $style={{ fDirection: 'column' }}>
                <Span $style={{ weight: 'bold' }}>{tokillo(v)}</Span>
                <Span $style={{ size: GV('font-size-5'), color: v > 0 ? v === 0 ? "white" : "success" : "danger" }}>{i.floorpercent}%</Span>
            </Flex>
        ),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "150px"
    },
    {
        key: 'avgprice',
        label: 'AVG.PRICE',
        render: (i, v, n) => (
            <Flex $style={{ fDirection: 'column' }}>
                <Span $style={{ weight: 'bold' }}>{tokillo(v)}</Span>
                <Span $style={{ size: GV('font-size-5'), color: v > 0 ? v === 0 ? "white" : "success" : "danger" }}>{i.avgpercent}%</Span>
            </Flex>
        ),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "150px"
    },
    {
        key: 'mktcap',
        label: 'MKT.CAP',
        render: (i, v, n) => (
            <Flex $style={{ fDirection: 'column' }}>
                <Span $style={{ weight: 'bold' }}>{tokillo(v)}</Span>
                <Span $style={{ size: GV('font-size-5'), color: v < 0 ? v === 0 ? "white" : "success" : "danger" }}>{i.mktpercent}%</Span>
            </Flex>
        ),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "150px"
    },
    {
        key: 'volume',
        label: 'VOLUME',
        render: (i, v, n) => (
            <Flex $style={{ fDirection: 'column' }}>
                <Span $style={{ weight: 'bold' }}>{tokillo(v)}</Span>
                <Span $style={{ size: GV('font-size-5'), color: v > 0 ? v === 0 ? "white" : "success" : "danger" }}>{i.volumepercent}%</Span>
            </Flex>
        ),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "150px"
    },
    {
        key: 'supply',
        label: 'SUPPLY',
        render: (i, v, n) => <Span $style={{ weight: 'bold' }}>{tokillo(v)}</Span>,
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "150px"
    }
]

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
                data={nfts}
                fields={nft_fields}
            />
            <Flex $style={{ p: '32px 48px' }}>
                <Pagination />
            </Flex>
        </Flex>
    </Flex>
}

export default NFTMarketplace;
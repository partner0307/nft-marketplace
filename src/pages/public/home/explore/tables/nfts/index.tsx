import { nfts } from "@/constants/mockup/nfts"
import { AnimatedTableContainer } from "../../style"
import Table, { TableFieldInterface } from "@/components/custom/table"
import { Flex, Span } from "@/components/basic";
import React from "react";
import { tokillo } from "@/utils/util";
import EtherImg from "@/assets/img/chains/ethereum.png";
import { GV } from "@/utils/style.util";

const nft_fields: TableFieldInterface[] = [
    {
        key: 'collections',
        label: 'COLLECTIONS',
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
                        <img src={i.avatar} width={40} height={40} />
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
                                            <img src={EtherImg} width={12} height={12} />
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

const NftTable = () => {
    return (
        <AnimatedTableContainer>
            <Table
                data={nfts}
                fields={nft_fields}
            />
        </AnimatedTableContainer>
    )
}

export default NftTable;
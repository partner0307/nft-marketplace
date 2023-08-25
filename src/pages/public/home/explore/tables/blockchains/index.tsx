import { metaverses } from "@/constants/mockup/metaverses"
import { AnimatedTableContainer } from "../../style"
import Table, { TableFieldInterface } from "@/components/custom/table"
import { Flex, Span } from "@/components/basic";
import React from "react";
import { tokillo } from "@/utils/util";
import { blockchains } from "@/constants/mockup/blockchains";
import EtherImg from "@/assets/img/chains/ethereum.png";

const blockchain_fields: TableFieldInterface[] = [
    {
        key: "currency",
        label: "Currency",
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
                        <Flex>
                            <Span $style={{
                                weight: "bold"
                            }}>{v}</Span>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        ),
        sort: (i: any, v: any) => v,
        description: "This field is ..."
    },
    {
        key: "price",
        label: "Price(USD)",
        render: (i, v) => (<Span $style={{ weight: "bold" }}>${tokillo(v)}</Span>),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "150px"
    },
    {
        key: "volume1",
        label: "%Volume1D",
        render: (i, v) => (<Span $style={{ weight: "bold" }}>${tokillo(v)}</Span>),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "150px"
    },
    {
        key: "volume2",
        label: "%Volume1D",
        render: (i, v) => (<Span $style={{ weight: "bold", color: v > 0 ? v === 0 ? "white" : "success" : "danger" }}>{v}%</Span>),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "150px"
    },
    {
        key: "volume3",
        label: "%Volume3D",
        render: (i, v) => (<Span $style={{ weight: "bold" }}>${tokillo(v)}</Span>),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "150px"
    },
    {
        key: "graph",
        label: "Graph",
        render: (i, v) => (v),
        sort: (i: any, v: any) => (<Span $style={{ weight: "bold", color: v > 0 ? v === 0 ? "white" : "success" : "danger" }}>{v}%</Span>),
        description: "This field is ...",
        width: "150px"
    },
];

const BlockchainTable = () => {
    return (
        <AnimatedTableContainer>
            <Table
                data={blockchains}
                fields={blockchain_fields}
            />
        </AnimatedTableContainer>
    )
}

export default BlockchainTable;
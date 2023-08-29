import { metaverses } from "@/constants/mockup/metaverses"
import { AnimatedTableContainer } from "../../style"
import Table, { TableFieldInterface } from "@/components/custom/table"
import { Flex, Span } from "@/components/basic";
import React from "react";
import { tokillo } from "@/utils/util";
import EtherImg from "@/assets/img/chains/ethereum.png";

const metaverse_fields: TableFieldInterface[] = [
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
        width: "120px"
    },
    {
        key: "uaw",
        label: "UAW",
        render: (i, v) => (<Span $style={{ weight: "bold" }}>${tokillo(v)}</Span>),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "120px"
    },
    {
        key: "prouaw",
        label: "%UAW",
        render: (i, v) => (<Span $style={{ weight: "bold", color: v > 0 ? v === 0 ? "white" : "success" : "danger" }}>{v}%</Span>),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "120px"
    },
    {
        key: "volume",
        label: "Volume",
        render: (i, v) => (<Span $style={{ weight: "bold" }}>${tokillo(v)}</Span>),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "150px"
    },
    {
        key: "provolume",
        label: "%Volume",
        render: (i, v) => (<Span $style={{ weight: "bold", color: v > 0 ? v === 0 ? "white" : "success" : "danger" }}>{v}%</Span>),
        description: "This field is ...",
        width: "120px"
    },
    {
        key: "uaw24h",
        label: "24HUAW",
        render: (i, v) => (v),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "150px"
    },
];

const MetaverseTable = () => {
    return (
        <AnimatedTableContainer>
            <Table
                data={metaverses}
                fields={metaverse_fields}
            />
        </AnimatedTableContainer>
    )
}

export default MetaverseTable;
import { dapps } from "@/constants/mockup/dapps"
import { AnimatedTableContainer } from "../../style"
import Table, { TableFieldInterface } from "@/components/custom/table"
import { Flex, Span } from "@/components/basic";
import React from "react";
import { tokillo } from "@/utils/util";

const dapp_fields: TableFieldInterface[] = [
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
                                    <React.Fragment key={i}>
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
        width: "150px"
    },
    {
        key: "uaw",
        label: "UAW",
        render: (i, v) => (<Span $style={{ weight: "bold" }}>${tokillo(v)}</Span>),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "150px"
    },
    {
        key: "prouaw",
        label: "%UAW",
        render: (i, v) => (<Span $style={{ weight: "bold", color: v > 0 ? v === 0 ? "white" : "success" : "danger" }}>{v}%</Span>),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "150px"
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
        width: "150px"
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

const DappTable = () => {
    return (
        <AnimatedTableContainer>
            <Table
                data={dapps}
                fields={dapp_fields}
            />
        </AnimatedTableContainer>
    )
}

export default DappTable;
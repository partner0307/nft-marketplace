import React from 'react';
import GaugeChart from 'react-gauge-chart';
import { Flex, P, Span } from '@/components/basic';

import IconImage from '@/assets/img/marketplace-icon.png';
import Table, { TableFieldInterface } from '@/components/custom/table';
import { tokillo } from '@/utils/util';
import { metaverses } from '@/constants/mockup/metaverses';
import TimeBar from '@/components/page/public/explore/timebar';
import { Dropdown, Icon } from '@/components/custom';
import { CustomButton, CustomLine, CustomSpan, IconLoader, ImageLoader, StatusCard } from './style';
import { ItemContainer } from '../style';
import Pagination from '@/components/custom/pagination';
import EtherImg from "@/assets/img/chains/ethereum.png";
import AaveImg from '@/assets/img/marketplace-icon1.png';
import { GV } from '@/utils/style.util';

const mockData = [
    {value: 1.5},
    {value: 0},
    {value: 6},
    {value: 2.5},
    {value: 4},
    {value: 3},
    {value: 5.4}
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
                                    <React.Fragment>
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
        width: "120px"
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
        width: "160px"
    },
]

const MarketplaceBlockchains = () => {
    return (
        <Flex $style={{ fDirection: 'column', gap: '1.5rem', w: '100%' }}>
            <Flex $style={{ gap: '6.25rem' }}>
                <Flex $style={{ fDirection: 'column', gap: '0.8rem', maxW: '36.75rem' }}>
                    <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg') }}>Top Cryptocurrencies</P>
                    <Span $style={{ size: GV('font-size-5'), weight: GV('weight-sm') }}>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Vorem ipsum dolor sit amet.</Span>
                </Flex>
                <Flex $style={{ gap: '0.7rem', w: '100%' }}>
                    <Flex $style={{ flex: '1', maxH: '3rem' }}>
                        <TimeBar />
                    </Flex>
                    <Flex $style={{ maxH: '3rem', w: '13rem' }}>
                        <ItemContainer>
                            <Dropdown initialLabel='Filter' customIcon={<Icon icon='Filter' />} />
                        </ItemContainer>
                    </Flex>
                </Flex>
            </Flex>
            <Flex $style={{ hAlign: 'space-between' }}>
                <StatusCard>
                    <Flex $style={{ w: '100%', hAlign: 'space-between', vAlign: 'center' }}>
                        <Flex $style={{ vAlign: 'center', gap: '0.75rem' }}>
                            <ImageLoader src={IconImage} alt='' />
                            <P $style={{ size: GV('font-size-3'), weight: GV('weight-lg') }}>Trending</P>
                        </Flex>
                        <CustomButton>View more</CustomButton>
                    </Flex>
                    <CustomLine />
                    <Flex $style={{ w: '100%', hAlign: 'space-between', vAlign: 'center' }}>
                        <Flex $style={{ vAlign: 'center', gap: '1rem' }}>
                            <Span $style={{ color: 'info' }}>01</Span>
                            <Flex $style={{ gap: '0.75rem', vAlign: 'center' }}>
                                <IconLoader src={AaveImg} />
                                <Flex $style={{ vAlign: 'center', gap: '0.25rem' }}>
                                    <P $style={{ size: GV('font-size'), weight: GV('weight-xl') }}>Aave</P>
                                    <Icon icon='CircleCheck' />
                                </Flex>
                            </Flex>
                        </Flex>
                        <P $style={{ size: GV('font-size'), color: 'success', weight: GV('weight-lg') }}>5.34%</P>
                    </Flex>
                    <CustomLine />
                    <Flex $style={{ w: '100%', hAlign: 'space-between', vAlign: 'center' }}>
                        <Flex $style={{ vAlign: 'center', gap: '1rem' }}>
                            <Span $style={{ color: 'info' }}>01</Span>
                            <Flex $style={{ gap: '0.75rem', vAlign: 'center' }}>
                                <IconLoader src={AaveImg} />
                                <Flex $style={{ vAlign: 'center', gap: '0.25rem' }}>
                                    <P $style={{ size: GV('font-size'), weight: GV('weight-xl') }}>Aave</P>
                                    <Icon icon='CircleCheck' />
                                </Flex>
                            </Flex>
                        </Flex>
                        <P $style={{ size: GV('font-size'), color: 'success', weight: GV('weight-lg') }}>5.34%</P>
                    </Flex>
                    <CustomLine />
                    <Flex $style={{ w: '100%', hAlign: 'space-between', vAlign: 'center' }}>
                        <Flex $style={{ vAlign: 'center', gap: '1rem' }}>
                            <Span $style={{ color: 'info' }}>01</Span>
                            <Flex $style={{ gap: '0.75rem', vAlign: 'center' }}>
                                <IconLoader src={AaveImg} />
                                <Flex $style={{ vAlign: 'center', gap: '0.25rem' }}>
                                    <P $style={{ size: GV('font-size'), weight: GV('weight-xl') }}>Aave</P>
                                    <Icon icon='CircleCheck' />
                                </Flex>
                            </Flex>
                        </Flex>
                        <P $style={{ size: GV('font-size'), color: 'success', weight: GV('weight-lg') }}>5.34%</P>
                    </Flex>
                </StatusCard>
                <StatusCard>
                    <Flex $style={{ vAlign: 'center', gap: '0.75rem' }}>
                        <Icon icon='Star' />
                        <P $style={{ size: GV('font-size-3'), weight: GV('weight-lg') }}>Top Community</P>
                    </Flex>
                    <CustomLine />
                    <Flex $style={{ w: '100%', hAlign: 'space-between', vAlign: 'center' }}>
                        <Flex $style={{ vAlign: 'center', gap: '1rem' }}>
                            <Span $style={{ color: 'info' }}>01</Span>
                            <Flex $style={{ gap: '0.75rem', vAlign: 'center' }}>
                                <IconLoader src={AaveImg} />
                                <Flex $style={{ vAlign: 'center', gap: '0.25rem' }}>
                                    <P $style={{ size: GV('font-size'), weight: GV('weight-xl') }}>Aave</P>
                                    <Icon icon='CircleCheck' />
                                    <CustomSpan>@community_01</CustomSpan>
                                </Flex>
                            </Flex>
                        </Flex>
                        <CustomButton>
                            <Flex $style={{ vAlign: 'center', gap: '0.5rem' }}>Follow <Icon icon='Plus1' /></Flex>
                        </CustomButton>
                    </Flex>
                    <CustomLine />
                    <Flex $style={{ w: '100%', hAlign: 'space-between', vAlign: 'center' }}>
                        <Flex $style={{ vAlign: 'center', gap: '1rem' }}>
                            <Span $style={{ color: 'info' }}>01</Span>
                            <Flex $style={{ gap: '0.75rem', vAlign: 'center' }}>
                                <IconLoader src={AaveImg} />
                                <Flex $style={{ vAlign: 'center', gap: '0.25rem' }}>
                                    <P $style={{ size: GV('font-size'), weight: GV('weight-xl') }}>Aave</P>
                                    <Icon icon='CircleCheck' />
                                    <CustomSpan>@community_01</CustomSpan>
                                </Flex>
                            </Flex>
                        </Flex>
                        <CustomButton>
                            <Flex $style={{ vAlign: 'center', gap: '0.5rem' }}>Follow <Icon icon='Plus1' /></Flex>
                        </CustomButton>
                    </Flex>
                    <CustomLine />
                    <Flex $style={{ w: '100%', hAlign: 'space-between', vAlign: 'center' }}>
                        <Flex $style={{ vAlign: 'center', gap: '1rem' }}>
                            <Span $style={{ color: 'info' }}>01</Span>
                            <Flex $style={{ gap: '0.75rem', vAlign: 'center' }}>
                                <IconLoader src={AaveImg} />
                                <Flex $style={{ vAlign: 'center', gap: '0.25rem' }}>
                                    <P $style={{ size: GV('font-size'), weight: GV('weight-xl') }}>Aave</P>
                                    <Icon icon='CircleCheck' />
                                    <CustomSpan>@community_01</CustomSpan>
                                </Flex>
                            </Flex>
                        </Flex>
                        <CustomButton>
                            <Flex $style={{ vAlign: 'center', gap: '0.5rem' }}>Follow <Icon icon='Plus1' /></Flex>
                        </CustomButton>
                    </Flex>
                </StatusCard>
                <StatusCard>
                    <Flex $style={{ vAlign: 'center', gap: '0.75rem' }}>
                        <P $style={{ size: GV('font-size-3'), weight: GV('weight-lg') }}>Fear & Grid Index</P>
                        <Icon icon='Info' />
                    </Flex>
                    <GaugeChart />
                </StatusCard>
            </Flex>
            <Flex $style={{ vAlign: 'center', gap: '0.75rem' }}>
                <ImageLoader src={IconImage} alt='' />
                <P $style={{ size: GV('font-size-2'), weight: GV('weight-lg') }}>Top Currencies</P>
            </Flex>
            <Flex>
                <Table data={metaverses} fields={fields} />
            </Flex>
            <Pagination />
        </Flex>
    )
}

export default MarketplaceBlockchains;
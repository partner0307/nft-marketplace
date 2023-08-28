import { Flex, P, Span } from '@/components/basic';
import React from 'react';
import { CustomButton, CustomImage, CustomText, Eclipse, ItemContainer, MarketplaceContainer, Options, TitleBar } from './style';
import TimeBar from '@/components/page/public/explore/timebar';
import StatusBar from '@/components/page/public/explore/statusbar';
import { Dropdown, Icon, Input } from '@/components/custom';
import { CustomTab } from '../style';
import Table, { TableFieldInterface } from '@/components/custom/table';
import { tokillo } from '@/utils/util';

import Pagination from '@/components/custom/pagination';
import SlideTab from '@/components/page/public/explore/slidetab';
import { metaverse_nfts } from '@/constants/mockup/metaverse_nfts';

const fields: TableFieldInterface[] = [
    {
        key: "nft",
        label: "NFT",
        render: (i, v, n) => (
            <Flex $style={{
                vAlign: "center",
                gap: "1rem"
            }}>
                <Span>{n + 1}</Span>
                <Flex $style={{
                    vAlign: "flex-start",
                    gap: '0.75rem'
                }}>
                    <CustomImage src={i.image} w='80px' h='80px' r='12px' />
                    <Flex $style={{ p: '16px 0' }}>
                        <P $style={{ size: '16px', weight: '700' }}>{v}</P>
                    </Flex>
                </Flex>
            </Flex>
        ),
        sort: (i: any, v: any) => v,
        description: "This field is ..."
    },
    {
        key: "time",
        label: "TIME",
        render: (i, v) => (
            <Flex $style={{ p: '16px 0' }}>
                <P $style={{ size: '16px', weight: '700' }}>{v}</P>
            </Flex>
        ),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "150px"
    },
    {
        key: "price",
        label: "PRICE",
        render: (i, v) => (
            <Flex $style={{ vAlign: 'flex-start', p: '16px 0 0', gap: '0.5rem' }}>
                <CustomImage src={i.icon1} w='1.5rem' h='1.5rem' r='100px' />
                <Flex $style={{ fDirection: 'column', gap: '0.25rem' }}>
                    <P $style={{ size: '16px', weight: '700' }}>${tokillo(v)}</P>
                    <Flex $style={{ gap: '0.25rem', vAlign: 'center' }}>
                        <CustomImage src={i.icon2} w='12px' h='12px' />
                        <P $style={{ size: '12px', color: 'success' }}>{i.mana}MANA</P>
                    </Flex>
                </Flex>
            </Flex>
        ),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "200px"
    },
    {
        key: "address1",
        label: "%TRANSFOR FROM",
        render: (i, v) => (
            <CustomText>
                <P $style={{ size: '16px', weight: '700' }}>{v}</P>
            </CustomText>
        ),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "250px"
    },
    {
        key: "address2",
        label: "TRANSOFR HUTON",
        render: (i, v) => (
            <CustomText>
                <P $style={{ size: '16px', weight: '700' }}>{v}</P>
            </CustomText>
        ),
        sort: (i: any, v: any) => v,
        description: "This field is ...",
        width: "250px"
    },
]

const Marketplace = () => {
    const [isLive, setLive] = React.useState(false);

    return <MarketplaceContainer>
        <Flex $style={{ w: '100%', gap: '26px', p: '0 0 32px' }}>
            <Flex $style={{ flex: '1', fDirection: 'column', gap: '32px', w: '100%' }}>
                <TitleBar>
                    <Flex $style={{ fDirection: 'column', w: '100%', gap: '20px' }}>
                        <Flex $style={{ vAlign: 'center', gap: '20px', w: '100%' }}>
                            <Flex $style={{ w: '150px', gap: '12px', vAlign: 'center' }}>
                                <P $style={{ weight: '600' }}>Live data</P>
                                {isLive && <Eclipse />}
                            </Flex>
                            <Input value='' placeholder='Search Collectibles' padding='0.375rem 0.75rem' radius='12px' helpSide={<Icon icon='Search' />} />
                            <ItemContainer max='250px'>
                                <Dropdown initialLabel='Recently Listed' />
                            </ItemContainer>
                        </Flex>
                        <TimeBar />
                        <Flex $style={{ w: '100%', hAlign: 'space-between', gap: '16px' }}>
                            <StatusBar title='Volume' number='439' right={<Icon icon='Info' />} percent='+34%' percent_color='#1FDD00' />
                            <StatusBar title='Traders' number='$20.99k' right={<Icon icon='Info' />} percent='-56.40%' percent_color='#E85051' />
                            <StatusBar title='Floor Price' number='1.37k' right={<Icon icon='Info' />} percent='+36.97%' percent_color='#1FDD00' />
                        </Flex>
                        <Flex $style={{ w: '100%', hAlign: 'space-between', gap: '16px' }}>
                            <StatusBar title='Avg, Price' number='439' right={<Icon icon='Info' />} percent='+34%' percent_color='#1FDD00' />
                            <StatusBar title='Sales' number='$20.99k' right={<Icon icon='Info' />} percent='-56.40%' percent_color='#E85051' />
                            <StatusBar title='Market Cap.' number='1.37k' right={<Icon icon='Info' />} percent='+36.97%' percent_color='#1FDD00' />
                        </Flex>
                    </Flex>
                </TitleBar>
                <Flex $style={{ fDirection: 'column' }}>
                    <TimeBar />
                    <Table
                        data={metaverse_nfts}
                        fields={fields}
                    />
                    <Flex $style={{ p: '24px 0 35px' }}>
                        <Pagination />
                    </Flex>
                </Flex>
            </Flex>
            <Options>
                <ItemContainer>
                    <Dropdown initialLabel='Filter' hideIcon customIcon={<Icon icon='Filter' />} />
                </ItemContainer>
                <SlideTab
                    label='Categories'
                >
                    <Flex $style={{ fWrap: 'wrap', gap: '20px', w: '100%' }}>
                        <CustomTab isActive>Land</CustomTab>
                        <CustomTab>Parcels</CustomTab>
                        <CustomTab>Estate</CustomTab>
                    </Flex>
                </SlideTab>
                <SlideTab
                    label='Status'
                >
                    <Flex $style={{ fWrap: 'wrap', gap: '20px', w: '100%' }}>
                        <CustomTab isActive>All Land</CustomTab>
                        <CustomTab>For sale</CustomTab>
                        <CustomTab>For rent</CustomTab>
                    </Flex>
                </SlideTab>
                <SlideTab
                    label='Price'
                >
                    <Flex $style={{
                        fDirection: "column",
                        gap: "1.25rem"
                    }}>
                        <Flex $style={{ fDirection: 'row', gap: '16px', vAlign: 'flex-end' }}>
                            <Input value='' placeholder='Min' padding='6px 12px' />
                            <Icon icon='ArrowRight' />
                            <Input value='' placeholder='Min' padding='6px 12px' />
                        </Flex>
                        <CustomButton>Submit</CustomButton>
                    </Flex>
                </SlideTab>
                <SlideTab
                    label='Properties'
                >
                    <Input value='' placeholder='Search properties' padding='6px 12px' helpSide={<Icon icon='Search' />} />
                </SlideTab>
            </Options>
        </Flex>

    </MarketplaceContainer>
}

export default Marketplace;
import { Flex, Grid, P } from '@/components/basic';
import React from 'react';
import { CustomButton, Eclipse, ItemContainer, LandContainer, NFTs, Options, TitleBar } from './style';
import TimeBar from '@/components/page/public/explore/timebar';
import StatusBar from '@/components/page/public/explore/statusbar';
import { Dropdown, Icon, Input } from '@/components/custom';
import NFT from '@/components/page/public/explore/nft';

import Image1 from '@/assets/img/metaverse/1.png';
import Image2 from '@/assets/img/metaverse/2.png';
import Image3 from '@/assets/img/metaverse/3.png';
import { CustomTab } from '../style';
import Pagination from '@/components/custom/pagination';
import SlideTab from '@/components/page/public/explore/slidetab';

const Land = () => {
    const [isLive, setLive] = React.useState(false);
    const [isCategoryOpen, setCategoryOpen] = React.useState(true);
    const [isStatusOpen, setStatusOpen] = React.useState(true);
    const [isPriceOpen, setPriceOpen] = React.useState(false);
    const [isPropertyOpen, setPropertyOpen] = React.useState(false);

    return <LandContainer>
        <Flex $style={{ w: '100%', gap: '26px', p: '0 0 32px' }}>
            <Flex $style={{ maxW: '900px', w: '100%', fDirection: 'column', gap: '32px' }}>
                <TitleBar>
                    <Flex $style={{ fDirection: 'column', w: '100%', gap: '20px' }}>
                        <Flex $style={{ vAlign: 'center', gap: '20px', w: '100%' }}>
                            <Flex $style={{ w: '150px', gap: '12px', vAlign: 'center' }}>
                                <P $style={{ weight: '600' }}>Live data</P>
                                {isLive && <Eclipse />}
                            </Flex>
                            <Input value='' placeholder='Search Collectibles' radius='12px' helpSide={<Icon icon='Search' />} />
                            <ItemContainer max='200px'>
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
                <NFTs>
                    <Grid $style={{ columns: "3", gap: "2rem" }}>
                        <NFT image={Image1} name='Mall Street' price='4.45ETH' network='MANA' usd='1500' isCount />
                        <NFT image={Image2} name='Orange Amor' price='4.45ETH' network='MANA' usd='1500' isCount />
                        <NFT image={Image3} name='Southam Lir...' price='4.45ETH' network='MANA' usd='1500' isCount />
                        <NFT image={Image1} name='Mall Street' price='4.45ETH' network='MANA' usd='1500' isCount />
                        <NFT image={Image2} name='Orange Amor' price='4.45ETH' network='MANA' usd='1500' isCount />
                        <NFT image={Image3} name='Southam Lir...' price='4.45ETH' network='MANA' usd='1500' isCount />
                        <NFT image={Image1} name='Mall Street' price='4.45ETH' network='MANA' usd='1500' isCount />
                        <NFT image={Image2} name='Orange Amor' price='4.45ETH' network='MANA' usd='1500' isCount />
                        <NFT image={Image3} name='Southam Lir...' price='4.45ETH' network='MANA' usd='1500' isCount />
                    </Grid>
                    <Flex $style={{ w: '100%', p: '32px 24px 24px' }}>
                        <Pagination />
                    </Flex>
                </NFTs>
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

    </LandContainer>
}

export default Land;
import { Flex, P } from '@/components/basic';
import React from 'react';
import { Container, CustomButton, Eclipse, ItemContainer, NFTs, Options, Rect, TitleBar, CustomTab } from './style';
import TimeBar from '@/components/page/public/explore/timebar';
import StatusBar from '@/components/page/public/explore/statusbar';
import { Checkbox, Dropdown, Icon, Input } from '@/components/custom';
import Pagination from '@/components/custom/pagination';

import Image from '@/assets/img/avatar1.png';
import Avatar from '@/assets/img/avatar1.png';
import CardItem from '@/components/page/public/home/carditem';

const NFTCollections = () => {
    const [isLive, setLive] = React.useState(false);
    const [isStatusOpen, setStatusOpen] = React.useState(true);
    const [isPriceOpen, setPriceOpen] = React.useState(false);
    const [isPropertyOpen, setPropertyOpen] = React.useState(false);
    const [isClothOpen, setClothOpen] = React.useState(false);
    const [isHatOpen, setHasOpen] = React.useState(false);
    const [isMouthOpen, setMouthOpen] = React.useState(false);
    const [isEyesOpen, setEyeOpen] = React.useState(false);
    const [isFurOpen, setFurOpen] = React.useState(false);
    const [isBackgroundOpen, setBackgroundOpen] = React.useState(false);
    const [isGlassesOpen, setGlassesOpen] = React.useState(false);
    const [isEarningOpen, setEarningOpen] = React.useState(false);

    return <Container>
        <Rect />
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
                            <StatusBar title='Volume' number='439' right={<Icon  icon='Info'/>} percent='+34%' percent_color='#1FDD00' />
                            <StatusBar title='Traders' number='$20.99k' right={<Icon  icon='Info'/>} percent='-56.40%' percent_color='#E85051' />
                            <StatusBar title='Floor Price' number='1.37k' right={<Icon  icon='Info'/>} percent='+36.97%' percent_color='#1FDD00' />
                        </Flex>
                        <Flex $style={{ w: '100%', hAlign: 'space-between', gap: '16px' }}>
                            <StatusBar title='Avg, Price' number='439' right={<Icon  icon='Info'/>} percent='+34%' percent_color='#1FDD00' />
                            <StatusBar title='Sales' number='$20.99k' right={<Icon  icon='Info'/>} percent='-56.40%' percent_color='#E85051' />
                            <StatusBar title='Market Cap.' number='1.37k' right={<Icon  icon='Info'/>} percent='+36.97%' percent_color='#1FDD00' />
                        </Flex>
                    </Flex>
                </TitleBar>
                <NFTs>
                    <Flex $style={{ hAlign: 'center', fWrap: 'wrap', gap: '16px', w: '100%' }}>
                        <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                        <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                        <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                        <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                        <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                        <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                        <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                        <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                        <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                        <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                        <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                        <CardItem nft={Image} avatar={Avatar} name='Thenftmakers' username='Wasdoke1#61' current_price='4.45ETH' start_price='2.25ETH' reduce_price='2.00ETH' reduce_percent='+2.00%' />
                    </Flex>
                    <Flex $style={{ w: '100%', p: '32px 24px 24px' }}>
                        <Pagination />
                    </Flex>
                </NFTs>
            </Flex>
            <Options>
                <ItemContainer>
                    <Dropdown initialLabel='Filter' hideIcon customIcon={<Icon icon='Filter' />} />
                </ItemContainer>
                <Flex $style={{ fDirection: 'column', gap: '20px', w: '100%' }}>
                    <Flex $style={{ hAlign: 'space-between', w: '100%' }} onClick={() => setStatusOpen(!isStatusOpen)}>
                        <P $style={{ size: '20px', weight: '600' }}>Status</P>
                        {isStatusOpen ? <Icon icon='ChevronArrowRight' /> : <Icon icon='ChevronArrowDown' />}
                    </Flex>
                    {isStatusOpen && <Flex $style={{ fWrap: 'wrap', gap: '20px', w: '100%' }}>
                        <CustomTab isActive>All Collections</CustomTab>
                        <CustomTab>Live Auction</CustomTab>
                        <CustomTab>Not For Sale</CustomTab>
                        <CustomTab>Buy Now</CustomTab>
                    </Flex>}
                </Flex>
                <Flex $style={{ fDirection: 'column', gap: '20px', w: '100%' }}>
                    <Flex $style={{ hAlign: 'space-between', w: '100%' }} onClick={() => setPriceOpen(!isPriceOpen)}>
                        <P $style={{ size: '20px', weight: '600' }}>Price</P>
                        {isPriceOpen ? <Icon icon='ChevronArrowRight' /> : <Icon icon='ChevronArrowDown' />}
                    </Flex>
                    {isPriceOpen && <>
                    <Flex $style={{ fDirection: 'row', gap: '16px', vAlign: 'flex-end' }}>
                        <Input value='' placeholder='Min' padding='6px 12px' />
                        <Icon icon='ArrowRight' />
                        <Input value='' placeholder='Min' padding='6px 12px' />
                    </Flex>
                    <CustomButton>Submit</CustomButton></>}
                </Flex>
                <Flex $style={{ fDirection: 'column', gap: '20px', w: '100%' }}>
                    <Flex $style={{ hAlign: 'space-between', w: '100%' }} onClick={() => setPropertyOpen(!isPropertyOpen)}>
                        <P $style={{ size: '20px', weight: '600' }}>Properties</P>
                        {isPropertyOpen ? <Icon icon='ChevronArrowRight' /> : <Icon icon='ChevronArrowDown' />}
                    </Flex>
                    {isPropertyOpen && <Input value='' placeholder='Search properties' padding='6px 12px' helpSide={<Icon icon='Search' />} />}
                </Flex>
                <Flex $style={{ fDirection: 'column', gap: '16px', w: '100%' }}>
                    <Flex $style={{ hAlign: 'space-between', w: '100%' }} onClick={() => setClothOpen(!isClothOpen)}>
                        <P $style={{ size: '20px', weight: '600' }}>Clothes</P>
                        {isClothOpen ? <Icon icon='ChevronArrowRight' /> : <Icon icon='ChevronArrowDown' />}
                    </Flex>
                    {isClothOpen && <Flex $style={{ fDirection: 'column', gap: '12px' }}>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: '16px' }}>BlueDress</P>} />
                            <P $style={{ size: '16px' }}>42</P>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: '16px' }}>BlueDress</P>} />
                            <P $style={{ size: '16px' }}>42</P>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: '16px' }}>BlueDress</P>} />
                            <P $style={{ size: '16px' }}>42</P>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: '16px' }}>BlueDress</P>} />
                            <P $style={{ size: '16px' }}>42</P>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: '16px' }}>BlueDress</P>} />
                            <P $style={{ size: '16px' }}>42</P>
                        </Flex>
                    </Flex>}
                </Flex>
                <Flex $style={{ fDirection: 'column', gap: '16px', w: '100%' }}>
                    <Flex $style={{ hAlign: 'space-between', w: '100%' }} onClick={() => setHasOpen(!isHatOpen)}>
                        <P $style={{ size: '20px', weight: '600' }}>Hat</P>
                        {isHatOpen ? <Icon icon='ChevronArrowRight' /> : <Icon icon='ChevronArrowDown' />}
                    </Flex>
                    {isHatOpen && <Flex $style={{ fDirection: 'column', gap: '12px' }}>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: '16px' }}>BlueDress</P>} />
                            <P $style={{ size: '16px' }}>42</P>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: '16px' }}>BlueDress</P>} />
                            <P $style={{ size: '16px' }}>42</P>
                        </Flex>
                    </Flex>}
                </Flex>
                <Flex $style={{ fDirection: 'column', gap: '16px', w: '100%' }}>
                    <Flex $style={{ hAlign: 'space-between', w: '100%' }} onClick={() => setMouthOpen(!isMouthOpen)}>
                        <P $style={{ size: '20px', weight: '600' }}>Mouth</P>
                        {isMouthOpen ? <Icon icon='ChevronArrowRight' /> : <Icon icon='ChevronArrowDown' />}
                    </Flex>
                    {isMouthOpen && <Flex $style={{ fDirection: 'column', gap: '12px' }}>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: '16px' }}>BlueDress</P>} />
                            <P $style={{ size: '16px' }}>42</P>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: '16px' }}>BlueDress</P>} />
                            <P $style={{ size: '16px' }}>42</P>
                        </Flex>
                    </Flex>}
                </Flex>
                <Flex $style={{ fDirection: 'column', gap: '16px', w: '100%' }}>
                    <Flex $style={{ hAlign: 'space-between', w: '100%' }} onClick={() => setEyeOpen(!isEyesOpen)}>
                        <P $style={{ size: '20px', weight: '600' }}>Eyes</P>
                        {isEyesOpen ? <Icon icon='ChevronArrowRight' /> : <Icon icon='ChevronArrowDown' />}
                    </Flex>
                    {isEyesOpen && <Flex $style={{ fDirection: 'column', gap: '12px' }}>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: '16px' }}>BlueDress</P>} />
                            <P $style={{ size: '16px' }}>42</P>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: '16px' }}>BlueDress</P>} />
                            <P $style={{ size: '16px' }}>42</P>
                        </Flex>
                    </Flex>}
                </Flex>
                <Flex $style={{ fDirection: 'column', gap: '16px', w: '100%' }}>
                    <Flex $style={{ hAlign: 'space-between', w: '100%' }} onClick={() => setFurOpen(!isFurOpen)}>
                        <P $style={{ size: '20px', weight: '600' }}>Fur</P>
                        {isFurOpen ? <Icon icon='ChevronArrowRight' /> : <Icon icon='ChevronArrowDown' />}
                    </Flex>
                    {isFurOpen && <Flex $style={{ fDirection: 'column', gap: '12px' }}>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: '16px' }}>BlueDress</P>} />
                            <P $style={{ size: '16px' }}>42</P>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: '16px' }}>BlueDress</P>} />
                            <P $style={{ size: '16px' }}>42</P>
                        </Flex>
                    </Flex>}
                </Flex>
                <Flex $style={{ fDirection: 'column', gap: '16px', w: '100%' }}>
                    <Flex $style={{ hAlign: 'space-between', w: '100%' }} onClick={() => setBackgroundOpen(!isBackgroundOpen)}>
                        <P $style={{ size: '20px', weight: '600' }}>Background</P>
                        {isBackgroundOpen ? <Icon icon='ChevronArrowRight' /> : <Icon icon='ChevronArrowDown' />}
                    </Flex>
                    {isBackgroundOpen && <Flex $style={{ fDirection: 'column', gap: '12px' }}>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: '16px' }}>BlueDress</P>} />
                            <P $style={{ size: '16px' }}>42</P>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: '16px' }}>BlueDress</P>} />
                            <P $style={{ size: '16px' }}>42</P>
                        </Flex>
                    </Flex>}
                </Flex>
                <Flex $style={{ fDirection: 'column', gap: '16px', w: '100%' }}>
                    <Flex $style={{ hAlign: 'space-between', w: '100%' }} onClick={() => setGlassesOpen(!isGlassesOpen)}>
                        <P $style={{ size: '20px', weight: '600' }}>Glasses</P>
                        {isGlassesOpen ? <Icon icon='ChevronArrowRight' /> : <Icon icon='ChevronArrowDown' />}
                    </Flex>
                    {isGlassesOpen && <Flex $style={{ fDirection: 'column', gap: '12px' }}>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: '16px' }}>BlueDress</P>} />
                            <P $style={{ size: '16px' }}>42</P>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: '16px' }}>BlueDress</P>} />
                            <P $style={{ size: '16px' }}>42</P>
                        </Flex>
                    </Flex>}
                </Flex>
                <Flex $style={{ fDirection: 'column', gap: '16px', w: '100%' }}>
                    <Flex $style={{ hAlign: 'space-between', w: '100%' }} onClick={() => setEarningOpen(!isEarningOpen)}>
                        <P $style={{ size: '20px', weight: '600' }}>Earning</P>
                        {isEarningOpen ? <Icon icon='ChevronArrowRight' /> : <Icon icon='ChevronArrowDown' />}
                    </Flex>
                    {isEarningOpen && <Flex $style={{ fDirection: 'column', gap: '12px' }}>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: '16px' }}>BlueDress</P>} />
                            <P $style={{ size: '16px' }}>42</P>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: '16px' }}>BlueDress</P>} />
                            <P $style={{ size: '16px' }}>42</P>
                        </Flex>
                    </Flex>}
                </Flex>
            </Options>
        </Flex>
    </Container>
}

export default NFTCollections;
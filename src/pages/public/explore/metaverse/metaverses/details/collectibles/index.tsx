import { Flex, Grid, P } from '@/components/basic';
import React from 'react';
import { CollectiblesContainer, CustomButton, Eclipse, ItemContainer, NFTs, Options, Rect, TitleBar } from './style';
import TimeBar from '@/components/page/public/explore/timebar';
import StatusBar from '@/components/page/public/explore/statusbar';
import { Checkbox, Dropdown, Icon, Input } from '@/components/custom';
import NFT from '@/components/page/public/explore/nft';

import Image1 from '@/assets/img/metaverse/1.png';
import Image2 from '@/assets/img/metaverse/2.png';
import Image3 from '@/assets/img/metaverse/3.png';
import { CustomTab } from '../style';
import Pagination from '@/components/custom/pagination';
import SlideTab from '@/components/page/public/explore/slidetab';
import { GV } from '@/utils/style.util';

const Collectible = () => {
    const [isLive, setLive] = React.useState(false);

    return <CollectiblesContainer>
        <Rect />
        <Flex $style={{ w: '100%', vAlign: 'flex-start', gap: '26px', p: '0 0 32px' }}>
            <Flex $style={{ flex: '1', fDirection: 'column', gap: '32px', w: '100%'  }}>
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
                        <Grid $style={{
                            columns: '3',
                            gap: '16px',
                            queries: {
                                1024: {
                                    columns: '2'
                                }
                            }
                        }}>
                            <StatusBar title='Volume' number='439' right={<Icon icon='Info' />} percent='+34%' percent_color='#1FDD00' />
                            <StatusBar title='Traders' number='$20.99k' right={<Icon icon='Info' />} percent='-56.40%' percent_color='#E85051' />
                            <StatusBar title='Floor Price' number='1.37k' right={<Icon icon='Info' />} percent='+36.97%' percent_color='#1FDD00' />
                            <StatusBar title='Avg, Price' number='439' right={<Icon icon='Info' />} percent='+34%' percent_color='#1FDD00' />
                            <StatusBar title='Sales' number='$20.99k' right={<Icon icon='Info' />} percent='-56.40%' percent_color='#E85051' />
                            <StatusBar title='Market Cap.' number='1.37k' right={<Icon icon='Info' />} percent='+36.97%' percent_color='#1FDD00' />
                        </Grid>
                    </Flex>
                </TitleBar>
                <NFTs>
                    <Grid $style={{
                        columns: "3",
                        gap: "2rem",
                        queries: {
                            1024: {
                                columns: '2'
                            }
                        }
                    }}>
                        <NFT image={Image1} name='Mall Street' price='4.45ETH' network='MANA' usd='1500' />
                        <NFT image={Image2} name='Orange Amor' price='4.45ETH' network='MANA' usd='1500' />
                        <NFT image={Image3} name='Southam Lir...' price='4.45ETH' network='MANA' usd='1500' />
                        <NFT image={Image1} name='Mall Street' price='4.45ETH' network='MANA' usd='1500' />
                        <NFT image={Image2} name='Orange Amor' price='4.45ETH' network='MANA' usd='1500' />
                        <NFT image={Image3} name='Southam Lir...' price='4.45ETH' network='MANA' usd='1500' />
                        <NFT image={Image1} name='Mall Street' price='4.45ETH' network='MANA' usd='1500' />
                        <NFT image={Image2} name='Orange Amor' price='4.45ETH' network='MANA' usd='1500' />
                        <NFT image={Image3} name='Southam Lir...' price='4.45ETH' network='MANA' usd='1500' />
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
                    label='Status'
                >
                    <Flex $style={{ fWrap: 'wrap', gap: '20px', w: '100%' }}>
                        <CustomTab isActive>All Collections</CustomTab>
                        <CustomTab>Live Auction</CustomTab>
                        <CustomTab>Not For Sale</CustomTab>
                        <CustomTab>Buy Now</CustomTab>
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
                <SlideTab
                    label='Clothes'
                >
                    <Flex $style={{ fDirection: 'column', gap: '12px' }}>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: GV('font-size') }}>BlueDress</P>} />
                            <P $style={{ size: GV('font-size') }}>42</P>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: GV('font-size') }}>BlueDress</P>} />
                            <P $style={{ size: GV('font-size') }}>42</P>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: GV('font-size') }}>BlueDress</P>} />
                            <P $style={{ size: GV('font-size') }}>42</P>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: GV('font-size') }}>BlueDress</P>} />
                            <P $style={{ size: GV('font-size') }}>42</P>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: GV('font-size') }}>BlueDress</P>} />
                            <P $style={{ size: GV('font-size') }}>42</P>
                        </Flex>
                    </Flex>
                </SlideTab>
                <SlideTab
                    label='Hat'
                >
                    <Flex $style={{ fDirection: 'column', gap: '12px' }}>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: GV('font-size') }}>BlueDress</P>} />
                            <P $style={{ size: GV('font-size') }}>42</P>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: GV('font-size') }}>BlueDress</P>} />
                            <P $style={{ size: GV('font-size') }}>42</P>
                        </Flex>
                    </Flex>
                </SlideTab>
                <SlideTab
                    label='Mouth'
                >
                    <Flex $style={{ fDirection: 'column', gap: '12px' }}>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: GV('font-size') }}>BlueDress</P>} />
                            <P $style={{ size: GV('font-size') }}>42</P>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: GV('font-size') }}>BlueDress</P>} />
                            <P $style={{ size: GV('font-size') }}>42</P>
                        </Flex>
                    </Flex>
                </SlideTab>
                <SlideTab
                    label='Eyes'
                >
                    <Flex $style={{ fDirection: 'column', gap: '12px' }}>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: GV('font-size') }}>BlueDress</P>} />
                            <P $style={{ size: GV('font-size') }}>42</P>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: GV('font-size') }}>BlueDress</P>} />
                            <P $style={{ size: GV('font-size') }}>42</P>
                        </Flex>
                    </Flex>
                </SlideTab>
                <SlideTab
                    label='Fur'
                >
                    <Flex $style={{ fDirection: 'column', gap: '12px' }}>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: GV('font-size') }}>BlueDress</P>} />
                            <P $style={{ size: GV('font-size') }}>42</P>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: GV('font-size') }}>BlueDress</P>} />
                            <P $style={{ size: GV('font-size') }}>42</P>
                        </Flex>
                    </Flex>
                </SlideTab>
                <SlideTab
                    label='Background'
                >
                    <Flex $style={{ fDirection: 'column', gap: '12px' }}>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: GV('font-size') }}>BlueDress</P>} />
                            <P $style={{ size: GV('font-size') }}>42</P>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: GV('font-size') }}>BlueDress</P>} />
                            <P $style={{ size: GV('font-size') }}>42</P>
                        </Flex>
                    </Flex>
                </SlideTab>
                <SlideTab
                    label='Glasses'
                >
                    <Flex $style={{ fDirection: 'column', gap: '12px' }}>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: GV('font-size') }}>BlueDress</P>} />
                            <P $style={{ size: GV('font-size') }}>42</P>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: GV('font-size') }}>BlueDress</P>} />
                            <P $style={{ size: GV('font-size') }}>42</P>
                        </Flex>
                    </Flex>
                </SlideTab>
                <SlideTab
                    label='Earning'
                >
                    <Flex $style={{ fDirection: 'column', gap: '12px' }}>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: GV('font-size') }}>BlueDress</P>} />
                            <P $style={{ size: GV('font-size') }}>42</P>
                        </Flex>
                        <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                            <Checkbox width='20px' height='20px' label={<P $style={{ size: GV('font-size') }}>BlueDress</P>} />
                            <P $style={{ size: GV('font-size') }}>42</P>
                        </Flex>
                    </Flex>
                </SlideTab>
            </Options>
        </Flex>
    </CollectiblesContainer>
}

export default Collectible;
import React from 'react';
import { Flex, P } from '@/components/basic';
import { Activity, CircleIcon, NewsContainer, Sales, Similars, TitleBar, Transaction } from './style';
import TimeBar from '@/components/page/public/explore/timebar';
import StatusBar from '@/components/page/public/explore/statusbar';
import { Icon } from '@/components/custom';
import { GV } from '@/utils/style.util';
import AreaChartComponent from './Area';
import PieComponent from './Pie';
import { CustomButton } from './style';
import NFT from '@/components/page/public/explore/nft';
import NewsCard from '@/components/page/public/explore/news-card';
import Card from '@/components/page/public/explore/metaverse-card';

import Image1 from '@/assets/img/metaverse/1.png';
import Image2 from '@/assets/img/metaverse/2.png';
import Image3 from '@/assets/img/metaverse/3.png';
import Avatar1 from '@/assets/img/metaverse/avatar1.png';
import Icon1 from '@/assets/img/metaverse/mana.png';
import Icon2 from '@/assets/img/metaverse/ether.png';

const temp = [
    { name: 'Jan', volume: 85, uaw: 30 },
    { name: 'Feb', volume: 60, uaw: 45 },
    { name: 'Mar', volume: 9, uaw: 35 },
    { name: 'Apr', volume: 25, uaw: 32 },
    { name: 'May', volume: 40, uaw: 35 },
    { name: 'Jun', volume: 45, uaw: 45 },
    { name: 'Jul', volume: 30, uaw: 95 },
    { name: 'Aug', volume: 85, uaw: 50 },
    { name: 'Sep', volume: 15, uaw: 22 },
    { name: 'Oct', volume: 20, uaw: 17 },
    { name: 'Nov', volume: 40, uaw: 20 },
    { name: 'Dec', volume: 70, uaw: 45 }
]

const percent = [
    { name: 'outflow', value: 22 },
    { name: 'inflow', value: 61 },
    { name: 'everyday', value: 17 },
]

const Overview = () => {
    return <Flex $style={{ fDirection: 'column', gap: '32px' }}>
        <Flex $style={{ gap: '26px' }}>
            <Flex $style={{ fDirection: 'column', gap: '32px' }}>
                <TitleBar>
                    <Flex $style={{ fDirection: 'column', w: '100%', gap: '20px' }}>
                        <P $style={{ size: '32px', weight: '600' }}>Decentraland Stat</P>
                        <Flex $style={{ w: '500px' }}>
                            <TimeBar />
                        </Flex>
                        <Flex $style={{ w: '100%', hAlign: 'space-between', gap: '16px' }}>
                            <StatusBar title='UAW' number='439' right={<Icon  icon='Info'/>} percent='+34%' percent_color='#1FDD00' />
                            <StatusBar title='Volume' number='$20.99k' right={<Icon  icon='Info'/>} percent='-56.40%' percent_color='#E85051' />
                            <StatusBar title='Transactions' number='1.37k' right={<Icon  icon='Info'/>} percent='+36.97%' percent_color='#1FDD00' />
                            <StatusBar title='Balance' number='$30.23M' right={<Icon  icon='Info'/>} percent='+3.97%' percent_color='#1FDD00' />
                        </Flex>
                    </Flex>
                </TitleBar>
                <Activity>
                    <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                        <P $style={{ size: '32px', weight: '600' }}>Market Activities</P>
                        <Icon icon='Zoom' />
                    </Flex>
                    <Flex $style={{ hAlign: 'flex-end', gap: '24px', w: '100%' }}>
                        <Flex $style={{ gap: '12px' }}>
                            <CircleIcon color={GV('purple')} />
                            <P>Volume</P>
                        </Flex>
                        <Flex $style={{ gap: '12px' }}>
                            <CircleIcon color={GV('blue')} />
                            <P>UAW</P>
                        </Flex>
                    </Flex>
                    <AreaChartComponent data={temp} />
                </Activity>
                <Transaction>
                    <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                        <P $style={{ size: '32px', weight: '600' }}>Wallet Transactions</P>
                        <Icon icon='Zoom' />
                    </Flex>
                    <Flex $style={{ vAlign: 'center', gap: '200px' }}>
                        <PieComponent data={percent} />
                        <Flex $style={{ fDirection: 'column', gap: '20px' }}>
                            <Flex $style={{ gap: '12px' }}>
                                <CircleIcon color={GV('purple')} />
                                <P>Overflow - 22%</P>
                            </Flex>
                            <Flex $style={{ gap: '12px' }}>
                                <CircleIcon color={GV('blue')} />
                                <P>Inflow - 61%</P>
                            </Flex>
                            <Flex $style={{ gap: '12px' }}>
                                <CircleIcon color={GV('blue')} />
                                <P>Everyday users - 17%</P>
                            </Flex>
                        </Flex>
                    </Flex>
                </Transaction>
                <Sales>
                    <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                        <P $style={{ size: '32px', weight: '600' }}>Top 3 Sales</P>
                        <CustomButton><P>View more</P></CustomButton>
                    </Flex>
                    <Flex $style={{ gap: '32px' }}>
                        <NFT image={Image1} name='Mall Street' price='4.45ETH' network='MANA' usd='1500' isCount />
                        <NFT image={Image2} name='Orange Amor' price='4.45ETH' network='MANA' usd='1500' />
                        <NFT image={Image3} name='Southam Lir...' price='4.45ETH' network='MANA' usd='1500' />
                    </Flex>
                </Sales>
            </Flex>
            <NewsContainer>
                <Flex $style={{ w: '100%' }}>
                    <P $style={{ size: '32px', weight: '600' }}>Decentraland News</P>
                </Flex>
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <Flex $style={{ w: '100%', hAlign: 'flex-end' }}>
                    <CustomButton>View more news</CustomButton>
                </Flex>
            </NewsContainer>
        </Flex>
        <Similars>
            <Flex $style={{ w: '100%', hAlign: 'space-between' }}>
                <P $style={{ size: '32px', weight: '600' }}>Similar Metaverses</P>
                <CustomButton>View more news</CustomButton>
            </Flex>
            <Flex $style={{ gap: '32px' }}>
                <Card image={Image1} title='Illuvium' avatar={Avatar1} icon1={Icon1} icon2={Icon2} />
                <Card image={Image2} title='Illuvium' avatar={Avatar1} icon1={Icon1} icon2={Icon2} />
                <Card image={Image3} title='Illuvium' avatar={Avatar1} icon1={Icon1} icon2={Icon2} />
                <Card image={Image1} title='Illuvium' avatar={Avatar1} icon1={Icon1} icon2={Icon2} />
            </Flex>
        </Similars>
    </Flex>
}

export default Overview;
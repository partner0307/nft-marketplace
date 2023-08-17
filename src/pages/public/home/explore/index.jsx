import React from 'react';
import { Content, ContentColor, ExploreContainer, TabButton } from './style';
import { Flex, Heading, P, Span } from '@/components/basic';
import { Button, Icon } from '@/components/custom';
import { GV } from '@/utils/style.util';
import Table from '@/components/custom/table';

const Explore = () => {
    return <ExploreContainer>
        <Flex $style={{
            fDirection: 'column',
            vAlign: 'center',
            gap: '32px'
        }}>
            <Heading level={3}><Content>Explore The Marketplace</Content></Heading>
            <Flex $style={{ maxW: '700px' }}>
                <P $style={{ size: '20px', align: 'center' }}>Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis </P>
            </Flex>
        </Flex>
        <Flex $style={{
            fDirection: 'column',
            hAlign: 'flex-start',
            gap: '8px'
        }}>
            <Flex $style={{
                fDirection: 'row',
                gap: '20px'
            }}>
                <TabButton isSelected={true}>Metaverses</TabButton>
                <TabButton isSelected={false}>NFTs</TabButton>
                <TabButton isSelected={false}>DApps</TabButton>
                <TabButton isSelected={false}>Blockchains</TabButton>
            </Flex>
            <Flex $style={{
                fDirection: 'column',
                p: '24px 0 0',
                gap: '4px'
            }}>

                <Table />
                {/* <Flex $style={{
                    fDirection: 'row',
                    p: '0 24px',
                    gap: '16px'
                }}>
                    <Flex $style={{
                        fDirection: 'row',
                        hAlign: 'flex-start',
                        p: '0 250px 0 0'
                    }}>
                        <Span><ContentColor>Name</ContentColor></Span>
                        <Icon icon='Sort' />
                    </Flex>
                    <Flex $style={{
                        fDirection: 'row',
                        hAlign: 'flex-start',
                    }}>
                        <Span><ContentColor>Balance</ContentColor></Span>
                        <Icon icon='Sort' />
                        <Icon icon='Info' />
                    </Flex>
                    <Flex $style={{
                        fDirection: 'row',
                        hAlign: 'flex-start',
                    }}>
                        <Span><ContentColor>Uaw</ContentColor></Span>
                        <Icon icon='Sort' />
                        <Icon icon='Info' />
                    </Flex>
                    <Flex $style={{
                        fDirection: 'row',
                        hAlign: 'flex-start',
                    }}>
                        <Span><ContentColor>%Uaw</ContentColor></Span>
                        <Icon icon='Sort' />
                        <Icon icon='Info' />
                    </Flex>
                    <Flex $style={{
                        fDirection: 'row',
                        hAlign: 'flex-start',
                    }}>
                        <Span><ContentColor>Volume</ContentColor></Span>
                        <Icon icon='Sort' />
                        <Icon icon='Info' />
                    </Flex>
                    <Flex $style={{
                        fDirection: 'row',
                        hAlign: 'flex-start',
                    }}>
                        <Span><ContentColor>%Volume</ContentColor></Span>
                        <Icon icon='Sort' />
                        <Icon icon='Info' />
                    </Flex>
                    <Flex $style={{
                        fDirection: 'row',
                        hAlign: 'flex-start',
                    }}>
                        <Span><ContentColor>24H Uaw</ContentColor></Span>
                        <Icon icon='Sort' />
                        <Icon icon='Info' />
                    </Flex>
                </Flex> */}
            </Flex>
        </Flex>
        <Button $style={{
            bg: GV('gradient'),
            radius: '4px',
            p: '8px 64px'
        }}>View All Marketplace</Button>
    </ExploreContainer>
}

export default Explore;
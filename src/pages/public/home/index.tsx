import React from "react";
import { Flex, Heading, P } from "../../../components/basic";
import { HomeContainer, Rect } from "./style";
import { Button } from "../../../components/custom";
import { GV } from "../../../utils/style.util";
import Screen1 from '../../../assets/img/screen.png';

const LandingPage = () => {
    return (
        <HomeContainer>
            <Flex $style={{
                fDirection: 'column',
                gap: '-50px',
                hAlign: 'center',
                vAlign: 'center'
            }}>
                <Flex $style={{
                    fDirection: 'column',
                    vAlign: 'center',
                    gap: '1rem'
                }}>
                    <Heading level={3} $style={{
                        txtTransform: 'uppercase'
                    }}>All metaverses</Heading>
                    <Heading level={3} $style={{
                        txtTransform: 'uppercase'
                    }}>at one place</Heading>
                </Flex>
                <Flex $style={{
                    fDirection: 'column',
                    hAlign: 'flex-end',
                    vAlign: 'center',
                    gap: '-9px',
                    flex: '1 0 0'
                }}>
                    <Button $style={{
                        w: '366px',
                        h: '72px',
                        p: '0 24px',
                        bg: GV('gradient'),
                        radius: '8px',
                    }}>
                            <P $style={{
                                size: '20px'
                            }}>See Full Metaverse</P>
                    </Button>
                    <Rect />
                    <Flex>
                        <img src={Screen1} alt="" />
                    </Flex>
                </Flex>
            </Flex>
        </HomeContainer>
    )
}

export default LandingPage;

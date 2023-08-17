import React from "react";
import { ContentColor, FooterContainer, FooterWrapper, Line } from "./style";
import Flex from "../../basic/flex";
import List, { ListItem } from "../../basic/list";
import { GV } from "../../../utils/style.util";
import { P, Span } from "../../basic/text";
import Icon from "../../custom/icon";
import Link from "../../basic/link";

import Logo from '../../../assets/img/logo.png';
import Map from '../../../assets/img/sitemap.png'

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContainer>
                <Flex
                    $style={{
                        fDirection: "column",
                        gap: "2.5rem"
                    }}
                >
                    <Flex
                        $style={{
                            hAlign: 'space-between',
                            w: "100%",
                            queries: {
                                768: {
                                    fDirection: "column",
                                    gap: "2rem"
                                }
                            }
                        }}
                    >
                        <Flex $style={{ fDirection: 'column', vAlign: 'flex-start', maxW: '260px', gap: '30px' }}>
                            <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '24px' }}>
                                <img src={Logo} alt="" />
                                <Icon icon="Logo" />
                            </Flex>
                            <P $style={{ size: '16px' }}>Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget  lacus, ut interdum tellus elit sed risus. Maecenas eget lacus, ut interdum tellus elit sed risus. Maecenas eget </P>
                        </Flex>
                        <Flex $style={{
                            fDirection: 'row',
                            hAlign: 'space-between',
                            w: '700px'
                        }}>
                            <Flex $style={{ fDirection: "column", gap: "0.7rem" }}>
                                <P $style={{ size: '20px' }}><ContentColor>EXPLORE</ContentColor></P>
                                <List dir="column" gap="0.5rem">
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>Buy Metaverse</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>3D Spaces</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>Avatars</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>Spaces</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>NFTs</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>Start Building</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>Marketplace</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>Academy</Link>
                                    </ListItem>
                                </List>
                            </Flex>
                            <Flex $style={{ fDirection: "column", gap: "0.7rem" }}>
                                <P $style={{ size: '20px' }}><ContentColor>ABOUT</ContentColor></P>
                                <List dir="column" gap="0.5rem">
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>What we do</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>Metaverse News</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>Web3 News</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>AI Blogs</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>Web3 Community</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>Careers</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>Contact us</Link>
                                    </ListItem>
                                </List>
                            </Flex>
                            <Flex $style={{ fDirection: "column", gap: "0.7rem" }}>
                                <P $style={{ size: '20px' }}><ContentColor>HIRE TALENT</ContentColor></P>
                                <List dir="column" gap="0.5rem">
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>Designers</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>Developers</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>NFT Creators</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>Modelers</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>Content Writers</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>Managers</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>AI Experts</Link>
                                    </ListItem>
                                </List>
                            </Flex>
                            <Flex $style={{ fDirection: "column", gap: "0.7rem" }}>
                                <P $style={{ size: '20px' }}><ContentColor>NAVIGATE TO</ContentColor></P>
                                <List dir="column" gap="0.5rem">
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>Sign in</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>Privacy Policy</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>Terms of Use</Link>
                                    </ListItem>
                                    <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                        <Link to={""}>Site Map:</Link>
                                    </ListItem>
                                    <ListItem hideDot>
                                        <img src={Map} alt="" />
                                    </ListItem>
                                </List>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex
                        $style={{
                            hAlign: "flex-start",
                            maxW: '1440px',
                            w: '100%',
                            queries: {
                                768: {
                                    fDirection: "column",
                                    hAlign: "center",
                                    vAlign: "center",
                                    gap: "1rem"
                                }
                            }
                        }}
                    >
                        <Flex $style={{ 
                            fDirection: 'column',
                            gap: '12px',
                            vAlign: 'flex-start'
                        }}>
                            <P $style={{ size: '20px', weight: '600' }}>Join the Community</P>
                            <Flex $style={{
                                fDirection: 'row',
                                gap: '24px'
                            }}>
                                <Link to="#">
                                    <Icon icon="FaceBook" />
                                </Link>
                                <Link to="#">
                                    <Icon icon="Instagram" />
                                </Link>
                                <Link to="#">
                                    <Icon icon="Twitter" />
                                </Link>
                                <Link to="#">
                                    <Icon icon="Github" />
                                </Link>
                                <Link to="#">
                                    <Icon icon="Phone" />
                                </Link>
                                <Link to="#">
                                    <Icon icon="Youtube" />
                                </Link>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Line />
                    <Flex $style={{
                        fDirection: 'row',
                        hAlign: 'space-between',
                        p: '0 0 75px 0'
                    }}>
                        <Span $style={{ size: '12px', weight: '700' }}>© 2023 MetaverseDeployment. All rights reserved.</Span>
                        <Flex $style={{
                            fDirection: 'row',
                            gap: '64px'
                        }}>
                            <Span $style={{ size: '12px', weight: '700' }}>Privacy Policy</Span>
                            <Span $style={{ size: '12px', weight: '700' }}>Term of Service</Span>
                        </Flex>
                    </Flex>
                </Flex>
            </FooterContainer>
        </FooterWrapper>
    )
}

export default Footer;

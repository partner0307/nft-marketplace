import React from 'react';
import { CustomButton, IconWrapper, ImageComponent, NFTContainer, StateBar } from './style';
import { Flex, P } from '@/components/basic';
import Ether from '@/assets/img/ether-icon.png';
import Polygon from '@/assets/img/metaverse/polygon.png';
import Image from '@/components/basic/img';

type NFTType = {
    image?: string
    name?: string
    price?: string
    network?: string
    usd?: string
    isCount?: boolean
}

const NFT: React.FC<NFTType> = ({ image, name, price, network, usd, isCount }) => {
    return <NFTContainer>
        <Flex $style={{ fDirection: 'column', gap: '14px' }}>
            <Image src={image || ""} alt='' h='15.18456rem' />
            <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
                <P $style={{ size: '20px', color: 'info' }}>{name}</P>
                <Flex $style={{ gap: '2px' }}>
                    <IconWrapper>
                        <img src={Ether} alt="" width='100%' />
                    </IconWrapper>
                    <IconWrapper>
                        <img src={Polygon} alt="" width='100%' />
                    </IconWrapper>
                </Flex>
            </Flex>
            <StateBar>
                <Flex $style={{ fDirection: 'column', gap: '4px' }}>
                    <P $style={{ weight: '600' }}>{price}</P>
                    <P $style={{ size: '10px' }}>{network}</P>
                </Flex>
                <Flex $style={{ fDirection: 'column', gap: '4px' }}>
                    <P $style={{ weight: '600' }}>{usd}</P>
                    <P $style={{ size: '10px', color: 'purple' }}>USD</P>
                </Flex>
                {isCount && <CustomButton><P>8 Land(s)</P></CustomButton>}
            </StateBar>
        </Flex>
    </NFTContainer>
}

export default NFT;
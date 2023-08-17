import React from 'react';
import { BuilderContainer, BuilderIcon, BuilderImage, DescriptionWrapper, IconContainer } from './style';
import { Flex, P } from '../../../../basic';
import { Icon } from '../../../../custom';

type BuilderType = {
    image?: string,
    icon?: string,
    title?: string,
}

const Builder: React.FC<BuilderType> = ({ image, icon, title }) => {
    return <BuilderContainer>
        <Flex $style={{ fDirection: 'column' }}>
            <BuilderImage src={image} />
            <DescriptionWrapper>
                <Flex $style={{ fDirection: 'row', vAlign: 'center', gap: '18px' }}>
                    <BuilderIcon src={icon} />
                    <P $style={{ size: '32px', weight: '600' }}>{title}</P>
                </Flex>
                <P $style={{ size: '16px' }}>With Metaverse Estates, you have the power to design, customize, and inhabit your dream home in the metaverse. Want a castle in the clouds or a beachfront villa surrounded by digital waves....</P>
            </DescriptionWrapper>
        </Flex>
        <IconContainer><Icon icon='Zoom' /></IconContainer>
    </BuilderContainer>
}

export default Builder;
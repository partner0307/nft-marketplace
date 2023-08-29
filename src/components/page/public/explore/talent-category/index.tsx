import React from 'react';
import { AvatarContainer, Devider, RateContainer, TalentCategoryContainer, TalentCounter } from './style';
import { Flex, P } from '@/components/basic';
import { Icon } from '@/components/custom';

import Image from '@/assets/img/avatar1.png';

type TalentCategoryType = {
    name?: string,
    rate?: number,
    like?: number,
    counts?: number
}

const TalentCategory: React.FC<TalentCategoryType> = ({ name, rate, like, counts }) => {
    return (
        <TalentCategoryContainer>
            <P $style={{ size: '1.25rem' }}>{name}</P>
            <RateContainer>
                <Icon icon='Star' />
                <P $style={{ color: 'gray-100' }}>{rate}</P>
                <Devider />
                <P $style={{ color: 'gray-100' }}>{like}</P>
            </RateContainer>
            <Flex $style={{ gap: '-0.9375rem' }}>
                <AvatarContainer src={Image} isFirst />
                <AvatarContainer src={Image} />
                <AvatarContainer src={Image} />
                <TalentCounter>{counts} Talents</TalentCounter>
            </Flex>
        </TalentCategoryContainer>
    )
}

export default TalentCategory;
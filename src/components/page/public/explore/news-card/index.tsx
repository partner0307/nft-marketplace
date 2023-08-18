import React from 'react';
import { NewsCardContainer, NewsImage } from './style';

import Image from '@/assets/img/avatar1.png';
import { Flex, P, Span } from '@/components/basic';
import { Icon } from '@/components/custom';

const NewsCard = () => {
    return <NewsCardContainer>
        <NewsImage src={Image} />
        <P $style={{ size: '32px', weight: '900' }}>BBC host Asia verse on Decentraland th...</P>
        <P $style={{ size: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, entum tellus...</P>
        <Flex
            $style={{
                fDirection: "row",
                hAlign: "flex-start",
                gap: "30px",
            }}
            >
            <Span $style={{ size: "10px" }}>2mins Read</Span>
            <Flex
                $style={{
                fDirection: "row",
                hAlign: "center",
                gap: "8px",
                }}
            >
                <Icon icon="HeartBrown" />
                <Span $style={{ size: "10px" }}>28</Span>
            </Flex>
            <Flex
                $style={{
                fDirection: "row",
                hAlign: "center",
                gap: "8px",
                }}
            >
                <Icon icon="Share" />
                <Span $style={{ size: "10px" }}>72</Span>
            </Flex>
            <Icon icon="Bookmark" />
        </Flex>
    </NewsCardContainer>
}

export default NewsCard;
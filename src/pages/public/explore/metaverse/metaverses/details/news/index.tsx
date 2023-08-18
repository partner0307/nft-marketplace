import React from 'react';
import { NewsContainer, Rect } from './style';
import { Flex, P } from '@/components/basic';
import NewsCard from '@/components/page/public/explore/news-card';
import Pagination from '@/components/custom/pagination';

const News = () => {
    return <NewsContainer>
        <P $style={{ size: '32px', weight: '600' }}>Decentraland News</P>
        <Flex $style={{ fDirection: 'row', fWrap: 'wrap', w: '100%', hAlign: 'space-between', gap: '32px' }}>
            <NewsCard width='419px' />
            <NewsCard width='419px' />
            <NewsCard width='419px' />
            <NewsCard width='419px' />
            <NewsCard width='419px' />
            <NewsCard width='419px' />
            <NewsCard width='419px' />
            <NewsCard width='419px' />
            <NewsCard width='419px' />
        </Flex>
        <Pagination />
        <Rect />
    </NewsContainer>
}

export default News;
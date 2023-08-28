import React from 'react';
import { NewsContainer, Rect } from './style';
import { Flex, Grid, P } from '@/components/basic';
import NewsCard from '@/components/page/public/explore/news-card';
import Pagination from '@/components/custom/pagination';

const News = () => {
    return <NewsContainer>
        <Rect />
        <P $style={{ size: '32px', weight: '600' }}>Decentraland News</P>
        <Grid $style={{ columns: '3', gap: '32px', w: '100%' }}>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </Grid>
        <Pagination />
    </NewsContainer>
}

export default News;
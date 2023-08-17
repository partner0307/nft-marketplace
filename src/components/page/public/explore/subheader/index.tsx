import React from 'react';
import { SubHeaderContainer } from './style';
import { Heading, P } from '../../../../basic';

const SubHeader = () => {
    return <SubHeaderContainer>
        <Heading level={3} $style={{ weight: '500' }}>Top Metaverses</Heading>
    </SubHeaderContainer>
}

export default SubHeader;
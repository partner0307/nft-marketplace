import React, { useState } from 'react';
import { CustomDropdown, EcommerceContainer } from './style';
import { Flex, P } from '@/components/basic';
import { Dropdown, Icon, Input } from '@/components/custom';
import EcommerceMenu from '@/components/page/public/explore/ecommerce-menu';

const Ecommerce = () => {
    return <EcommerceContainer>
    <Flex $style={{ hAlign: 'space-between', vAlign: 'center', w: '100%' }}>
        <P $style={{ size: '32px', weight: '700' }}>Ecommerce</P>
        <Flex $style={{ gap: '12px', vAlign: 'center' }}>
            <Input value='' placeholder='Search...' padding='6px 12px' helpSide={<Icon icon='Search' />} />
            <CustomDropdown>
                <Dropdown initialLabel='Newly Listed' />
            </CustomDropdown>
        </Flex>
    </Flex>
    <Flex $style={{ gap: '32px' }}>
        <EcommerceMenu />
    </Flex>
</EcommerceContainer>
}

export default Ecommerce;
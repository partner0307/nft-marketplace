import { Flex, P } from '@/components/basic';
import { Icon, Input, Textarea } from '@/components/custom';
import React from 'react';
import { CustomColor, CustomTab } from './style';

import ContractActive from '@/assets/img/contract-active.png';
import ContractInActive from '@/assets/img/contract-inactive.png';
import LocationActive from '@/assets/img/location-active.png';
import LocationInActive from '@/assets/img/location-inactive.png';
import Contact from './contact';
import Tour from './tour';


const Appoinment = () => {
    const [tabIndex, setTabIndex] = React.useState(1);

    return <Flex $style={{ fDirection: 'column', gap: '48px' }}>
        <Flex $style={{ gap: '32px', w: '100%' }}>
            <CustomTab onClick={() => setTabIndex(1)}>
                <img src={tabIndex === 1 ? ContractActive : ContractInActive} alt="" />
                <P $style={{ size: '20px', weight: '600' }}><CustomColor color={tabIndex === 2}>Contact Agent</CustomColor></P>
            </CustomTab>
            <CustomTab onClick={() => setTabIndex(2)}>
                <img src={tabIndex === 2 ? LocationActive : LocationInActive} alt="" />
                <P $style={{ size: '20px', weight: '600' }}><CustomColor color={tabIndex === 1}>Take A Tour With Agent</CustomColor></P>
            </CustomTab>
        </Flex>
        {tabIndex === 1 && <Contact />}
        {tabIndex === 2 && <Tour />}
    </Flex>
}

export default Appoinment;
import { Flex, P } from '@/components/basic';
import { Icon, Input, Textarea } from '@/components/custom';
import React from 'react';
import { BookButton, ProfileAvatar, ProfileCard } from './style';

import Avatar from '@/assets/img/avatar1.png';

const Contact = () => {
    return <Flex $style={{ gap: '32px' }}>
    <Flex $style={{ fDirection: 'column', gap: '32px', flex: '1' }}>
        <Flex $style={{ gap: '32px'}}>
            <Input value='' padding='16px' radius='16px' helpSide={<Icon icon='User' />} placeholder='First Name' />
            <Input value='' padding='16px' radius='16px' helpSide={<Icon icon='User' />} placeholder='Last Name' />
        </Flex>
        <Flex $style={{ gap: '32px'}}>
            <Input value='' padding='16px' radius='16px' helpSide={<Icon icon='User' />} placeholder='Phone Number' />
            <Input value='' padding='16px' radius='16px' helpSide={<Icon icon='User' />} placeholder='Email' />
        </Flex>
        <Textarea value='' padding='16px' radius='16px' placeholder='Your message here' />
    </Flex>
    <Flex $style={{ fDirection: 'column', gap: '32px', maxW: '200px' }}>
        <ProfileCard>
            <ProfileAvatar src={Avatar} />
            <P $style={{ size: '20px', weight: '600' }}>Edward Madarki</P>
            <P $style={{ size: '16px' }}>info@metaverse.com</P>
        </ProfileCard>
        <BookButton>Book Appointment</BookButton>
    </Flex>
</Flex>
}

export default Contact;
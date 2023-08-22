import React from 'react';
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Flex, P } from '@/components/basic';
import { Icon, Input, Textarea } from '@/components/custom';
import { CustomButton, ProfileAvatar, ProfileCard } from './style';

import Avatar from '@/assets/img/avatar1.png';

const Tour = () => {
    return (
        <Flex $style={{ gap: '24px', vAlign: 'flex-end' }}>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: 'title',
                    center: '',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                initialView="dayGridMonth"
                editable={false}
                selectable={true}
                dayMaxEvents={true}
            />
            <Flex $style={{ fDirection: 'column', gap: '20px' }}>
                <Input value='' padding='16px' helpSide={<Icon icon='User' />} placeholder='Tour day' />
                <Input value='' padding='16px' helpSide={<Icon icon='User' />} placeholder='Time' />
                <Textarea value='' padding='16px' helpSide={<Icon icon='User' />} placeholder='Additional note' rows={2} />
                <Flex $style={{ gap: '20px' }}>
                    <ProfileCard>
                        <ProfileAvatar src={Avatar} />
                        <Flex $style={{ fDirection: 'column', gap: '4px' }}>
                            <P $style={{ size: '20px', weight: '600' }}>Edward Madarki</P>
                            <P $style={{ size: '16px' }}>Edward Madarki</P>
                        </Flex>
                    </ProfileCard>
                    <CustomButton>Submit</CustomButton>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Tour;
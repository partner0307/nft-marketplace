import React from 'react';
import { Avatar, CommentContainer, CustomButton, ItemContainer, Line, Rect } from './style';
import { Flex, P } from '@/components/basic';
import { Dropdown, Icon, Input } from '@/components/custom';

import Image from '@/assets/img/avatar1.png';
import CommentComponent from '@/components/page/public/explore/comment';

const Comment = () => {
    return <CommentContainer>
        <Flex $style={{ fDirection: 'column', gap: '20px', w: '100%', maxW: '900px' }}>
            <Flex $style={{ hAlign: 'space-between', w: '100%' }}>
                <P $style={{ size: '20px' }}>3,6760 Comments</P>
                <ItemContainer max='200px'>
                    <Dropdown initialLabel='Filter' hideIcon customIcon={<Icon icon='Filter' />} />
                </ItemContainer>
            </Flex>
            <Line />
            <Flex $style={{ vAlign: 'center', gap: '16px' }}>
                <Avatar src={Image} />
                <P $style={{ size: '20px' }}>Tunde_K678</P>
                <Input value='' placeholder='Type something...' radius='12px' helpSide={<Icon icon='BigSmile' />} />
                <CustomButton>Post<Icon icon='Send' /></CustomButton>
            </Flex>
            <Flex $style={{ fDirection: 'column', p: '24px', gap: '32px' }}>
                <CommentComponent image={Image} name='Tunde Kelani678' date='2 weeks ago(edited)' content="🎮🌌 Just had the most mind-blowing experience exploring #DecentralandMetaverse! 😱🌈 Stepping into this virtual wonderland felt like a journey to another dimension! 🚀💫🌳🏰 The landscapes were jaw-dropping, and the creativity of fellow users left me in awe. 🤩🎨 From art installations to incredible events, there's always something exciting happening here! 🎉🤯" like_count='1.5k' unlike_count='1.5k' reply_count='14' />
                <CommentComponent image={Image} name='Tunde Kelani678' date='2 weeks ago(edited)' content="🎮🌌 Just had the most mind-blowing experience exploring #DecentralandMetaverse! 😱🌈 Stepping into this virtual wonderland felt like a journey to another dimension! 🚀💫🌳🏰 The landscapes were jaw-dropping, and the creativity of fellow users left me in awe. 🤩🎨 From art installations to incredible events, there's always something exciting happening here! 🎉🤯" like_count='1.5k' unlike_count='1.5k' reply_count='14' />
                <CommentComponent image={Image} name='Tunde Kelani678' date='2 weeks ago(edited)' content="🎮🌌 Just had the most mind-blowing experience exploring #DecentralandMetaverse! 😱🌈 Stepping into this virtual wonderland felt like a journey to another dimension! 🚀💫🌳🏰 The landscapes were jaw-dropping, and the creativity of fellow users left me in awe. 🤩🎨 From art installations to incredible events, there's always something exciting happening here! 🎉🤯" like_count='1.5k' unlike_count='1.5k' reply_count='14' />
                <CommentComponent image={Image} name='Tunde Kelani678' date='2 weeks ago(edited)' content="🎮🌌 Just had the most mind-blowing experience exploring #DecentralandMetaverse! 😱🌈 Stepping into this virtual wonderland felt like a journey to another dimension! 🚀💫🌳🏰 The landscapes were jaw-dropping, and the creativity of fellow users left me in awe. 🤩🎨 From art installations to incredible events, there's always something exciting happening here! 🎉🤯" like_count='1.5k' unlike_count='1.5k' reply_count='14' />
                <CommentComponent image={Image} name='Tunde Kelani678' date='2 weeks ago(edited)' content="🎮🌌 Just had the most mind-blowing experience exploring #DecentralandMetaverse! 😱🌈 Stepping into this virtual wonderland felt like a journey to another dimension! 🚀💫🌳🏰 The landscapes were jaw-dropping, and the creativity of fellow users left me in awe. 🤩🎨 From art installations to incredible events, there's always something exciting happening here! 🎉🤯" like_count='1.5k' unlike_count='1.5k' reply_count='14' />
                <CommentComponent image={Image} name='Tunde Kelani678' date='2 weeks ago(edited)' content="🎮🌌 Just had the most mind-blowing experience exploring #DecentralandMetaverse! 😱🌈 Stepping into this virtual wonderland felt like a journey to another dimension! 🚀💫🌳🏰 The landscapes were jaw-dropping, and the creativity of fellow users left me in awe. 🤩🎨 From art installations to incredible events, there's always something exciting happening here! 🎉🤯" like_count='1.5k' unlike_count='1.5k' reply_count='14' />
                <CommentComponent image={Image} name='Tunde Kelani678' date='2 weeks ago(edited)' content="🎮🌌 Just had the most mind-blowing experience exploring #DecentralandMetaverse! 😱🌈 Stepping into this virtual wonderland felt like a journey to another dimension! 🚀💫🌳🏰 The landscapes were jaw-dropping, and the creativity of fellow users left me in awe. 🤩🎨 From art installations to incredible events, there's always something exciting happening here! 🎉🤯" like_count='1.5k' unlike_count='1.5k' reply_count='14' />
            </Flex>
        </Flex>
        <Rect />
    </CommentContainer>
}

export default Comment;
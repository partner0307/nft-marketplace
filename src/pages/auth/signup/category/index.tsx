import React, { useEffect, useState } from 'react';
import { AuthForm, BackButton, CustomFont1, Divider, Item, ItemContainer, ItemList, RadioContainer, SubmitButton } from './style';
import { Flex, P } from '@/components/basic';
import { Link, useNavigate } from 'react-router-dom';
import _ROUTERS from '@/constants/route.constant';
import { talent_type, software_list } from '@/constants/mockup/tablents';
import { Checkbox, Icon, RadioButton } from '@/components/custom';
import { routerer } from '@/utils/util';
import { GV } from '@/utils/style.util';

const Category = () => {
    const [checkedList, setCheckedList] = useState<boolean[]>(new Array(talent_type.length).fill(false));
    const [virtualWorld, setVirtualWorld] = useState(0);

    const navigate = useNavigate();

    const set = (index: number) => {
        let tempList = [...checkedList];
        tempList[index] = !tempList[index];
        setCheckedList(tempList);
    }

    useEffect(() => {
        set(0);
    }, []);

    const handleContinue = () => {
        navigate(routerer('_SIGNUP', '_VERIFY_ENAIL'));
    }

    return (
        <AuthForm>
            <Flex $style={{ fDirection: 'column', gap: '0.75rem', w: '100%' }}>
                <P $style={{ size: GV('font-size-2'), weight: GV('weight-xl'), align: 'center' }}>YOU ARE ALMOST THERE</P>
                <P $style={{ size: GV('font-size-3'), align: 'center' }}>Please fill out the rest information.</P>
            </Flex>
            <Divider />
            <Flex $style={{ fDirection: 'column', gap: '0.75rem' }}>
                <P $style={{ size: GV('font-size-2') }}>Please select talent type</P>
                <ItemList>
                    {talent_type.map((category, index) => (
                        <Item key={index} onClick={() => {set(index)}}>
                            <Checkbox label={category} />
                        </Item>
                    ))}
                </ItemList>
            </Flex>
            <Divider />
            <Flex $style={{ fDirection: 'column', gap: '0.75rem', vAlign: 'flex-start' }}>
                <P $style={{ size: GV('font-size-2') }}>Have you built virtual worlds before?</P>
                <RadioContainer border='#315866' background='#1A272C'>
                    <RadioButton label={<P>Yes, I’ve built worlds before.</P>} isSelected={virtualWorld === 1} onClick={() => setVirtualWorld(1)} color='#08A0D8' />
                </RadioContainer>
                <RadioContainer border='#502C4C' background='#291D28'>
                    <RadioButton label={<P>No I’m new to this.</P>} isSelected={virtualWorld === 2} onClick={() => setVirtualWorld(2)} color='#D75A80' />
                </RadioContainer>
                <RadioContainer border='#315866' background='#1A272C'>
                    <RadioButton label={<P>I’m not sure?</P>} isSelected={virtualWorld === 3} onClick={() => setVirtualWorld(3)} color='#08A0D8' />
                </RadioContainer>
            </Flex>
            {virtualWorld === 1 && (
                <Flex $style={{ fDirection: 'column', gap: '0.75rem' }}>
                    <P $style={{ size: GV('font-size-2') }}>How would you describe your experience with building in the metaverse?</P>
                    <Flex $style={{ hAlign: 'space-between' }}>
                        <Flex $style={{ fDirection: 'column' }}>
                            <P $style={{ size: GV('font-size-3') }}>1 = I'm new to this.</P>
                            <P $style={{ size: GV('font-size-3') }}>5 = I've built worlds in Metaverse before'.</P>
                        </Flex>
                        <ItemContainer>
                            <Icon icon='Star' />
                            <Icon icon='Star' />
                            <Icon icon='Star' />
                            <Icon icon='Star' />
                            <Icon icon='Star' />
                        </ItemContainer>
                    </Flex>
                </Flex>
            )}
            {virtualWorld === 2 && (
                <Flex $style={{ fDirection: 'column', gap: '0.75rem' }}>
                    <P $style={{ size: GV('font-size-2') }}>What type of 3D creation software are you familiar with?</P>
                    <ItemList>
                        {software_list.map((item, index) => (
                            <Item key={index} onClick={() => {set(index)}}>
                                <Checkbox label={item} />
                            </Item>
                        ))}
                    </ItemList>
                </Flex>
            )}
            <Divider />
            <Flex $style={{ gap: '2rem' }}>
                <Link to={routerer('_SIGNUP', '_SIGNUP_TALENT')}><BackButton>Back</BackButton></Link>
                <SubmitButton onClick={handleContinue}>Continue</SubmitButton>
            </Flex>
            <Flex $style={{ vAlign: 'center', gap: '0.25rem', w: '100%', hAlign: 'center' }}>
                <CustomFont1>Already have an account? </CustomFont1>
                <Link to={routerer('_SIGNIN')}><P $style={{ size: GV('font-size-3'), color: 'info' }}>Sign In</P></Link>
            </Flex>
        </AuthForm>
    )
}

export default Category;
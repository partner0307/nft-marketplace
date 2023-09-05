import { useRef, useLayoutEffect } from 'react';
import { gsap } from "gsap"

import _ROUTERS from '@/constants/route.constant';

import { HireContainer, HireWrapper, ImageWrapper } from './style';
import { Flex } from '@/components/basic';

import HireSectionBanner from './components/Banner';
import HireSectionHeading from './components/Heading';
import HireSectionCategory from './components/Category';
import HireSectionAvatars from './components/Avatars';
import HireSectionImage from './components/Image';
import HireSectionTalentSlider from './components/TalentSlider';
import HireSectionSliderController from './components/SliderController';

const HireSection = () => {
    const firstTriggerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // let panels
        });

        return () => ctx.revert();
    })

    return (
        <div id='hire'>
            <HireContainer>
                <HireWrapper>
                    <Flex
                        ref={firstTriggerRef}
                        $style={{
                            p: "0 10rem 5rem",
                            vAlign: "center",
                            queries: {
                                1024: {
                                    p: '0 0 5rem'
                                }
                            }
                        }}
                    >
                        <Flex $style={{
                            fDirection: 'column',
                            hAlign: 'flex-start',
                            vAlign: 'flex-start',
                            gap: '48px',
                            maxW: "80%"
                        }}>
                            <Flex $style={{
                                fDirection: 'column',
                                vAlign: 'flex-start',
                                gap: '4.5px'
                            }}>
                                <HireSectionBanner triggerRef={firstTriggerRef} />
                                <HireSectionHeading triggerRef={firstTriggerRef} />
                            </Flex>
                            <HireSectionCategory triggerRef={firstTriggerRef} />
                        </Flex>
                        <ImageWrapper>
                            <HireSectionImage triggerRef={firstTriggerRef} />
                            <HireSectionAvatars triggerRef={firstTriggerRef} />
                        </ImageWrapper>
                    </Flex>
                    <HireSectionTalentSlider />
                    <HireSectionSliderController />
                </HireWrapper>
            </HireContainer>
        </div>
    )
}

export default HireSection;
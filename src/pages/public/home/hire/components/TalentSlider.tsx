import { Fragment, useRef } from "react";
import { animated, useSpring } from "react-spring";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { talents } from '@/constants/mockup/tablents';
import TalentCard from '@/components/custom/talent-card';

import "swiper/css";
import "swiper/css/pagination";

const HireSectionTalentSlider = () => {

    const triggerRef = useRef<HTMLDivElement>(null);
    const dataRef = useIntersectionObserver(triggerRef, { freezeOnceVisible: true, rootMargin: "300px" });
    const style = useSpring({
        config: { duration: 300 },
        delay: 2000,
        from: { x: "100%" },
        to: {
            opacity: dataRef?.isIntersecting ? 1 : 0,
            x: dataRef?.isIntersecting ? "0px" : "100%"
        }
    });

    const renderTalentCards = () => {
        return (
            <Fragment>
                {talents.map((talent, i) => (
                    <SwiperSlide key={i}>
                        <TalentCard
                            key={i}
                            talent={talent}
                        />
                    </SwiperSlide>
                ))}
            </Fragment>
        )
    }

    return (
        <animated.div ref={triggerRef} style={style}>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation
                modules={[Navigation]}
                grabCursor={true}
                className="mySwiper"
            >
                {renderTalentCards()}
            </Swiper>
        </animated.div>
    )
}

export default HireSectionTalentSlider;

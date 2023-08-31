import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { animated, useSpring } from "react-spring";
import { AnimationImage } from "../style";

import Image1 from '@/assets/img/hire1.png';

const HireSectionImage = ({ triggerRef }: { triggerRef: any }) => {

    const dataRef = useIntersectionObserver(triggerRef, { freezeOnceVisible: true, rootMargin: "300px" });
    const style = useSpring({
        config: { duration: 300 },
        delay: 2000,
        from: { x: "120%" },
        to: {
            opacity: dataRef?.isIntersecting ? 1 : 0,
            x: dataRef?.isIntersecting ? "0px" : "120%"
        }
    });

    return (
        <animated.div style={style}>
            <AnimationImage>
                <img src={Image1} alt="" />
            </AnimationImage>
        </animated.div>
    )
}

export default HireSectionImage;

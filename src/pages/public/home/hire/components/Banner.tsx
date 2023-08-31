import { animated, useSpring } from "react-spring";
import { Span } from "@/components/basic";
import { GV } from "@/utils/style.util";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const HireSectionBanner = ({ triggerRef }: { triggerRef: any }) => {

    const dataRef = useIntersectionObserver(triggerRef, { freezeOnceVisible: true, rootMargin: "300px" });
    const style = useSpring({
        config: { duration: 700 },
        from: { opacity: 0, y: "100%" },
        to: {
            opacity: dataRef?.isIntersecting ? 1 : 0,
            y: dataRef?.isIntersecting ? "0px" : "100%"
        }
    });

    return (
        <animated.div style={style}>
            <Span $style={{
                size: GV('font-size-3'),
                color: GV('caption-color1')
            }}>It's Time To</Span>
        </animated.div>
    )
}

export default HireSectionBanner;

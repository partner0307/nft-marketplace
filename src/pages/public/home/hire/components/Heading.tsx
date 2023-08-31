import { animated, useSpring } from "react-spring";
import { Heading } from "@/components/basic";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const HireSectionHeading = ({ triggerRef }: { triggerRef: any }) => {

    const dataRef = useIntersectionObserver(triggerRef, { freezeOnceVisible: true, rootMargin: "300px" });
    const style = useSpring({
        config: { duration: 700 },
        delay: 700,
        from: { opacity: 0, y: "100%" },
        to: {
            opacity: dataRef?.isIntersecting ? 1 : 0,
            y: dataRef?.isIntersecting ? "0px" : "100%"
        }
    });

    return (
        <animated.div style={style}>
            <Heading level={1} weight='900'>Hire Perfect Talent For Your Web3 Project</Heading>
        </animated.div>
    )
}

export default HireSectionHeading;

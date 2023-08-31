import { useRef } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { animated, useSpring } from "react-spring";

import { Flex } from "@/components/basic";
import { Link } from "react-router-dom";
import _ROUTERS from "@/constants/route.constant";
import { Button, Icon } from "@/components/custom";
import { ArrowButton } from "../style";
import { GV } from "@/utils/style.util";

const HireSectionSliderController = () => {

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

    return (
        <animated.div ref={triggerRef} style={style}>
            <Flex
                $style={{
                    fDirection: 'row',
                    vAlign: "center",
                    hAlign: 'space-between',
                    p: '5rem 32px 0 0'
                }}
            >
                <Link to={_ROUTERS.hire_talents}>
                    <Button $style={{
                        bg: GV('gradient'),
                        radius: '8px',
                        p: '0.25rem 3rem',
                    }}>View All Talent</Button>
                </Link>
                <Flex $style={{
                    fDirection: 'row',
                    gap: '45px'
                }}>
                    <ArrowButton isFill={false}><Icon icon='ArrowColorLeft' /></ArrowButton>
                    <ArrowButton isFill={true}><Icon icon='ArrowRight' /></ArrowButton>
                </Flex>
            </Flex>
        </animated.div>
    )
}

export default HireSectionSliderController;

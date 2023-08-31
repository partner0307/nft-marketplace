import { Flex } from "@/components/basic";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { animated, useSpring } from "react-spring";
import { Avatar } from "../style";

import Avatar1 from '@/assets/img/avatar1.png';
import Avatar2 from '@/assets/img/avatar2.png';

const HireSectionAvatars = ({ triggerRef }: { triggerRef: any }) => {

    const dataRef = useIntersectionObserver(triggerRef, { freezeOnceVisible: true, rootMargin: "300px" });
    const style = useSpring({
        config: { duration: 700 },
        delay: 2000,
        from: { opacity: 0 },
        to: {
            opacity: dataRef?.isIntersecting ? 1 : 0
        }
    });

    return (
        <animated.div style={style}>
            <Flex
                $style={{
                    fDirection: 'row',
                    vAlign: 'center',
                    hAlign: 'center'
                }}
            >
                <Avatar src={Avatar1} />
                <Avatar src={Avatar2} />
                <Avatar src={Avatar1} />
            </Flex>
        </animated.div>
    )
}

export default HireSectionAvatars;

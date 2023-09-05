import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Flex } from "@/components/basic";
import { BigCard } from "@/components/page/public/home/screen";

import Screen from '@/assets/img/screen.png';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {

    const container = useRef<HTMLDivElement>(null);
    const bigCardRef = useRef<HTMLDivElement>(null);
    
    useLayoutEffect(() => {
        console.log(bigCardRef.current);

        let ctx = gsap.context(() => {
            gsap.from(bigCardRef.current, {
                scrollTrigger: {
                    trigger: bigCardRef.current,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "resume pause reverse none",
                    scrub: true,
                    pin: true,
                    markers: true,
                },
                x: 400,
                duration: 3,
                width: "100vw",
                height: "100vh",
                position: "absolute",
                top: 0,
                left: 0,
                markers: true,
            })
        }, container)

        return () => ctx.revert();
    })

    return (
        <Flex ref={container} $style={{ fDirection: "column", p: "500px 200px 0" }}>
            <BigCard ref={bigCardRef} image={Screen} title='Decentraland' />
        </Flex>
    )
}

export default HeroSection;

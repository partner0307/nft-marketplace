import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Flex } from "@/components/basic";

import Screen from '@/assets/img/screen.png';
import MainCard from "./components/MainCard";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {

    const container = useRef<HTMLDivElement>(null);
    const bigCardRef = useRef<HTMLDivElement>(null);
    
    useLayoutEffect(() => {
    })

    return (
        <Flex ref={container} $style={{ fDirection: "column", p: "120vh 200px 0" }}>
        </Flex>
    )
}

export default HeroSection;

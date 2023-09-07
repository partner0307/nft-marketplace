import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./index.css";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {

    const container = useRef<HTMLDivElement>(null);
    const bigCardRef = useRef<HTMLDivElement>(null);
    
    useLayoutEffect(() => {
    })

    return (
        <div className="hero">

        </div>
    )
}

export default HeroSection;

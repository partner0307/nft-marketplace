import { useEffect, useRef } from "react";
import { findAll } from "styled-components/test-utils";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import TalentCard from "@/components/custom/talent-card";
import { talents } from "@/constants/mockup/tablents";
import { CardContainer } from "@/components/custom/talent-card/style";

gsap.registerPlugin(ScrollTrigger);

const TalentCardDiv = ({talent}: {talent: TablentObject}) => {
    return (
        <div className='talent-card'>
            <TalentCard
                talent={talent}
            />
        </div>
    )
}

const TalentSlider = () => {

    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(()=>{
        setTimeout(()=>{
            const elements = gsap.utils.toArray(".talent-card");
            if (ref.current === null || elements === null) return;

            gsap.to(elements, {
                xPercent: -100 * (elements.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: ref.current,
                    scroller: "#app",
                    start: 'top top',
                    toggleActions: "restart pause reverse pause",
                    end: ()=>`+=${(ref.current?.offsetWidth || 0) + window.innerWidth}`,
                    pin: true,
                    scrub: 1,
                    markers: true,
                }
            })
    
            ScrollTrigger.refresh()
        })
       
    }, [])

    return (
        <div data-scroll-section className="talent-slider">
            <div ref={ref} className="slider">
                {talents.map((talent, i) => (
                    <TalentCardDiv
                        key={i}
                        talent={talent}
                    />
                ))}
            </div>
        </div>
    )
}

export default TalentSlider;

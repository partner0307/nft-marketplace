import { Fragment, useState, useRef, useEffect } from "react";
import useLocoScroll from "@/hooks/useLocoScroll";
import HeroSection from "./hero";
import HireSection from "./hire";

const LandingPage = () => {
    const [preloader, setPreloader] = useState(true);

    useLocoScroll(!preloader);

    const [timer, setTimer] = useState(3)

    const id = useRef<any>(null)

    const clear = () => {
        window.clearInterval(id.current);
        setPreloader(false)
    }

    useEffect(() => {
        id.current = window.setInterval(()=>{
            setTimer((timer)=>timer - 1)
        }, 1000)
    }, [])

    //when the timer changes: 
    useEffect(() => {
        if (timer === 0) {
            clear()
        }
    }, [timer])

    useLocoScroll(!preloader);
    return (
        <Fragment>
            <HeroSection />
            <HireSection />
            <HeroSection />
        </Fragment>
    )
}

export default LandingPage;

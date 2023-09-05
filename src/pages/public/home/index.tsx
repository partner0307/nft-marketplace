import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'

import { HomeContainer } from "./style";

import Hero from "./hero";
import HireSection from "./hire";
import Explore from "./explore";
import Collection from "./collection";
import Blog from "./blog";

gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {

    useEffect(() => {
    }, [])
    return (
        <HomeContainer>
            <Hero />
            <HireSection />
            <Explore />
            <Collection />
            <Blog />
        </HomeContainer>
    )
}

export default HomePage;

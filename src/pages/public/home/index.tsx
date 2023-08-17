import React from "react";
import { HomeContainer } from "./style";
import Hero from "./hero";
import HireSection from "./hire";
import Explore from "./explore";
import Collection from "./collection";
import Blog from "./blog";

const HomePage = () => {
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

import React from "react";
import { HomeContainer } from "./style";
import Hero from "../../../components/page/public/home/hero";
import HireSection from "../../../components/page/public/home/hire";
import Explore from "../../../components/page/public/home/explore";
import Collection from "../../../components/page/public/home/collection";
import Blog from "../../../components/page/public/home/blog";

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

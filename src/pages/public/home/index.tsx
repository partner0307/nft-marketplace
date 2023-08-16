import React from "react";
import { HomeContainer } from "./style";
import Hero from "../../../components/page/public/home/hero";
import HireSection from "../../../components/page/public/home/hire";

const HomePage = () => {
    return (
        <HomeContainer>
            <Hero />
            <HireSection />
        </HomeContainer>
    )
}

export default HomePage;

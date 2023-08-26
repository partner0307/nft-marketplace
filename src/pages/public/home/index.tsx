import React, { useEffect } from "react";
import { HomeContainer } from "./style";
import Hero from "./hero";
import HireSection from "./hire";
import Explore from "./explore";
import Collection from "./collection";
import Blog from "./blog";

const HomePage = () => {
    // const [loaded, setLoaded] = React.useState(false);

    useEffect(() => {
        // const onPageLoad = () => {
        //     setLoaded(true);
        // }

        // if (document.readyState === 'complete') {
        //     onPageLoad();
        // } else {
        //     window.addEventListener("load", onPageLoad);
        //     return window.removeEventListener("load", onPageLoad);
        // }
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

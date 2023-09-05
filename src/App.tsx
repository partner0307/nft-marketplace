import React from "react";
import { RouterProvider } from "react-router-dom";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import routers from "./routes";

gsap.registerPlugin(ScrollTrigger)

const App: React.FC = () => {
    return (
        <React.Fragment>
            <RouterProvider router={routers} />
        </React.Fragment>
    )
}

export default App;

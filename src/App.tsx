import React from "react";
import { RouterProvider } from "react-router-dom";
import routers from "./routes";

const App: React.FC = () => {
    const { privateRouters, publicRouters, authRouters } = routers;
    const account = null;

    return (
        <React.Fragment>
            <RouterProvider 
                router={account === null ? publicRouters : privateRouters} 
            />
        </React.Fragment>
    )
}

export default App;

import { createBrowserRouter, Navigate } from "react-router-dom";
import _ROUTERS from "../constants/menu.constant";

import PublicPage from "../pages/public";
import HomePage from "../pages/public/home";
import Metaverses from "../pages/public/explore/metaverse/metaverses";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <PublicPage />,
        children: [
            {
                path: _ROUTERS.home,
                element: <HomePage />
            },
            {
                path: _ROUTERS.metaverses,
                element: <Metaverses />
            }
        ],
    },
    {
        path: "*",
        element: <></>
    }
])

export default routers;

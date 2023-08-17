import { createBrowserRouter, Navigate } from "react-router-dom";
import _ROUTERS from "../constants/menu.constant";

import PublicPage from "../pages/public";
import HomePage from "../pages/public/home";
import Metaverses from "../pages/public/explore/metaverse/metaverses";
import Marketplace from "../pages/public/explore/metaverse/marketplace";

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
            },
            {
                path: _ROUTERS.marketplace,
                element: <Marketplace />
            }
        ],
    },
    {
        path: "*",
        element: <></>
    }
])

export default routers;

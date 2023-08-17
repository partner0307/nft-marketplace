import { createBrowserRouter, Navigate } from "react-router-dom";

import _ROUTERS from "@/constants/menu.constant";

import PublicPage from "@/pages/public";
import HomePage from "@/pages/public/home";
import Metaverses from "@/pages/public/explore/metaverse/metaverses";
import Marketplace from "@/pages/public/explore/metaverse/marketplace";
import Build from "@/pages/public/explore/metaverse/build";
import Details from "@/pages/public/explore/metaverse/metaverses/details";

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
            },
            {
                path: _ROUTERS.details,
                element: <Details />
            },
            {
                path: _ROUTERS.build,
                element: <Build />
            }
        ],
    },
    {
        path: "*",
        element: <></>
    }
])

export default routers;

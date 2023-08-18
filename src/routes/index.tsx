import { createBrowserRouter, Navigate } from "react-router-dom";

import _ROUTERS from "@/constants/menu.constant";

import PublicPage from "@/pages/public";
import HomePage from "@/pages/public/home";
import Metaverses from "@/pages/public/explore/metaverse/metaverses";
import Marketplace from "@/pages/public/explore/metaverse/marketplace";
import BuildMeta from "@/pages/public/explore/metaverse/build-metaverse";
import Details from "@/pages/public/explore/metaverse/metaverses/details";
import { Flex, Heading } from "@/components/basic";

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
                element: <BuildMeta />
            },
            {
                path: "*",
                element: (
                    <Flex $style={{
                        h: "100vh",
                        hAlign: "center",
                        p: "300px 0 0"
                    }}>
                        <Heading level={1}>404 Not found page</Heading>
                    </Flex>
                )
            }
        ],
    },
    {
        path: "*",
        element: <></>
    }
])

export default routers;

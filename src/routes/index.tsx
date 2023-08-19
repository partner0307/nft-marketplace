import { createBrowserRouter, Navigate } from "react-router-dom";

import _ROUTERS from "@/constants/menu.constant";

import PublicPage from "@/pages/public";
import HomePage from "@/pages/public/home";
import Metaverses from "@/pages/public/explore/metaverse/metaverses";
import Marketplace from "@/pages/public/explore/metaverse/marketplace";
import BuildMeta from "@/pages/public/explore/metaverse/build-metaverse";
import MetaverseDetails from "@/pages/public/explore/metaverse/metaverses/details";
import { Flex, Heading } from "@/components/basic";
import BuyNFT from "@/pages/public/explore/nft/buy";
import NFTMarketplace from "@/pages/public/explore/nft/marketplace";
import NFTDetails from "@/pages/public/explore/nft/marketplace/details";

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
                path: _ROUTERS.metaverse_marketplace,
                element: <Marketplace />
            },
            {
                path: _ROUTERS.metaverse_details,
                element: <MetaverseDetails />
            },
            {
                path: _ROUTERS.build_metaverse,
                element: <BuildMeta />
            },
            {
                path: _ROUTERS.buy_nft,
                element: <BuyNFT />
            },
            {
                path: _ROUTERS.nft_marketplace,
                element: <NFTMarketplace />
            },
            {
                path: _ROUTERS.nft_details,
                element: <NFTDetails />
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

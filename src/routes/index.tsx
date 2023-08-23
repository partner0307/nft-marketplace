import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

import _ROUTERS from "@/constants/route.constant";

import PublicPage from "@/pages/public";
import HomePage from "@/pages/public/home";
import Metaverses from "@/pages/public/explore/metaverse/metaverses";
import Marketplace from "@/pages/public/explore/metaverse/marketplace";
import BuildMetaverse from "@/pages/public/explore/metaverse/build-metaverse";
import MetaverseDetails from "@/pages/public/explore/metaverse/metaverses/details";
import { Flex, Heading } from "@/components/basic";
import BuyNFT from "@/pages/public/explore/nft/buy";
import NFTMarketplace from "@/pages/public/explore/nft/marketplace";
import NFTDetails from "@/pages/public/explore/nft/marketplace/details";
import BuildDetails from "@/pages/public/explore/metaverse/build-metaverse/details";
import RealEstateDetails from "@/pages/public/explore/metaverse/build-metaverse/details/real-estate/details";
import MetaverseOverview from "@/pages/public/explore/metaverse/metaverses/details/overview";
import MetaverseCollectiles from "@/pages/public/explore/metaverse/metaverses/details/collectibles";
import MetaverseLand from "@/pages/public/explore/metaverse/metaverses/details/land";
import MetaverseMarket from "@/pages/public/explore/metaverse/metaverses/details/marketplace";
import MetaverseAbout from "@/pages/public/explore/metaverse/metaverses/details/about";
import RealEstate from "@/pages/public/explore/metaverse/build-metaverse/details/real-estate";
import RealEsateOverview from "@/pages/public/explore/metaverse/build-metaverse/details/real-estate/details/overview";
import Features from "@/pages/public/explore/metaverse/build-metaverse/details/real-estate/details/features";
import PriceHistory from "@/pages/public/explore/metaverse/build-metaverse/details/real-estate/details/price-history";
import Cost from "@/pages/public/explore/metaverse/build-metaverse/details/real-estate/details/monthly-cost";
import NearbyBuilding from "@/pages/public/explore/metaverse/build-metaverse/details/real-estate/details/nearby-buildings";
import FloorPlan from "@/pages/public/explore/metaverse/build-metaverse/details/real-estate/details/floor-plan";
import Images from "@/pages/public/explore/metaverse/build-metaverse/details/real-estate/details/images";
import Appoinment from "@/pages/public/explore/metaverse/build-metaverse/details/real-estate/details/book-appoinment";

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
                path: _ROUTERS.metaverse,
                element: <Metaverses />
            },
            {
                path: _ROUTERS.metaverse,
                element: <MetaverseDetails />,
                children: [
                    {
                        path: _ROUTERS.overview,
                        element: <MetaverseOverview />
                    },
                    {
                        path: _ROUTERS.collectibles,
                        element: <MetaverseCollectiles />
                    },
                    {
                        path: _ROUTERS.land,
                        element: <MetaverseLand />
                    },
                    {
                        path: _ROUTERS.marketplace,
                        element: <MetaverseMarket />
                    },
                    {
                        path: _ROUTERS.news,
                        element: <MetaverseDetails />
                    },
                    {
                        path: _ROUTERS.about,
                        element: <MetaverseAbout />
                    },
                    {
                        path: _ROUTERS.comments,
                        element: <MetaverseDetails />
                    },
                ]
            },
            {
                path: _ROUTERS.metaverse_marketplace,
                element: <Marketplace />
            },
            {
                path: _ROUTERS.build_metaverse,
                element: <BuildMetaverse />
            },
            {
                path: _ROUTERS.build_metaverse,
                element: <><Outlet /></>,
                children: [
                    {
                        path: _ROUTERS.real_estate,
                        element: <RealEstate />
                    },
                    {
                        path: _ROUTERS.real_estate,
                        element: <RealEstateDetails />,
                        children: [
                            {
                                path: _ROUTERS.overview,
                                element: <RealEsateOverview />
                            },
                            {
                                path: _ROUTERS.features,
                                element: <Features />
                            },
                            {
                                path: _ROUTERS.price_history,
                                element: <PriceHistory />
                            },
                            {
                                path: _ROUTERS.monthly_cost,
                                element: <Cost />
                            },
                            {
                                path: _ROUTERS.nearby_buildings,
                                element: <NearbyBuilding />
                            },
                            {
                                path: _ROUTERS.floor_plan,
                                element: <FloorPlan />
                            },
                            {
                                path: _ROUTERS.images,
                                element: <Images />
                            },
                            {
                                path: _ROUTERS.books,
                                element: <Appoinment />
                            },
                        ]
                    },
                    {
                        path: _ROUTERS.ecommerce,
                        element: <MetaverseDetails />
                    },
                ]
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

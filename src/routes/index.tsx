import { createBrowserRouter, Navigate } from "react-router-dom";
import _ROUTERS from "../constants/menu.constant";

import PublicLayout from "../layouts/PublicLayout";

import PublicPage from "../pages/public";
import HomePage from "../pages/public/home";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <PublicPage />,
        children: [
            {
                path: _ROUTERS.home,
                element: <HomePage />
            }
        ],
    },
    {
        path: "*",
        element: <></>
    }
])

export default routers;

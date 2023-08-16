import { createBrowserRouter, Navigate } from "react-router-dom";
import _ROUTERS from "../constants/menu.constant";

import HomePage from "../pages/public/home";
import PublicPage from "../pages/public";

const publicRouters = createBrowserRouter([
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

const privateRouters = createBrowserRouter([

])

const authRouters = createBrowserRouter([

])

export default {
    publicRouters,
    privateRouters,
    authRouters
}

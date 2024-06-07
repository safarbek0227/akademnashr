import * as React from "react";
import Root from "./pages/root.jsx"
import Base from "./pages/dashboard/base.jsx"
import ErrorPage from "./pages/errorpage.jsx"
import Home from "./pages/home.jsx"
import About from "./pages/about.jsx"
import Team from "./pages/team.jsx"
import Contact from "./pages/contact.jsx"
import Shop from "./pages/shop.jsx"
import ShopDetail from "./pages/shopdetail.jsx"



import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
        {
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    errorElement: <ErrorPage />,
                    element: <Home />,
                },
                {
                    path: "about/",
                    errorElement: <ErrorPage />,
                    element: <About/>,
                },
                {
                    path: "shop/",
                    errorElement: <ErrorPage />,
                    element: <Shop/>,
                },
                {
                    path: "shop/:id",
                    errorElement: <ErrorPage />,
                    element: <ShopDetail/>,
                },
                {
                    path: "team/",
                    errorElement: <ErrorPage />,
                    element: <Team/>,
                },
                {
                    path: "contact/",
                    errorElement: <ErrorPage />,
                    element: <Contact/>,
                },
                {
                    path: "*",
                    element: <ErrorPage />,
                }
            ]
        }
    ],
  },
  {
    path: "/dashboard",
    element: <Base />,
    children: [
        {
            path: "*",
            element: <></>,
        }
    ]
  },
]);

export default router;
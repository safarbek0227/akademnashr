import * as React from "react";
import Root from "./pages/root.jsx"
import ErrorPage from "./pages/errorpage.jsx"
import Home from "./pages/home.jsx"
import About from "./pages/about.jsx"
import Team from "./pages/team.jsx"
import Contact from "./pages/contact.jsx"
import Shop from "./pages/shop.jsx"
import "./css/index.css"


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
]);

export default router;
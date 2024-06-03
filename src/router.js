import * as React from "react";
import Root from "./pages/root.jsx"
import ErrorPage from "./pages/errorpage.jsx"
import Home from "./pages/home.jsx"
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
                    path: "*",
                    element: <ErrorPage />,
                }
            ]
        }
    ],
  },
]);

export default router;
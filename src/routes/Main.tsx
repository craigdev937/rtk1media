import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Media } from "../pages/Media";
import { Films } from "../pages/Films";
import { TVShows } from "../pages/TVShows";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Media />,
                errorElement: <NotFound />
            },
            {
                path: "/films",
                element: <Films />,
                errorElement: <NotFound />
            },
            {
                path: "/tvshows",
                element: <TVShows />,
                errorElement: <NotFound />
            }
        ]
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={Router} />
        </React.Fragment>
    );
};



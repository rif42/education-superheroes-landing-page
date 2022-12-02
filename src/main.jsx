import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import OurTeam from "./pages/OurTeam";
import Training from "./pages/Training";
import ErrorPage from "./error-page";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/training",
        element: <Training />,
    },
    {
        path: "/our_team",
        element: <OurTeam />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

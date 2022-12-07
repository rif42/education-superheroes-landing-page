import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import OurTeam from "./pages/OurTeam";
import Training from "./pages/Training";
import ErrorPage from "./error-page";
import Form from "./components/Form";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/home/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [{
            path: "/home/form/",
            element: <Form />
        }]
    },
    {
        path: "/training/",
        element: <Training />,
        children: [{
            path: "/training/form/",
            element: <Form />
        }]
    },
    {
        path: "/our_team/",
        element: <OurTeam />,
        children: [{
            path: "/our_team/form/",
            element: <Form />
        }]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

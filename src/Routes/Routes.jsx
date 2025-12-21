import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../MainLayout/MainLayout";
import { Component } from "react";
import Home from "../Pages/Home";
import App from "../App";
import installation from "../Pages/installation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: App,
      },
      {
        path: "/installation",
        Component: installation,
      },
    ],
  },
]);

export default router;

import WeatherPage from "Frontend/views/home/WeatherPage.js";
import MainLayout from "Frontend/views/MainLayout.js";
import { lazy } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";

// const AboutView = lazy(async () => import('Frontend/views/about/AboutView.js'));

const routing = [
  {
    element: <MainLayout />,
    handle: { title: "Main" },
    children: [
      {
        path: "/",
        element: <WeatherPage />,
        handle: { title: "Clima" },
      },
    ],
  },
] as RouteObject[];

export const routes = routing;
export default createBrowserRouter(routes);

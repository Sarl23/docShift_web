import PrivateLayout from "@/pages/layouts/private-layout";
import RootLayout from "@/pages/layouts/root-layout";
import DashboardPage from "@/pages/private/dashboard-page";
import HomePage from "@/pages/public/home-page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <div>HOME about!!</div>,
      },
      {
        path: "dashboard",
        element: <PrivateLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage children={undefined} />,
          },
          {
            path: "settings",
            element: <div>HOME settings!!</div>,
          },
        ],
      },
    ],
  },
]);

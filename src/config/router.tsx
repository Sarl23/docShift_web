import PrivateLayout from "@/pages/layouts/private-layout";
import RootLayout from "@/pages/layouts/root-layout";
import HomePage from "@/pages/public/home-page";
import ManagementPage from "@/pages/private/management-page"
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "@/pages/layouts/dashboard-layout";
import PrivateDashboardPage from "@/pages/private/privateDashboard-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <div>HOME about!!</div> },

      {
        path: "dashboard",
        element: <PrivateLayout />,
        children: [
          {
            element: <DashboardLayout />,
            children: [
              {
                index: true,
                element: <PrivateDashboardPage />,
              },
              {
                path: "management_shifts",
                element: <ManagementPage />,
              },
              {
                path: "settings",
                element: <ManagementPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

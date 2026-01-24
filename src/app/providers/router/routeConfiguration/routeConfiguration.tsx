import { ErrorBoundaryFallback } from "@app/providers/ErrorBoundary";
import { getRouteMain } from "@shared/routes";
import { Header } from "@widgets/Header";
import { RouteObject, Outlet } from "react-router-dom";
import { MainPage } from "@/pages/MainPage";

export const routeConfiguration: RouteObject[] = [
  {
    element: (
      <>
        <Header />
        <main className="content">
          <Outlet />
        </main>
      </>
    ),
    errorElement: <ErrorBoundaryFallback />,
    children: [
      {
        path: getRouteMain(),
        element: <MainPage />,
      },
    ],
  },
];

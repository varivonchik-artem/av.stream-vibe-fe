import { ErrorBoundaryFallback } from "@app/providers/ErrorBoundary";
import { getRouteMain } from "@shared/routes";
import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header";
import { RouteObject, Outlet } from "react-router-dom";
import { MainPage } from "@/pages/MainPage";

export const routeConfiguration: RouteObject[] = [
  {
    element: (
      <>
        <Header />
        <main id="main-content" className="content">
          <Outlet />
        </main>
        <Footer />
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

import { lazy } from "react";

import { RouteObject, createBrowserRouter } from "react-router-dom";

import ErrorBoundaryLayout from "@/app/config/routing/error-boundary-layout.tsx";
import { BASIC_PATHS, ERROR_PATHS } from "@/app/config/routing/pathes.ts";

const routerOptions = {
  basename: "/"
};

const routes: RouteObject[] = [
  {
    path: BASIC_PATHS.HOME,
    caseSensitive: true,
    Component: lazy(() => import("@/pages/home"))
  },
  {
    path: ERROR_PATHS.NOT_FOUND,
    caseSensitive: true,
    Component: lazy(() => import("@/pages/not-found"))
  }
];

const router = createBrowserRouter(
  [{ element: <ErrorBoundaryLayout />, children: routes }],
  routerOptions
);

export default router;

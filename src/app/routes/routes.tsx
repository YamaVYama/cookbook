import { createBrowserRouter } from "react-router";
import { pages } from "@pages/index";
import { CommonLayout } from "@shared/ui/layout/CommonLayout";

export const router = createBrowserRouter([
  {
    Component: CommonLayout,
    children: [
      {
        index: true,
        Component: pages.main.view,
      },
      {
        path: pages.main.route,
        Component: pages.main.view,
      },
      {
        path: pages.recipe.route,
        Component: pages.recipe.view,
      },
      {
        path: pages.profile.route,
        Component: pages.profile.view,
      },
      {
        path: pages.test.route,
        Component: pages.test.view,
      },
    ],
  },
  {
    index: true,
    element: <div>This is root!</div>,
  },
]);

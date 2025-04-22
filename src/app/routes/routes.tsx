import { createBrowserRouter } from "react-router";
import { pages } from "@pages/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is root!</div>,
  },
  {
    path: pages.main.route,
    element: pages.main.view(),
  },
  {
    path: pages.recipe.route,
    element: pages.recipe.view(),
  },
]);

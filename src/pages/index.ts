import { APP_ROUTES } from "@shared/routes";

import { Main } from "./main-page/ui/Main";
import { Recipe } from "./recipe/ui/Recipe";

const pages = {
  main: { route: APP_ROUTES.MAIN, view: Main },
  recipe: { route: APP_ROUTES.RECIPE, view: Recipe },
};

export { pages };

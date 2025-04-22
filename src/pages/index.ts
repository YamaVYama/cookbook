import { APP_ROUTES } from "@shared/routes";

import { Main } from "./main-page/ui/Main";
import { Recipe } from "./recipe/ui/Recipe";
import { Profile } from "./profile/ui/Profile";

const pages = {
  main: { route: APP_ROUTES.MAIN, view: Main },
  recipe: { route: APP_ROUTES.RECIPE, view: Recipe },
  profile: { route: APP_ROUTES.PROFILE, view: Profile },
};

export { pages };

import { APP_ROUTES } from "@shared/routes";
import { Link } from "react-router";

export const Main = () => (
  <div>
    You are now viewing main page!
    <Link to={APP_ROUTES.RECIPE}>Go to Recipe</Link>
  </div>
);

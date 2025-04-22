import { APP_ROUTES } from "@shared/routes";
import { Link } from "react-router";

export const Recipe = () => (
  <div>
    <div>
      {" "}
      <Link to={APP_ROUTES.MAIN}>Back to Main</Link>
    </div>
    Recipe of pizza:
    <ul>
      <li>flour: 1 cup</li>
      <li>water: 1/2 cup</li>
      <li>pepperoni: 3 slices</li>
      <li>tomato paste: 1 spoon</li>
      <li>salt</li>
      <li>pepper</li>
    </ul>
  </div>
);

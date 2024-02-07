import { lazy } from "react";

const NotFoundPage = lazy(() => import("./404"));

import Meals from "../sections/menu/meals";
import Branches from "./branches";
import HomePage from "./home";
import SpecialMeal from "./menu/special";

export { Branches, HomePage, Meals, NotFoundPage, SpecialMeal };

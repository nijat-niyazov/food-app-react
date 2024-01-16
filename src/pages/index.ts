import { lazy } from "react";

const NotFoundPage = lazy(() => import("./404"));

import Branches from "./branches";
import HomePage from "./home";
import Meals from "./menu";
import SpecialMeal from "./menu/special";

export { Branches, HomePage, Meals, NotFoundPage, SpecialMeal };

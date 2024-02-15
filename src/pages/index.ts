import { lazy } from "react";

const NotFoundPage = lazy(() => import("./404"));

import AdminPage from "./admin";
import Branches from "./branches";
import CustomizeSpecialMealPage from "./customize";
import EditorPage from "./editor";
import HomePage from "./home";
import Meals from "./menu";
import SpecialMeal from "./menu/special";
import NotAdmin from "./not-admin";
import UnAuthPage from "./unauth";

export { AdminPage, Branches, CustomizeSpecialMealPage, EditorPage, HomePage, Meals, NotAdmin, NotFoundPage, SpecialMeal, UnAuthPage };

import { lazy } from "react";

const NotFoundPage = lazy(() => import("./404"));

import Meals from "../sections/menu/meals";
import AdminPage from "./admin";
import Branches from "./branches";
import CustomizeSpecialMealPage from "./customize";
import EditProfile from "./edit-profile";
import EditorPage from "./editor";
import HomePage from "./home";
import SpecialMeal from "./menu/special";
import NotAdmin from "./not-admin";
import UnAuthPage from "./unauth";

export {
  AdminPage,
  Branches,
  CustomizeSpecialMealPage,
  EditProfile,
  EditorPage,
  HomePage,
  Meals,
  NotAdmin,
  NotFoundPage,
  SpecialMeal,
  UnAuthPage,
};

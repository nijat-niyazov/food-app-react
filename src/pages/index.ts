import { lazy } from "react";

const NotFoundPage = lazy(() => import("./404"));

import Meals from "../sections/menu/meals";
import AdminPage from "./auth/admin";
import EditProfile from "./auth/edit-profile";
import EditorPage from "./auth/editor";
import OrderHistoryPage from "./auth/order-history";
import Branches from "./branches";
import CustomizeSpecialMealPage from "./customize";
import HomePage from "./home";
import SpecialMeal from "./menu/special";
import NotAdmin from "./not-admin";
import UnAuthPage from "./not-auhorized";

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
  OrderHistoryPage,
  SpecialMeal,
  UnAuthPage,
};

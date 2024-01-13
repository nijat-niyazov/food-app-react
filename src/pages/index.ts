import { lazy } from "react";
import Branches from "./branches";
import HomePage from "./home";
import MenuPage from "./menu";

const NotFoundPage = lazy(() => import("./404"));

export { Branches, HomePage, MenuPage, NotFoundPage };

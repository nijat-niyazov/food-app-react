import { MainLayout, MenuLayout } from "@/layouts";
import { AdminPage, Branches, EditorPage, HomePage, Meals, NotAdmin, NotFoundPage, SpecialMeal, UnAuthPage } from "@/pages";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const routes = (
  <Route path="/" element={<MainLayout />}>
    <Route path="*" element={<NotFoundPage />} />

    {/* public routes */}
    <Route index element={<HomePage />} />
    <Route path="/menu" element={<MenuLayout />}>
      <Route path=":category" element={<Meals />} />
      <Route path="special" element={<SpecialMeal />} />
    </Route>
    <Route path="/branches" element={<Branches />} />
    <Route path="/unauth" element={<UnAuthPage />} />
    <Route path="/not-admin" element={<NotAdmin />} />

    {/* protected routes */}

    <Route path="/admin" element={<AdminPage />} />
    <Route path="/editor/:id" element={<EditorPage />} />
    {/* <Route path="/customize/:id" element={<CustomizeSpecialMealPage />} /> */}
  </Route>
);

const router = createBrowserRouter(createRoutesFromElements(routes));

export default router;

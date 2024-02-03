import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { MainLayout, MenuLayout } from "./layouts";
import { Branches, HomePage, Meals, NotFoundPage, SpecialMeal } from "./pages";
import AdminPage from "./pages/admin";
import EditorPage from "./pages/editor";
import NotAdmin from "./pages/not-admin";
import UnAuthPage from "./pages/unauth";

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
    {/* <Route element={<AuthLayout />}> */}
    <Route path="/admin" element={<AdminPage />} />
    <Route path="/editor/:id" element={<EditorPage />} />
    {/* </Route> */}
  </Route>
);

function App() {
  const router = createBrowserRouter(createRoutesFromElements(routes));

  return <RouterProvider router={router} />;
}

export default App;

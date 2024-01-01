import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { MainLayout } from "./layouts";
import { Branches, HomePage, MenuPage } from "./pages";

const routes = (
  <Route path="/" element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path="/menu">
      <Route path=":category" element={<MenuPage />} />
    </Route>
    <Route path="/branches" element={<Branches />} />
  </Route>
);

function App() {
  const router = createBrowserRouter(createRoutesFromElements(routes));

  return <RouterProvider router={router} />;
}

export default App;

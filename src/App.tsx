import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { MainLayout } from "./layouts";
import { HomePage } from "./pages";

function App() {
  const routes = (
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  );

  const router = createBrowserRouter(createRoutesFromElements(routes));
  return <RouterProvider router={router} />;
}

export default App;

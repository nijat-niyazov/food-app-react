import { RouterProvider } from "react-router-dom";
import router from "./routes/route";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// const cookies = new Cookies(null, { path: "/" });
// cookies.set("user", "admin");

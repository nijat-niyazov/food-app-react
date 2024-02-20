import { RouterProvider } from "react-router-dom";
import Cookies from "universal-cookie";
import router from "./routes";

function App() {
  const cookies = new Cookies(null, { path: "/" });

  cookies.set("user", "admin");

  return <RouterProvider router={router} />;
  // return (
  //   <div className="p-10 border-1 m-4">
  //     <NewTodo />
  //   </div>
  // );
}

export default App;

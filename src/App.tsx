import { RouterProvider } from "react-router-dom";
import Cookies from "universal-cookie";
import router from "./routes/route";

function App() {
  const cookies = new Cookies(null, { path: "/" });

  cookies.set("user", "admin");

  // return <Placing />;
  return <RouterProvider router={router} />;

  // const [count, setCount] = useState(0);
  // return (
  //   <div className="p-10 border-1 m-4">
  //     <button onClick={() => setCount((c) => c + 1)}>+</button>
  //     <button onClick={() => setCount((c) => c - 1)}>-</button>
  //     <Localing
  //       // count={count}
  //       options={{
  //         server: "yes",
  //         port: "8000",
  //       }}
  //     />
  //   </div>
  // );
}

export default App;

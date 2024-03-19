import { RouterProvider } from "react-router-dom";
import router from "./routes/route";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// const cookies = new Cookies(null, { path: "/" });
// cookies.set("user", "admin");

// const cities = ["Baku", "Kiev", "Tbilisi", "Ankara", "Ottova", "Rome"];
// const [city, setCity] = useState("");

// const filteredCities = useMemo(() => {
//   return cities.filter((c) => c.toLowerCase().includes(city.toLowerCase()));
// }, [city]);
// <div className="min-h-screen bg-slate-700 text-white p-10">
//   <input
//     className="p-2 rounded-md text-black"
//     type="text"
//     value={city}
//     onChange={(e: ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
//   />
//   {filteredCities.map((city, i) => (
//     <div key={`${city.toLowerCase()}`} className="flex items-center justify-center gap-2    w-1/5 mx-auto mb-5">
//       <span>{city}</span>
//       <Aha />
//     </div>
//   ))}
// </div>

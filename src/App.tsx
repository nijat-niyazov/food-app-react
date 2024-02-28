import { RouterProvider } from "react-router-dom";
import router from "./routes/route";

import { useEffect, useState } from "react";
import { supabase } from "./constants/supabase";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event == "PASSWORD_RECOVERY") {
        const newPassword = prompt("What would you like your new password to be?") as string;
        const { data, error } = await supabase.auth.updateUser({ password: newPassword });

        if (data) alert("Password updated successfully!");
        if (error) alert("There was an error updating your password.");
      }
    });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;

// const cookies = new Cookies(null, { path: "/" });
// cookies.set("user", "admin");

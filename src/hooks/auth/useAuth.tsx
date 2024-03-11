import { UserType } from "@/constants/types/auth";
import { setUser } from "@/stores/user";
import toast from "react-hot-toast";
import { useCookies, useLocalStorage } from "..";

const useAuth = () => {
  const { getItem, setItem, removeItem } = useLocalStorage();
  const { getCookie, removeCookie, setCookie } = useCookies();

  function login(token: string, refresh_token: string, user: UserType) {
    setCookie("token", token);
    setItem("token", refresh_token);
    setUser(user);
    toast.success("You have successfully logged in");
  }

  function logOut() {
    removeCookie("token");
    removeItem("token");
    setUser(null);
    toast.success("You have successfully logged out");
  }

  return { login, logOut };
};

export default useAuth;

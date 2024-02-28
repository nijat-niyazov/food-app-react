import { useLocalStorage } from "@/hooks";
import { ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const { pathname } = useLocation();
  const { getItem } = useLocalStorage("user");

  const userData = getItem();
  const isAdmin = userData?.role === "admin" || true;
  const isEditor = false;

  let content: ReactNode | JSX.Element = null;

  if (isAdmin) content = <Outlet />;
  else if (isEditor) content = pathname.includes("/admin") ? <Navigate to="/not-admin" replace /> : <Outlet />;
  else content = <Navigate to="/unauth" replace />;

  return content;
};

export default AuthLayout;

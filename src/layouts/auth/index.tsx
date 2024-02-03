import { useAuth } from "@/stores/auth";
import { ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const { pathname } = useLocation();
  const { email, password } = useAuth((state) => state);

  let isAdmin = email === "admin@admin.com" && password === "admin";
  let isEditor = email === "editor@editor.com" && password === "editor";

  let content: ReactNode | JSX.Element = null;

  if (isAdmin) content = <Outlet />;
  else if (isEditor) content = pathname.includes("/admin") ? <Navigate to="/not-admin" replace /> : <Outlet />;
  else content = <Navigate to="/unauth" replace />;

  return content;
};

export default AuthLayout;

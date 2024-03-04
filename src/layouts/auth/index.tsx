import { useCookies } from "@/hooks";
import { ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const { pathname } = useLocation();
  const { getCookie } = useCookies();

  const token = getCookie("token");
  const isEditor = token?.includes("editor") || true;
  const isAdmin = token?.includes("admin") || true;

  const hasAccessToAllPages = token && (isAdmin || isEditor);

  const hasNoAccessToAdminPages = token && !isAdmin && !isEditor;
  const isTryingToAccessAdmin = pathname.includes("/admin");

  let content: ReactNode | JSX.Element = null;
  if (hasAccessToAllPages) {
    content = <Outlet />;
  } else if (hasNoAccessToAdminPages && isTryingToAccessAdmin) {
    content = <Navigate to="/not-admin" />;
  } else if (hasNoAccessToAdminPages && !isTryingToAccessAdmin) {
    content = <Outlet />;
  } else {
    const redirectTo = `?redirectTo=${encodeURIComponent(pathname)}`;
    content = <Navigate to={`/unauth${redirectTo}`} />;
  }

  return content;
};

export default AuthLayout;

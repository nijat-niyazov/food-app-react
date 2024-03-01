import { Footer, Header } from "@/components";
import SideComponents from "@/components/side-components";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const { pathname } = useLocation();

  // useEffect(() => {
  //   if (!pathname.includes("admin") || !pathname.includes("editor")) {
  //     if (sessionStorage.getItem("activeTab")) {
  //       sessionStorage.removeItem("activeTab");
  //     } else if (sessionStorage.getItem("activeCategoryTab")) {
  //       sessionStorage.removeItem("activeCategoryTab");
  //     }
  //   }
  // }, [pathname]);

  return (
    <div className="min-h-screen">
      {/* <div className="bg-text ">
        <div className="bg-white rounded-b-3xl pb-10 "> */}

      <Header />
      {/* <AlertDialogDemo /> */}
      <Outlet />
      {/* <GoToUp /> */}
      <Footer />
      {/* <Console /> */}

      <SideComponents />
    </div>
  );
};

export default MainLayout;

import { CustomModal, Footer, Header } from "@/components";
import toast, { ToastBar, Toaster } from "react-hot-toast";
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
      <CustomModal />
      <Outlet />
      {/* <GoToUp /> */}
      <Footer />
      {/* <Console /> */}

      <Toaster
        toastOptions={{
          success: {
            duration: 2000,
            className: "text-white whitespace-nowrap bg-secondary max-w-[700px]",
          },
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <button className="flex items-center" onClick={() => toast.dismiss(t.id)}>
                {icon}
                {message}
              </button>
            )}
          </ToastBar>
        )}
      </Toaster>
    </div>
  );
};

export default MainLayout;

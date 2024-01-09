import { CustomModal, Footer, GoToUp, Header } from "@/components";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      {/* <div className="bg-text ">
        <div className="bg-white rounded-b-3xl pb-10 "> */}
      <Header />
      {/* <AlertDialogDemo /> */}
      <CustomModal />

      <Outlet />
      {/* </div> */}
      {/* </div> */}
      <GoToUp />
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
          },
        }}
      />
    </div>
  );
};

export default MainLayout;

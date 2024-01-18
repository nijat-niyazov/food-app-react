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

      <GoToUp />
      <Footer />

      {/* <Console /> */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          className: "w-full whitespace-nowrap bg-primary  ",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
            width: "100%",
            height: "10%",
          },
        }}
      />
    </div>
  );
};

export default MainLayout;

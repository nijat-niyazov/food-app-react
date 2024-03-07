import { Footer, Header } from "@/components";
import SideComponents from "@/components/side-components";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      {/* <div className="bg-text ">
        <div className="bg-white rounded-b-3xl pb-10 "> */}

      <Header />
      {/* <AlertDialogDemo /> */}
      <Outlet />

      {/* <Carousel /> */}

      {/* <GoToUp /> */}
      <Footer />
      {/* <Console /> */}

      <SideComponents />
    </div>
  );
};

export default MainLayout;

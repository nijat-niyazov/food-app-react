import { Footer, GoToUp, Header } from "@//components";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      {/* <div className="bg-text ">
        <div className="bg-white rounded-b-3xl pb-10 "> */}
      <Header />

      <Outlet />
      {/* </div> */}
      {/* </div> */}
      <GoToUp />
      <Footer />
    </div>
  );
};

export default MainLayout;

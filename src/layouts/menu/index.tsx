import { BasketDev } from "@/components/";
import { LandingMenu, MenuItems } from "@/sections/menu";
import { Outlet } from "react-router-dom";

const MenuLayout = () => {
  return (
    <div className=" mb-10">
      <LandingMenu />

      <div className="grid grid-cols-[1fr_2fr_1fr] items-start justify-start container gap-5">
        <MenuItems />
        <Outlet />
        <BasketDev />
      </div>

      {/* <Offers /> */}
    </div>
  );
};

export default MenuLayout;

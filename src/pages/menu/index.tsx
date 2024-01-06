import { BasketDev } from "@/components/";
import { LandingMenu, Meals, Menus } from "@/sections/menu";

const MenuPage = () => {
  return (
    <div className=" mb-10">
      <LandingMenu />

      <div className="grid grid-cols-[1fr_2fr_1fr] items-start justify-start container gap-5">
        <Menus />
        <Meals />
        <BasketDev />
      </div>

      {/* <Offers /> */}
    </div>
  );
};

export default MenuPage;

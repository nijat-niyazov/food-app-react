import { LandingMenu, Meals, Menus } from "@//sections/menu";

const MenuPage = () => {
  return (
    <div className=" mb-10">
      <LandingMenu />

      <Menus />
      <Meals />

      {/* <Offers /> */}
    </div>
  );
};

export default MenuPage;

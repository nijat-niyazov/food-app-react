import { BasketDev } from "@/components/";
import { Categories, LandingMenu, MenuSearch } from "@/sections/menu";
import { Outlet } from "react-router-dom";

// let tabs = [
//   { id: "world", label: "World" },
//   { id: "ny", label: "N.Y." },
//   { id: "business", label: "Business" },
//   { id: "arts", label: "Arts" },
//   { id: "science", label: "Science" },
// ];

const MenuLayout = () => {
  // let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className=" mb-10">
      <LandingMenu />

      <div className="hidden md:flex container items-center justify-between mb-10 ">
        <h1 className="font-semibold text-3xl">Order without waiter</h1>
        <MenuSearch className=" max-w-80 placeholder:px-16" />
      </div>

      <div className="grid md:grid-cols-[1fr_2fr_1fr] items-start container gap-5">
        <Categories />
        <MenuSearch className="md:hidden" />
        <Outlet />

        <BasketDev className="hidden md:block" />
      </div>

      {/* <Offers /> */}
    </div>
  );
};

export default MenuLayout;

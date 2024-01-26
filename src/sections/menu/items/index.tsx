import { alkoqolsuz, breakfast, burger, cheese, desert, fast_food, georgian, main, menu_book, salad, snacks, soup } from "@/assets/images";
import { MotionDiv } from "@/components";
import { NavLink } from "react-router-dom";

const MenuItems = () => {
  return (
    <MotionDiv
      // initial={{
      //   y: 50,
      //   opacity: 0,
      // }}
      // animate={{ y: 0, opacity: 100 }}
      // transition={{
      //   duration: 0.3,
      //   delay: 0.2,
      // }}
      className="hidden md:flex items-center justify-between  sticky top-5 z-10 mb-10 w-full "
    >
      <div className="border-1 border-black/10 rounded-xl w-full">
        <div className="flex items-center gap-5 py-3 px-12 border-b-1 border-black/10">
          <img src={menu_book} alt="" />
          <p className="text-black font-semibold text-3xl">Menu</p>
        </div>

        <div className="grid gap-5 md:max-h-[84vh] overflow-hidden hover:overflow-y-scroll">
          <NavLink
            to={"/menu/menu"}
            className={({ isActive }) =>
              [
                isActive ? "bg-text text-white cursor-default" : "text-text hover:text-white hover:bg-text/90",
                "  font-bold  text-text text-xl px-8 py-2 flex gap-3 items-center   ",
              ].join(" ")
            }
          >
            <img src={fast_food} alt="" className="w-12 h-12 object-cover" /> Offers
          </NavLink>
          <NavLink
            to={"/menu/fast-food"}
            className={({ isActive }) =>
              [
                isActive ? "bg-text text-white cursor-default" : "text-text hover:text-white hover:bg-text/90",
                "  font-bold  text-text text-xl px-8 py-2 flex gap-3 items-center  ",
              ].join(" ")
            }
          >
            <img src={burger} alt="" className="w-12 h-12" /> Fast&Food
          </NavLink>
          <NavLink
            to={"/menu/f"}
            className={({ isActive }) =>
              [
                isActive ? "bg-text text-white cursor-default" : "text-text hover:text-white hover:bg-text/90",
                " font-bold  text-text text-xl px-8 py-2 flex gap-3 items-center  ",
              ].join(" ")
            }
          >
            <img src={georgian} alt="" className="w-12 h-12" /> Pasta
          </NavLink>
          <NavLink
            to={"/menu/e"}
            className={({ isActive }) =>
              [
                isActive ? "bg-text text-white cursor-default" : "text-text hover:text-white hover:bg-text/90",
                " font-bold  text-text text-xl px-8 py-2 flex gap-3 items-center  ",
              ].join(" ")
            }
          >
            <img src={main} alt="" className="w-12 h-12" /> Main
          </NavLink>
          <NavLink
            to={"/menu/e"}
            className={({ isActive }) =>
              [
                isActive ? "bg-text text-white cursor-default" : "text-text hover:text-white hover:bg-text/90",
                " font-bold  text-text text-xl px-8 py-2 flex gap-3 items-center  ",
              ].join(" ")
            }
          >
            <img src={soup} alt="" className="w-12 h-12" /> Soup
          </NavLink>
          <NavLink
            to={"/menu/e"}
            className={({ isActive }) =>
              [
                isActive ? "bg-text text-white cursor-default" : "text-text hover:text-white hover:bg-text/90",
                " font-bold  text-text text-xl px-8 py-2 flex gap-3 items-center  ",
              ].join(" ")
            }
          >
            <img src={cheese} alt="" className="w-12 h-12" /> Vegetarian
          </NavLink>
          <NavLink
            to={"/menu/drinks"}
            className={({ isActive }) =>
              [
                isActive ? "bg-text text-white cursor-default" : "text-text hover:text-white hover:bg-text/90",
                " font-bold  text-text text-xl px-8 py-2 flex gap-3 items-center  ",
              ].join(" ")
            }
          >
            <img src={alkoqolsuz} alt="" className="w-12 h-12" /> Drinks
          </NavLink>
          <NavLink
            to={"/menu/salads"}
            className={({ isActive }) =>
              [
                isActive ? "bg-text text-white cursor-default" : "text-text hover:text-white hover:bg-text/90",
                " font-bold  text-text text-xl px-8 py-2 flex gap-3 items-center  ",
              ].join(" ")
            }
          >
            <img src={salad} alt="" className="w-12 h-12" /> Salads
          </NavLink>
          <NavLink
            to={"/menu/q"}
            className={({ isActive }) =>
              [
                isActive ? "bg-text text-white cursor-default" : "text-text hover:text-white hover:bg-text/90",
                " font-bold  text-text text-xl px-8 py-2 flex gap-3 items-center  ",
              ].join(" ")
            }
          >
            <img src={desert} alt="" className="w-12 h-12" /> Desserts
          </NavLink>
          <NavLink
            to={"/menu/q"}
            className={({ isActive }) =>
              [
                isActive ? "bg-text text-white cursor-default" : "text-text hover:text-white hover:bg-text/90",
                " font-bold  text-text text-xl px-8 py-2 flex gap-3 items-center  ",
              ].join(" ")
            }
          >
            <img src={breakfast} alt="" className="w-12 h-12" /> Breakfast
          </NavLink>
          <NavLink
            to={"/menu/special"}
            className={({ isActive }) =>
              [
                isActive ? "bg-text text-white cursor-default" : "text-text hover:text-white hover:bg-text/90",
                " font-bold  text-text text-xl px-8 py-2 flex gap-3 items-center   ",
              ].join(" ")
            }
          >
            <img src={snacks} alt="" className="w-12 h-12" /> Special Request
          </NavLink>
        </div>
      </div>
    </MotionDiv>
  );
};

export default MenuItems;

import { menu_book } from "@/assets/images";
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

        <div className="grid gap-5 md:max-h-[84vh] hover:overflow-y-scroll">
          <NavLink
            to={"/menu/menu"}
            className={({ isActive }) =>
              [
                isActive ? "bg-text text-white" : "text-text ",
                " font-bold text-text text-xl px-8 py-2  ",
              ].join(" ")
            }
          >
            Offers
          </NavLink>
          <NavLink
            to={"/menu/fast-food"}
            className={({ isActive }) =>
              [
                isActive ? "bg-text text-white" : "text-text ",
                " font-bold text-text text-xl px-8 py-2 ",
              ].join(" ")
            }
          >
            Fast&Food
          </NavLink>
          <NavLink
            to={"/menu/f"}
            className={({ isActive }) =>
              [
                isActive ? "bg-text text-white" : "text-text ",
                " font-bold text-text text-xl px-8 py-2 hover:bg-text/50 ",
              ].join(" ")
            }
          >
            Pasta
          </NavLink>
          <NavLink
            to={"/menu/e"}
            className={({ isActive }) =>
              [
                isActive ? "bg-text text-white" : "text-text ",
                " font-bold text-text text-xl px-8 py-2 hover:bg-text/50 ",
              ].join(" ")
            }
          >
            Vegetarian
          </NavLink>
          <NavLink
            to={"/menu/drinks"}
            className={({ isActive }) =>
              [
                isActive ? "bg-text text-white" : "text-text ",
                " font-bold text-text text-xl px-8 py-2 hover:bg-text/50 ",
              ].join(" ")
            }
          >
            Drinks
          </NavLink>
          <NavLink
            to={"/menu/salads"}
            className={({ isActive }) =>
              [
                isActive ? "bg-text text-white" : "text-text ",
                " font-bold text-text text-xl px-8 py-2 hover:bg-text/50 ",
              ].join(" ")
            }
          >
            Salads
          </NavLink>
          <NavLink
            to={"/menu/q"}
            className={({ isActive }) =>
              [
                isActive ? "bg-text text-white" : "text-text ",
                " font-bold text-text text-xl px-8 py-2 hover:bg-text/50 ",
              ].join(" ")
            }
          >
            Desserts
          </NavLink>
          <NavLink
            to={"/menu/special"}
            className={({ isActive }) =>
              [
                isActive ? "bg-text text-white" : "text-text ",
                " font-bold text-text text-xl px-8 py-2  ",
              ].join(" ")
            }
          >
            Special Request
          </NavLink>
        </div>
      </div>
    </MotionDiv>
  );
};

export default MenuItems;

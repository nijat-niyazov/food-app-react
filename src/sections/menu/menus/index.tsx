import { MotionDiv } from "@//components";
import { NavLink } from "react-router-dom";

const Menus = () => {
  return (
    <MotionDiv
      initial={{
        y: 50,
        opacity: 0,
      }}
      animate={{ y: 0, opacity: 100 }}
      transition={{
        duration: 0.3,
        delay: 0.2,
      }}
      className="hidden md:flex items-center justify-between py-10 sticky top-0 z-10 bg-faq mb-10"
    >
      <div className="container">
        <NavLink
          to={"/menu/menu"}
          className={({ isActive }) =>
            [
              isActive ? "bg-text text-white" : "text-text ",
              " font-bold text-text text-xl px-8 rounded-full py-2  ",
            ].join(" ")
          }
        >
          Offers
        </NavLink>
        <NavLink
          to={"/menu/c"}
          className={({ isActive }) =>
            [
              isActive ? "bg-text text-white" : "text-text ",
              " font-bold text-text text-xl px-8 rounded-full py-2 ",
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
              " font-bold text-text text-xl px-8 rounded-full py-2 hover:bg-text/50 ",
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
              " font-bold text-text text-xl px-8 rounded-full py-2 hover:bg-text/50 ",
            ].join(" ")
          }
        >
          Vegetarian
        </NavLink>
        <NavLink
          to={"/menu/k"}
          className={({ isActive }) =>
            [
              isActive ? "bg-text text-white" : "text-text ",
              " font-bold text-text text-xl px-8 rounded-full py-2 hover:bg-text/50 ",
            ].join(" ")
          }
        >
          Drinks
        </NavLink>
        <NavLink
          to={"/menu/e"}
          className={({ isActive }) =>
            [
              isActive ? "bg-text text-white" : "text-text ",
              " font-bold text-text text-xl px-8 rounded-full py-2 hover:bg-text/50 ",
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
              " font-bold text-text text-xl px-8 rounded-full py-2 hover:bg-text/50 ",
            ].join(" ")
          }
        >
          Desserts
        </NavLink>
      </div>
    </MotionDiv>
  );
};

export default Menus;

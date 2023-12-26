import { Clock } from "@//assets/icons";
import { fast_food, offer, plus } from "@//assets/images";
import { MotionDiv } from "@//components";
import { NavLink } from "react-router-dom";

const MenuPage = () => {
  return (
    <div className="container mb-10">
      <MotionDiv
        initial={{
          x: "10%",
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="relative mb-20"
      >
        <img
          src={fast_food}
          alt="fast_food"
          className=" brightness-50 opacity-30"
        />
        <p className="bg-primary flex items-center justify-center rounded-r-xl absolute bottom-0 left-0 translate-y-1/2 py-4 px-16 gap-4 ">
          <Clock />

          <span className="text-white text-lg font-semibold">
            Open until 3:00 AM
          </span>
        </p>
      </MotionDiv>

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
        className="flex items-center justify-between py-10 sticky top-0 z-10 bg-white"
      >
        <NavLink
          to={"/menu"}
          className={({ isActive }) =>
            [
              isActive ? "bg-text text-white" : "text-text bg-white",
              " font-bold text-text text-xl px-8 rounded-full py-2  ",
            ].join(" ")
          }
        >
          Offers
        </NavLink>
        <NavLink
          to={"/c"}
          className={({ isActive }) =>
            [
              isActive ? "bg-text text-white" : "text-text bg-white",
              " font-bold text-text text-xl px-8 rounded-full py-2 ",
            ].join(" ")
          }
        >
          Fast&Food
        </NavLink>
        <NavLink
          to={"/f"}
          className={({ isActive }) =>
            [
              isActive ? "bg-text text-white" : "text-text bg-white",
              " font-bold text-text text-xl px-8 rounded-full py-2 hover:bg-text/50 ",
            ].join(" ")
          }
        >
          Pasta
        </NavLink>
        <NavLink
          to={"/e"}
          className={({ isActive }) =>
            [
              isActive ? "bg-text text-white" : "text-text bg-white",
              " font-bold text-text text-xl px-8 rounded-full py-2 hover:bg-text/50 ",
            ].join(" ")
          }
        >
          Vegetarian
        </NavLink>
        <NavLink
          to={"/k"}
          className={({ isActive }) =>
            [
              isActive ? "bg-text text-white" : "text-text bg-white",
              " font-bold text-text text-xl px-8 rounded-full py-2 hover:bg-text/50 ",
            ].join(" ")
          }
        >
          Drinks
        </NavLink>
        <NavLink
          to={"/e"}
          className={({ isActive }) =>
            [
              isActive ? "bg-text text-white" : "text-text bg-white",
              " font-bold text-text text-xl px-8 rounded-full py-2 hover:bg-text/50 ",
            ].join(" ")
          }
        >
          Salads
        </NavLink>
        <NavLink
          to={"/q"}
          className={({ isActive }) =>
            [
              isActive ? "bg-text text-white" : "text-text bg-white",
              " font-bold text-text text-xl px-8 rounded-full py-2 hover:bg-text/50 ",
            ].join(" ")
          }
        >
          Desserts
        </NavLink>
      </MotionDiv>

      <ul className="grid gap-x-5 gap-y-10 grid-cols-3">
        {[...new Array(14)].map((_, i) => (
          <li
            key={i}
            className="flex gap-4 items-start border-1 border-black/10  rounded-xl p-6 offer-shadow"
          >
            <div className="grid h-full text-text p-1 flex-1">
              <h1 className="font-semibold text-xl">
                Royal Cheese Burger with extra Fries
              </h1>

              <p className="text-sm">
                1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
              </p>

              <span className="text-lg font-bold">AZN 33.33</span>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={offer}
                alt="offer"
                className="object-cover min-w-48 min-h-48 "
              />
              <button className="absolute bg-white/90 rounded-[45px_0_12px_0] right-0 bottom-0 ">
                <img src={plus} alt="pls" className="p-[18px_15px_14px_24px]" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuPage;

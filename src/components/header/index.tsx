import { Shopping } from "@/assets/icons";
import { basket, girl, logo } from "@/assets/images";
import { useBasketStore } from "@/stores/basket";
import { openModal } from "@/stores/modal";
import { Link } from "react-router-dom";
import { Basket } from "..";
import { Auth, HeaderSearch, MenuToggler, NavigationOfHeader, Theme } from "./components";

let authorized = true;

const Header = () => {
  const totalItemsOfBasket = useBasketStore((state) => state.totalItems);
  const totalPrice = useBasketStore((state) => state.totalPrice);

  return (
    <header className=" mb-10">
      <div className="hidden md:flex container justify-between mb-10 items-center rounded-b-xl pl-5 bg-grey border-1 border-black/10">
        <p className="text-[15px] font-medium text-text">
          🌟 Get 5% Off your first order, <span className="font-bold text-primary border-b-1 border-primary">Promo: ORDER5</span>
        </p>

        <Theme />

        <ul className="flex items-strech bg-secondary rounded-b-xl text-base font-semibold text-white ">
          <li className="border-r-1  border-white px-6   border-opacity-30 relative">
            <button onClick={() => openModal(<Basket />, 90)}>
              <Shopping />
              <span className="absolute px-2 text-center rounded-full bg-primary top-1 right-2">{totalItemsOfBasket}</span>
            </button>
          </li>
          <li className="border-r-1  border-white px-6  border-opacity-30 ">{totalItemsOfBasket} Items</li>
          <li className="border-r-1  border-white px-6  border-opacity-30 ">AZN {totalPrice}</li>
        </ul>
      </div>

      <div className="container flex items-center justify-between">
        <Link to={"/"}>
          <img src={logo} />
        </Link>

        <HeaderSearch />

        <NavigationOfHeader />

        <div className="md:hidden">
          <Theme />
        </div>

        <MenuToggler />

        <Auth authorized={authorized} />
      </div>

      {/* <div className="w-1/3 mx-auto">
        <LoginForm />
      </div> */}

      <div className="border-t-2 flex  w-full md:hidden">
        <div className="w-1/2 p-4  bg-bej flex-centered gap-4">
          {authorized ? (
            <>
              <img src={girl} className="w-11 h-11 rounded-full object-cover" />
              <div>
                <h3 className="text-primary text-sm font-semibold">Aycan</h3>
                <Link className="text-text text-xs border-b-2 border-text font-normal" to={"/"}>
                  My Account
                </Link>
              </div>
            </>
          ) : (
            <button className="text-lg font-medium">Login/Signup</button>
          )}
        </div>

        <div className="w-1/2 p-4  bg-secondary flex-centered gap-4">
          <img src={basket} className="w-11 h-11 object-cover" />
          <p className="text-white text-base  font-semibold font-poppins">GBP 79.89</p>
        </div>
      </div>
    </header>
  );
};

export default Header;

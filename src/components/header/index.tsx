import { Shopping } from "@/assets/icons";
import { basket, logo } from "@/assets/images";
import { useBasketStore } from "@/stores/basket";
import { useCustomOrderState } from "@/stores/custom-order";
import { openModal } from "@/stores/modal";
import { useUserStore } from "@/stores/user";
import { convertToTwoDecimalFloat } from "@/utils";
import { Link } from "react-router-dom";
import { Basket } from "..";
import { Auth, MenuToggler, MobileAuth, NavigationOfHeader, Theme } from "./components";

const Header = () => {
  const { totalPrice, totalItems: totalItemsOfBasket } = useBasketStore((state) => state);
  const { totalItemsCustomOrders, totalPriceOfCustomOrders } = useCustomOrderState((state) => state);

  const totalItems = totalItemsOfBasket + totalItemsCustomOrders;

  const price = totalPrice + totalPriceOfCustomOrders;
  const discount = (price * 5) / 100;
  const totalPay = convertToTwoDecimalFloat(price - discount);

  const userData = useUserStore((state) => state.user);

  return (
    <header className=" mb-6">
      <div className="hidden md:flex container justify-between mb-10 items-center rounded-b-xl pl-5 bg-grey border-1 border-black/10">
        <p className="text-[15px] font-medium text-text">
          🌟 Get 5% Off your first order, <span className="font-bold text-primary border-b-1 border-primary">Promo: ORDER5</span>
        </p>

        <Theme />

        <ul className="grid grid-cols-[auto_auto_auto] bg-secondary rounded-b-xl text-base font-semibold text-white ">
          <li className="border-r-1  border-white px-6   border-opacity-30 relative">
            <button onClick={() => openModal(<Basket />, 90)}>
              <Shopping />
              <span className="absolute px-2 text-center rounded-full bg-primary top-1 right-2">{totalItems}</span>
            </button>
          </li>
          <li className="border-r-1  border-white px-6  border-opacity-30 ">{totalItems} Items</li>
          <li className="border-r-1  border-white px-6  border-opacity-30 ">AZN {totalPay}</li>
        </ul>
      </div>

      <div className="container flex items-center justify-between gap-10">
        <Link to={"/"}>
          <img src={logo} className="w-52" />
        </Link>

        {/* <HeaderSearch /> */}

        <div className="grow">
          <NavigationOfHeader />
        </div>

        <div className="md:hidden">
          <Theme />
        </div>

        <MenuToggler />
        <div className="hidden md:block">
          <Auth userData={userData} />
        </div>
      </div>

      <div className="border-t-2 flex  w-full md:hidden">
        <div className="w-1/2 p-4  bg-bej flex-centered gap-4">
          <MobileAuth userData={userData} />
        </div>

        <div className="w-1/2 p-4  bg-secondary flex-centered gap-4">
          <img src={basket} className="w-11 h-11 object-cover" />
          <p className="text-white text-base  font-semibold font-poppins">AZN {totalPay}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;

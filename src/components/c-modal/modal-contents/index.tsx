import { ArrowDown } from "@//assets/icons";
import { menu_book } from "@//assets/images";

const MenuModal = () => {
  return (
    <>
      <div className="  flex gap-2 items-center p-8">
        <img src={menu_book} alt="menu" />
        <span className="font-semibold text-text text-[32px]">Menu</span>
      </div>

      <h5 className="text-sm text-white bg-black py-8">
        <span className="pl-8 text-xl font-bold">Meal</span>
      </h5>

      <ul className="mt-2 font-bold text-xl p-8 flex-col flex gap-5">
        <li className="flex items-center justify-between">
          Meal
          <span className="-rotate-90">
            <ArrowDown />
          </span>
        </li>
        <li className="flex items-center justify-between">
          Drinks
          <span className="-rotate-90">
            <ArrowDown />
          </span>
        </li>
        <li className="flex items-center justify-between">
          Coffee
          <span className="-rotate-90">
            <ArrowDown />
          </span>
        </li>
      </ul>
    </>
  );
};

export default MenuModal;

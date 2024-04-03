import { ArrowDown } from "@/assets/icons";
import { menu_book } from "@/assets/images";
import { closeModal } from "@/stores/modal";
import { cn } from "@/utils";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

const menuItems = [
  { url: "/", title: "Home" },
  { url: "/menu/fast-food", title: "Menu", items: ["Breakfast", "Lunch", "Dinner"] },
  { url: "/branches", title: "Branches", items: ["Soft Drinks", "Hard Drinks", "Juices"] },
];

const MenuModal = () => {
  const { pathname } = useLocation();

  return (
    <Fragment>
      <div className="  flex gap-2 items-center p-8">
        <img src={menu_book} alt="menu" />
        <span className="font-semibold text-text text-[32px]">Menu</span>
      </div>

      <h5 className="text-sm text-white bg-black py-8">
        <span className="pl-8 text-xl font-bold">Meal</span>
      </h5>

      <ul className="mt-2 font-bold text-xl p-8 flex-col flex gap-3">
        {menuItems.map((item, i) => {
          return (
            <motion.li
              key={i}
              initial={{ x: "50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
            >
              <Link
                onClick={closeModal}
                to={item.url}
                className={cn("flex items-center justify-between py-1 ", { "text-primary pointer-events-none": pathname === item.url })}
              >
                {item.title}
                <span className="-rotate-90">
                  <ArrowDown />
                </span>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default MenuModal;

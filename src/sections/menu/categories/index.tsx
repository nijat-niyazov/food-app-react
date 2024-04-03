import { alkoqolsuz, breakfast, burger, cheese, desert, georgian, main, menu_book, salad, snacks, soup } from "@/assets/images";
import { CustomButton } from "@/components/ui";
import DropdownMenu from "@/components/ui/dropdown";
import { kebabToString } from "@/utils";
import { Menu } from "@headlessui/react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  // { name: "Offers", path: "offers", img: fast_food },
  { name: "Fast Food", path: "fast-food", img: burger },
  { name: "Pasta", path: "pasta", img: georgian },
  { name: "Main", path: "main", img: main },
  { name: "Soup", path: "soup", img: soup },
  { name: "Vegetarian", path: "vegetarian", img: cheese },
  { name: "Drinks", path: "drinks", img: alkoqolsuz },
  { name: "Salads", path: "salads", img: salad },
  { name: "Desserts", path: "desserts", img: desert },
  { name: "Breakfast", path: "breakfast", img: breakfast },
  { name: "Special Request", path: "special", img: snacks },
];

const Categories = () => {
  const { pathname } = useLocation();

  const activePath = pathname.split("/").at(-1) as string;

  const triggerer = (
    <CustomButton variant="outlined" borderRadius="full" className="md:hidden text-opacity-70">
      {kebabToString(activePath)}
    </CustomButton>
  );

  return (
    <div className="md:flex items-center justify-between  md:sticky md:top-5 z-10 md:mb-10 w-full ">
      <aside className="border-1 border-black/10 rounded-xl w-full">
        <div className="flex items-center gap-5 py-3 px-5 md:px-12 border-b-1 border-black/10 justify-between">
          <p className="flex items-center gap-2">
            <img src={menu_book} alt="" />
            <span className="text-black font-semibold text-3xl">Menu</span>
          </p>

          <DropdownMenu triggerer={triggerer}>
            <ul className="grid gap-5 md:max-h-[84vh] overflow-hidden hover:overflow-y-scroll max-h-[50vh] overflow-y-auto py-5">
              {links.map(({ name, img, path }) => (
                <Menu.Item as="li" key={name.toLowerCase()}>
                  {() => (
                    <NavLink
                      to={`/menu/${path}`}
                      className={({ isActive }) =>
                        [
                          isActive ? "bg-text text-white cursor-default" : "text-text hover:text-white hover:bg-text/90",
                          "  font-semibold  text-text text-base p-2 flex gap-3 items-center   ",
                        ].join(" ")
                      }
                    >
                      <img src={img} alt="" className="w-10 h-10 object-cover" /> {name}
                    </NavLink>
                  )}
                </Menu.Item>
              ))}
            </ul>
          </DropdownMenu>
        </div>

        <ul className="md:grid gap-5 md:max-h-[84vh] overflow-hidden hover:overflow-y-scroll hidden">
          {links.map(({ name, img, path }, i) => (
            <li key={i}>
              <NavLink
                to={`/menu/${path}`}
                className={({ isActive }) =>
                  [
                    isActive ? "bg-text text-white cursor-default" : "text-text hover:text-white hover:bg-text/90",
                    "  font-bold  text-text text-xl px-8 py-2 flex gap-3 items-center   ",
                  ].join(" ")
                }
              >
                <img src={img} alt="" className="w-12 h-12 object-cover" /> {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Categories;

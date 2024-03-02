import { alkoqolsuz, breakfast, burger, cheese, desert, fast_food, georgian, main, menu_book, salad, snacks, soup } from "@/assets/images";
import { MotionDiv } from "@/components";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Offers", path: "offers", img: fast_food },
  {
    name: "Fast Food",
    path: "fast-food",
    img: burger,
  },
  {
    name: "Pasta",
    path: "f",
    img: georgian,
  },
  {
    name: "Main",
    path: "e",
    img: main,
  },
  {
    name: "Soup",
    path: "e",
    img: soup,
  },
  {
    name: "Vegetarian",
    path: "e",
    img: cheese,
  },
  {
    name: "Drinks",
    path: "drinks",
    img: alkoqolsuz,
  },
  {
    name: "Salads",
    path: "salads",
    img: salad,
  },
  {
    name: "Desserts",
    path: "q",
    img: desert,
  },
  {
    name: "Breakfast",
    path: "q",
    img: breakfast,
  },
  {
    name: "Special Request",
    path: "special",
    img: snacks,
  },
];
const Categories = () => {
  return (
    <MotionDiv className="hidden md:flex items-center justify-between  sticky top-5 z-10 mb-10 w-full ">
      <div className="border-1 border-black/10 rounded-xl w-full">
        <div className="flex items-center gap-5 py-3 px-12 border-b-1 border-black/10">
          <img src={menu_book} alt="" />
          <p className="text-black font-semibold text-3xl">Menu</p>
        </div>

        <div className="grid gap-5 md:max-h-[84vh] overflow-hidden hover:overflow-y-scroll">
          {links.map(({ name, img, path }, i) => (
            <NavLink
              key={i}
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
          ))}
        </div>
      </div>
    </MotionDiv>
  );
};

export default Categories;

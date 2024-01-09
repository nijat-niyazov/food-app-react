import { offer } from "@/assets/images";
import { MealType } from "@/constants/types/meal";
import { useScrollDirection } from "@/useHooks";
import AddToOrderBtn from "./add-to-order";
import Options from "./options";

const meals: MealType[] = [
  {
    id: 1,
    title: "Farm House Xtreme Pizza",
    img: offer,
    description:
      "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    options: [
      { id: 11, price: 21.9, size: "Small" },
      { id: 12, price: 25.9, size: "Medium" },
      { id: 13, price: 27.9, size: "Large" },
      { id: 14, price: 32.9, size: "XL Large with Sauces" },
    ],
  },
  {
    id: 3,
    title: "Fryday Burger",
    // price: 21.9,
    img: offer,
    options: [{ id: 31, price: 21.9 }],
    description:
      "Hot, crispy, tender chicken breast in a soft bun with a spicy sauce and fresh lettuce",
  },
  {
    id: 4,
    title: "Coca Cola",
    // price: 3.9,
    img: offer,
    options: [
      { id: 41, price: 21.9, size: "Small" },
      { id: 42, price: 25.9, size: "Medium" },
      { id: 43, price: 27.9, size: "Large" },
    ],
    description: "Cold drink ",
  },
  {
    id: 2,
    title: "Farm House Xtreme Pizza",
    img: offer,
    description:
      "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    options: [
      { id: 21, price: 21.9, size: "Small" },
      { id: 22, price: 25.9, size: "Medium" },
      { id: 23, price: 27.9, size: "Large" },
      { id: 24, price: 32.9, size: "XL Large with Sauces" },
    ],
  },
];

const Meals = () => {
  const scrollDirection = useScrollDirection();

  return (
    <div className="container">
      {/* <div
        style={{
          top: scrollDirection === "down" ? "-100%" : "10px",
        }}
        className="border-black border-1 rounded-lg px-5 py-2 flex mb-5 items-center justify-between sticky transitial-all duration-300 ease-in-out bg-white"
      >
        <div className="flex items-center gap-2">
          <img src={menu_book} alt="menu_book" />
          <h4 className="text-3xl font-semibold">Menu</h4>
        </div>

        <p>Pizzas</p>
      </div> */}

      <div className="flex items-center justify-between mb-6">
        <h4 className="text-3xl font-semibold">Pizzas</h4>
        <button className="px-6 py-4 bg-grey text-base rounded-full  border-1 border-black/10">
          Sort by Price
        </button>
      </div>

      <ul className="flex flex-col gap-10">
        {meals.map((meal) => (
          <li
            key={meal.id}
            className="rounded-xl bg-white border-1 border-black/10 px-4 py-8  offer-shadow"
          >
            <div className="grid grid-cols-[1fr_auto] gap-3 mb-5 items-start justify-between px-4">
              <h4 className="text-xl font-semibold text-text">{meal.title}</h4>
              <img
                src={meal.img}
                alt={meal.title}
                className="w-28 h-28 object-cover rounded-full row-span-2"
              />
              <p className="text-sm mb-5">{meal.description}</p>
            </div>

            {meal?.options?.length > 1 ? (
              <Options meal={meal} options={meal.options} />
            ) : (
              <AddToOrderBtn meal={meal} selected={meal.options[0]} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Meals;

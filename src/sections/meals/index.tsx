import { menu_book, offer } from "@//assets/images";
import { useScrollDirection } from "@//useHooks";
import AddToOrderBtn from "./add-to-order";
import Options from "./optiions";

const meals = [
  {
    id: 1,
    title: "Farm House Xtreme Pizza",
    img: offer,
    description:
      "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    options: [
      { id: 1, price: 21.9, size: "Small" },
      { id: 2, price: 25.9, size: "Medium" },
      { id: 3, price: 27.9, size: "Large" },
      { id: 4, price: 32.9, size: "XL Large with Sauces" },
    ],
  },
  {
    id: 3,
    title: "Fryday Burger",
    img: offer,
    description:
      "Hot, crispy, tender chicken breast in a soft bun with a spicy sauce and fresh lettuce",
  },
  {
    id: 2,
    title: "Farm House Xtreme Pizza",
    img: offer,
    description:
      "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    options: [
      { id: 1, price: 21.9, size: "Small" },
      { id: 2, price: 25.9, size: "Medium" },
      { id: 3, price: 27.9, size: "Large" },
      { id: 4, price: 32.9, size: "XL Large with Sauces" },
    ],
  },
];

const Meals = () => {
  const scrollDirection = useScrollDirection();

  return (
    <div className="container">
      <div
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
      </div>

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
            <div className="px-4">
              <div className="flex gap-3 mb-5 items-start justify-between">
                <h4 className="text-xl font-semibold text-text">
                  {meal.title}
                </h4>

                <img
                  src={meal.img}
                  alt={meal.title}
                  className="w-28 h-28 object-cover rounded-full"
                />
              </div>
              <p className="text-sm mb-5">{meal.description}</p>
            </div>
            {meal.options ? (
              <Options options={meal.options} />
            ) : (
              <AddToOrderBtn selected />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Meals;

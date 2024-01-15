import { soup } from "@/assets/images";
import { Link } from "react-router-dom";

const meals = [
  { id: 1, img: soup, category: "Soups", count: 20 },
  { id: 2, img: soup, category: "Soups", count: 20 },
  { id: 3, img: soup, category: "Soups", count: 20 },
  { id: 4, img: soup, category: "Soups", count: 20 },
  { id: 5, img: soup, category: "Soups", count: 20 },
  { id: 6, img: soup, category: "Soups", count: 20 },
];

const MealCategories = () => {
  return (
    <>
      <h4 className="text-text text-[16px] md:text-3xl font-bold ">
        Order.uk Popular Categories 🤩
      </h4>
      <ul className="grid gap-4 grid-cols-2 md:grid-cols-6 ">
        {meals.map((meal, i) => (
          <li key={meal.id} className="grid rounded-xl overflow-hidden">
            <Link className="w-full" to={"/"}>
              <div className=" overflow-hidden">
                <img
                  src={meal.img}
                  alt="meal"
                  className="w-[190px] h-[160px] md:w-[240px] md:h-[200px] object-cover slow-spin  "
                  style={{
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              </div>
              <ul className="grid py-2 px-4  bg-text text-white text-sm">
                <li className="text-primary font-bold md:text-lg">
                  {meal.category}
                </li>
                <li>{meal.count} Options</li>
              </ul>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MealCategories;

import { breakfast, fast, main, pasta, soup } from "@/assets/images/popular";
import { Swapper } from "@/components/ui";

const meals = [
  { id: 1, img: fast, url: "fast-food", category: "Fast Food", count: 20 },
  { id: 3, img: pasta, url: "pasta", category: "Pasta", count: 20 },
  { id: 4, img: main, url: "main", category: "Main", count: 20 },
  { id: 5, img: breakfast, url: "breakfast", category: "Breakfast", count: 20 },
  { id: 6, img: soup, url: "soup", category: "Soupsoup", count: 20 },
  { id: 11, img: fast, url: "fast-food", category: "Fast Food", count: 20 },
  { id: 33, img: pasta, url: "pasta", category: "Pasta", count: 20 },
  { id: 44, img: main, url: "main", category: "Main", count: 20 },
  { id: 55, img: breakfast, url: "breakfast", category: "Breakfast", count: 20 },
  { id: 66, img: soup, url: "soup", category: "Soupsoup", count: 20 },
];

const PopularCategories = () => {
  return (
    <section className="overflow-hidden">
      <h4 className="text-text text-base md:text-3xl font-bold mb-5 md:mb-10 ">Order.uk Popular Categories 🤩</h4>

      <Swapper options={{ loop: true, align: "start" }}>
        <ul className="flex">
          {meals.map((meal) => (
            <li key={meal.id} className="shrink-0 px-1 md:px-3 w-1/2 md:w-1/5 cursor-grab active:cursor-grabbing">
              <div className="rounded-xl overflow-hidden ">
                <img src={meal.img} alt="meal" className="h-40 md:h-48 object-cover w-full " />
                <ul className="grid py-2 px-4  bg-text text-white text-sm">
                  <li className="text-primary font-bold md:text-lg">{meal.category}</li>
                  <li>{meal.count} Options</li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </Swapper>
    </section>
  );
};

export default PopularCategories;

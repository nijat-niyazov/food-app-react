import { offer } from "@/assets/images";
import { Link } from "react-router-dom";

const meals = [
  { id: 1, img: offer, url: "fast-food", category: "Fast Food", count: 20 },
  { id: 2, img: offer, url: "drinks", category: "Drinks", count: 20 },
  { id: 3, img: offer, url: "pasta", category: "Pasta", count: 20 },
  { id: 4, img: offer, url: "main", category: "Main", count: 20 },
  { id: 5, img: offer, url: "special-request", category: "Offer", count: 20 },
  { id: 6, img: offer, url: "makaron", category: "Soups", count: 20 },
  { id: 11, img: offer, url: "hamsi", category: "Fast Food", count: 20 },
  { id: 22, img: offer, url: "kaflaar", category: "Drinks", count: 20 },
  { id: 33, img: offer, url: "ukrain", category: "Pasta", count: 20 },
  { id: 44, img: offer, url: "inanilmaz", category: "Main", count: 20 },
  { id: 55, img: offer, url: "hulk", category: "Offer", count: 20 },
  { id: 66, img: offer, url: "deep", category: "sonuncu", count: 20 },
];

const MealCategories = () => {
  return (
    <section className="overflow-hidden">
      <h4 className="text-text text-base md:text-3xl font-bold mb-5 md:mb-10 ">Order.uk Popular Categories 🤩</h4>

      {/* <MainEmblaCarousel> */}
      <ul className="flex">
        {meals.map((meal) => (
          <li
            key={meal.id}
            className="shrink-0 rounded-xl overflow-hidden  w-[calc((100%-35px)/2)] mx-3 md:w-[calc((100%-200px)/5)]  md:mx-5"
          >
            <Link className="w-full" to={`/menu/${meal.url}`}>
              <img src={meal.img} alt="meal" className=" h-40 md:h-48 object-cover w-full " />
              <ul className="grid py-2 px-4  bg-text text-white text-sm">
                <li className="text-primary font-bold md:text-lg">{meal.category}</li>
                <li>{meal.count} Options</li>
              </ul>
            </Link>
          </li>
        ))}
      </ul>
      {/* </MainEmblaCarousel> */}
    </section>
  );
};

export default MealCategories;

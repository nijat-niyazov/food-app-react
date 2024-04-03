import { StorageImage } from "@/components";
import { MealType } from "@/constants/types/meal";
import AddToOrderBtn from "../add-to-order";
import Options from "../options";

type MealProps = { meal: MealType };

const Meal = ({ meal }: MealProps) => {
  return (
    <li className="rounded-lg bg-white border-1 border-black/10 px-3 pb-8 md:px-7 md:pb-5 offer-shadow">
      <div className="grid grid-cols-[1fr_auto] mb-5 items-start justify-between gap-x-10 mt-6 mr-3 md:mt-7 md:mr-1 pl-1 md:pl-0">
        <h4 className="text-xl md:text-2xl font-semibold text-text">{meal.title}</h4>
        <StorageImage
          path="menu"
          src={meal.img}
          alt="meal_img"
          className="w-28 h-28 md:w-48 md:h-48 object-cover rounded-full row-span-2 md:row-span-3 mb-5 md:mb-0"
        />

        <ul className="flex items-center gap-0.5 text-xl">
          {[...new Array(5)].map((_, i) => (
            <li key={i}>⭐</li>
          ))}
        </ul>

        <p className="text-sm col-span-2 md:col-span-1">{meal.description}</p>
      </div>

      {meal?.options?.length > 1 ? (
        <Options meal={meal} options={meal.options} />
      ) : (
        <AddToOrderBtn meal={meal} selected={meal.options[0]} />
      )}
    </li>
  );
};

export default Meal;

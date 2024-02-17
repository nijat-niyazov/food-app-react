import { MealType } from "@/constants/types/meal";
import AddToOrderBtn from "../add-to-order";
import Options from "../options";

type MealProps = { meal: MealType };

const Meal = ({ meal }: MealProps) => {
  return (
    <li className="rounded-xl bg-white border-1 border-black/10 px-4 py-8  offer-shadow">
      <div className="grid grid-cols-[1fr_auto] gap-3 mb-5 items-start justify-between px-4">
        <h4 className="text-xl font-semibold text-text">{meal.title}</h4>
        <img src={meal.img} alt={meal.title} className="w-28 h-28 object-cover rounded-full row-span-2" />
        <p className="text-sm mb-5">{meal.description}</p>
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

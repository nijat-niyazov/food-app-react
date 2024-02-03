import { CustomButton } from "@/components";
import { MealType } from "@/constants/types/meal";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  meals: MealType[];
};

const AdminMeals: FC<Props> = ({ meals }) => {
  const navigate = useNavigate();

  return meals.map((meal, i) => (
    <li key={i} className="flex flex-col justify-between   gap-2 p-2 px-4 border-1 border-black/20 rounded-md ">
      {/* ---------------------------------- Image --------------------------------- */}
      <img src={meal.img} alt="img" className="object-cover rounded-full mx-auto w-28 h-28" />

      {/* --------------------------------- Header --------------------------------- */}
      <header className="font-semibold text-md">
        <span className="underline select-none text-secondary text-base font-normal">Title :</span> <br />
        <h3>{meal.title}</h3>
      </header>

      {/* ------------------------------- Description ------------------------------ */}
      <span className="text-sm font-medium ">
        <span className="underline select-none text-secondary text-base font-normal"> Description :</span> <br />
        {meal.description}
      </span>

      {/* --------------------------------- Options -------------------------------- */}
      <div className="grow">
        <span className="underline select-none text-secondary text-base">Options :</span>
        {meal.options.length === 1 ? (
          <h3 className="text-sm font-medium">Only one option</h3>
        ) : (
          <ul className="text-sm font-medium">
            {meal.options.map((option, i) => {
              return (
                <li className="flex items-center justify-between " key={i}>
                  <span>
                    {i + 1}. {option.size}
                  </span>
                  <span>{option.price} $</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <CustomButton onClick={() => navigate(`/editor/${meal.id}`)} variant="secondary" className="mt-3">
        Edit
      </CustomButton>
    </li>
  ));
};

export default AdminMeals;

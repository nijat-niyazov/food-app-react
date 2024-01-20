import { MealSkeleton } from "@/components/skeletons";
import { MealType } from "@/constants/types/meal";
import { getMenuItems } from "@/libs/menu";
import { AddToOrderBtn, Options } from "@/sections/menu";
import { useScrollDirection } from "@/useHooks";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

type QueryType = {
  data: MealType[];
  isPending: boolean;
  error?: string | null;
};

const Meals = () => {
  const scrollDirection = useScrollDirection();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = useState(0);
  const { pathname, search } = useLocation();

  const { category } = useParams();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  // : { data: MealType[]; isPending: boolean; error?: string | null }
  const {
    isPending,
    error,
    data: meals,
  } = useQuery({
    queryKey: ["menuData", category],
    queryFn: getMenuItems,
  });

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
        <button
          onClick={() => {
            console.log("sort");

            // navigate(`${pathname + search}?sort=priceHigh`);
          }}
          className="px-6 py-4 bg-grey text-base rounded-full  border-1 border-black/10"
        >
          Sort by Price
        </button>
      </div>

      <ul className="flex flex-col gap-10">
        {isPending ? (
          [...new Array(4)].map((_, i) => <MealSkeleton index={i} key={i} />)
        ) : !meals.length ? (
          <h3>Something went wrong</h3>
        ) : (
          meals[category as string].map((meal: MealType) => (
            <li
              key={meal.id}
              className="rounded-xl bg-white border-1 border-black/10 px-4 py-8  offer-shadow"
            >
              <div className="grid grid-cols-[1fr_auto] gap-3 mb-5 items-start justify-between px-4">
                <h4 className="text-xl font-semibold text-text">
                  {meal.title}
                </h4>
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
          ))
        )}
      </ul>
    </div>
  );
};

export default Meals;

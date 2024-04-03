import { MealType } from "@/constants/types/meal";
import { useScrollDirection } from "@/hooks";
import { getMenuData } from "@/services/api/menu";

import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Meal from "./meal";
import Sorting from "./sorting";

type QueryType = { data: MealType[]; isPending: boolean; error?: string | null };

const Meals = () => {
  const scrollDirection = useScrollDirection();

  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  const { category } = useParams() as { category: string };

  const { isPending, data } = useQuery({
    queryKey: ["menu-category", category, search],
    queryFn: () => getMenuData(category),
  });

  return (
    <div>
      <Sorting category={category} />

      <ul className="flex flex-col gap-8 md:gap-10">
        {isPending
          ? [...new Array(4)].map((_, i) => <MealSkeleton index={i} key={i} />)
          : !isPending && data?.data
          ? data?.data.map((meal: MealType) => <Meal key={meal.id} meal={meal} />)
          : null}
      </ul>
    </div>
  );
};

export default Meals;

function MealSkeleton({ index }: { index: number }) {
  return (
    <li style={{ animationDelay: index * 5 + "s" }} className="rounded-xl bg-white border-1 border-black/10 px-4 py-8  offer-shadow">
      <div className="grid grid-cols-[1fr_auto] mb-5 items-start justify-between gap-x-10 mt-6 mr-3 md:mt-7 md:mr-1 pl-5 md:pl-0">
        <span className="text-xl font-semibold text-text bg-gray-300 rounded-full animate-pulse h-8 w-9/12"></span>

        <div className="w-28 h-28 bg-gray-300 rounded-full animate-pulse row-span-2"></div>

        <p className="bg-gray-300 rounded-full animate-pulse h-14"></p>
      </div>
    </li>
  );
}

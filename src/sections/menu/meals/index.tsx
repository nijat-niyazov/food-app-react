import { MealType } from "@/constants/types/meal";
import { useGetData, useScrollDirection } from "@/hooks";
import { getMenuItems } from "@/services/api/menu";

import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Sorting from "./sorting";

function MealSkeleton({ index }: { index: number }) {
  return (
    <li style={{ animationDelay: index * 5 + "s" }} className="rounded-xl bg-white border-1 border-black/10 px-4 py-8  offer-shadow">
      <div className="grid grid-cols-[1fr_auto] gap-3 mb-5 items-start justify-between px-4">
        <span className="text-xl font-semibold text-text bg-gray-200 rounded-full animate-pulse h-8"></span>

        <div className="w-28 h-28 bg-gray-200 rounded-full animate-pulse row-span-2"></div>

        <p className="bg-gray-200 rounded-full animate-pulse h-14"></p>
      </div>
    </li>
  );
}

type QueryType = { data: MealType[]; isPending: boolean; error?: string | null };

const Meals = () => {
  const scrollDirection = useScrollDirection();
  const [selected, setSelected] = useState(0);
  const { pathname, search } = useLocation();

  const { category } = useParams() as { category: "fast-food" | "drinks" };

  const navigate = useNavigate();

  // : { data: MealType[]; isPending: boolean; error?: string | null }
  const { isPending, error, data: meals } = useGetData(["menuData", category], getMenuItems);

  return (
    <div className="container">
      <Sorting category={category} />

      {/* <ul className="flex flex-col gap-10">
        {isPending ? [...new Array(4)].map((_, i) => <MealSkeleton index={i} key={i} />) : <Militos meals={meals} category={category} />}
      </ul> */}
    </div>
  );
};

export default Meals;

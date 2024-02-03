import { MealType } from "@/constants/types/meal";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AdminMeals from "./meal";
import CategoriesTabs from "./tabs";

/* -------------------------------- Skeletons ------------------------------- */
function MealSkeletons({ length }: { length: number }) {
  return Array.from({ length }).map((_, i) => <li key={i} className="animate-pulse bg-gray-500 rounded-md min-h-40" />);
}

function CategoriesSkeletons({ length }: { length: number }) {
  return Array.from({ length }).map((_, i) => <div key={i} className="animate-pulse bg-gray-500 rounded-full h-10 w-full" />);
}

type DataType = { "fast-food": MealType[]; drinks: MealType[] };

type Props = {
  isPending: boolean;
  data: DataType;
};

const AllMeals = ({ isPending, data }: Props) => {
  const valueOfSession = sessionStorage.getItem("activeCategoryTab") as string;

  const [activeTab, setActiveTab] = useState<number>(valueOfSession ? parseInt(valueOfSession) : 0);

  const handleActiveTab = useCallback((tab: number) => {
    setActiveTab(tab);
    sessionStorage.setItem("activeCategoryTab", tab.toString());
  }, []);

  /* ----------- Set Meals if is not pending or category is changed ----------- */
  const [searchParams, setSearchParams] = useSearchParams();
  const [meals, setMeals] = useState<MealType[]>([]);

  useEffect(() => {
    let category = "" as keyof DataType;
    console.log(activeTab, "activeTab");

    switch (activeTab) {
      case 1:
        category = "fast-food";
        break;
      case 2:
        category = "drinks";
        break;
    }

    if (!isPending) {
      const allMeals = Object.values(data).flat(1);
      setMeals(activeTab === 0 ? allMeals : data[category]);
    }

    category ? searchParams.set("category", category) : searchParams.delete("category");

    setSearchParams(searchParams, {
      replace: true,
    });
  }, [isPending, activeTab]);

  return (
    <div className="border-1 rounded-md border-black/30 container mt-5">
      <header className="flex items-center gap-5 ">
        {isPending ? (
          <CategoriesSkeletons length={7} />
        ) : (
          <CategoriesTabs activeTab={activeTab} handleActiveTab={handleActiveTab} data={Object.keys(data)} />
        )}
      </header>

      <ul className="grid gap-3 md:w-[78%] mx-auto mt-10 md:grid-cols-3">
        {isPending ? <MealSkeletons length={6} /> : <AdminMeals meals={meals} />}
      </ul>
    </div>
  );
};

export default AllMeals;

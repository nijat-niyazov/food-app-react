import { getMenuCategories, getMenuData } from "@/services/api/admin";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import AdminMeals from "./meals";
import CategoriesTabs from "./tabs";

type Props = {};

const AllMeals = (props: Props) => {
  const {
    isPending: isLoading,
    error: categoriesError,
    data: categories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getMenuCategories,
  });

  useEffect(() => {
    return () => {
      searchParams.delete("category");
      setSearchParams(searchParams, { replace: true });
    };
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "";

  const { isPending, error, data } = useQuery({
    queryKey: ["menuData", activeCategory],
    queryFn: getMenuData,
  });

  /* --------------------------- Contents of the file -------------------------- */
  let headerContent;

  if (isLoading) {
    headerContent = <CategoriesSkeletons length={7} />;
  } else {
    headerContent = <CategoriesTabs activeCategory={activeCategory} data={categories} />;
  }

  let bodyContent;
  if (isPending) {
    bodyContent = <MealSkeletons length={6} />;
  } else if (error) {
    bodyContent = "";
  } else if (!error && data && !isPending) {
    const allMeals = Object.entries(data)
      .map(([category, meals]) => meals)
      .flat(2);

    const meals = !activeCategory ? allMeals : data[activeCategory];

    bodyContent = <AdminMeals meals={meals} />;
  }

  return (
    <div className="border-1 rounded-md border-black/30 container mt-5">
      <header className="flex items-center gap-5  md:gap-20 justify-evenly  overflow-x-auto whitespace-nowrap">{headerContent}</header>

      {error && <div className="text-3xl flex-centered font-bold md:min-h-80">Nothing has found</div>}
      <ul className="grid gap-3 md:w-[78%] mx-auto mt-10 md:grid-cols-3">{bodyContent}</ul>
    </div>
  );
};

export default AllMeals;

/* -------------------------------- Skeletons ------------------------------- */
function MealSkeletons({ length }: { length: number }) {
  return Array.from({ length }).map((_, i) => (
    <li
      key={i}
      style={{
        animationDelay: `${i * 0.2}s`,
      }}
      className="animate-pulse bg-gray-500 rounded-md min-h-40"
    />
  ));
}

function CategoriesSkeletons({ length }: { length: number }) {
  return Array.from({ length }).map((_, i) => (
    <div
      key={i}
      style={{
        animationDelay: `${i * 0.2}s`,
      }}
      className="animate-pulse bg-gray-500 rounded-full h-10 w-full"
    />
  ));
}

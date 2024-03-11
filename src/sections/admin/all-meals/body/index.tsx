import { supabase } from "@/constants/supabase";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import AdminMeals from "../meals";

async function getMenu(category: string) {
  let query = supabase.from("menu").select("*");

  if (category) {
    query = query.eq("category_id", category);
  }

  return await query;
}

const Body = () => {
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") ?? "";

  const { isPending, data } = useQuery({ queryKey: ["menu", activeCategory], queryFn: () => getMenu(activeCategory) });

  let bodyContent: JSX.Element | null = null;
  if (isPending) {
    bodyContent = <MealSkeleton count={6} />;
  } else if (data?.data && !isPending) {
    bodyContent = <AdminMeals meals={data.data} />;
  }

  return <ul className="grid gap-3 mx-auto mt-10 md:grid-cols-4">{bodyContent}</ul>;
};

export default Body;

function MealSkeleton({ count }: { count: number }) {
  return Array.from({ length: count }).map((_, i) => (
    <li key={i} style={{ animationDelay: `${i * 0.2}s` }} className="animate-pulse bg-gray-500 rounded-md min-h-40" />
  ));
}

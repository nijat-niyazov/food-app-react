import { supabase } from "@/constants/supabase";
import { useQuery } from "@tanstack/react-query";
import CategoriesTabs from "../tabs";

async function getCategories() {
  return await supabase.from("menu_categories").select("*");
}

const Categories = () => {
  const { isPending, data } = useQuery({ queryKey: ["menu_categories"], queryFn: getCategories });

  let content: JSX.Element | null = null;

  if (isPending) {
    content = <CategoriesSkeleton count={7} />;
  } else if (!isPending && data?.data) {
    content = <CategoriesTabs data={data.data} />;
  }

  return <header className="flex items-center gap-5  md:gap-20 justify-evenly  overflow-x-auto whitespace-nowrap">{content}</header>;
};

export default Categories;

function CategoriesSkeleton({ count }: { count: number }) {
  return Array.from({ length: count }).map((_, i) => (
    <div key={i} style={{ animationDelay: `${i * 0.2}s` }} className="animate-pulse bg-gray-500 rounded-full h-10 w-full" />
  ));
}

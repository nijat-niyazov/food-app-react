import { supabase } from "@/constants/supabase";
import fetchData from "../";

const menuEndpoint = "menu";

const getMenuItems = () => fetchData(menuEndpoint, undefined, true);

export { getMenuItems };

async function getMenuData(category: string) {
  let query = supabase.from("menu").select("*");

  if (category) {
    query = query.eq("category_id", category);
  }

  return await query;
}
export { getMenuData };

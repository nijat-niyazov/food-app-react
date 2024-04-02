import { supabase } from "@/constants/supabase";

export async function getBasketItems() {
  await supabase.from("basket_items").select("*");
}

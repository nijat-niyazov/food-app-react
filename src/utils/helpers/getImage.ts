import { supabase } from "@/constants/supabase";

function getImage(path: string) {
  return supabase.storage.from("avatars").getPublicUrl(path).data.publicUrl;
}

export default getImage;

import { supabase } from "@/constants/supabase";

function getImage(path: string, src: string) {
  return supabase.storage.from(path).getPublicUrl(src).data.publicUrl;
}

export default getImage;

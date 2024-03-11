import { createClient } from "@supabase/supabase-js";

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string;
const supabaseUrl = "https://pcwpuipcmxaawwpivthd.supabase.co";

export const supabase = createClient(supabaseUrl, supabaseKey);

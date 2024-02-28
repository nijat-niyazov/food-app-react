import { supabase } from "@/constants/supabase";
import { LoginInputs } from "@/forms/auth/login/fields-validation";
import { SignUpInputs } from "@/forms/auth/signup/fields-validation";

export async function registerUser(values: SignUpInputs) {
  return await supabase.auth.signUp(values);
}

export async function loginUser(values: LoginInputs) {
  return await supabase.auth.signInWithPassword(values);
}

export async function signOut() {
  return await supabase.auth.signOut();
}

import { MySpinner } from "@/assets/icons";
import { CustomButton } from "@/components/ui";
import { closeModal, openModal } from "@/stores/modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { supabase } from "@/constants/supabase";
import { useLocalStorage } from "@/hooks";
import { LoginForm } from "../..";
import { CustomInput } from "../../custom-elements";
import Oauth2 from "../oauth2";
import { SignUpInputs, SignUpSchema, SignUpSchemaType, fields } from "./fields-validation";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
    setError,
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const { setItem } = useLocalStorage();

  const onSubmit: SubmitHandler<SignUpInputs> = async (values) => {
    // const { success } = await delay(3000);
    const { email, password, ...rest } = values;

    const userData = {
      email,
      password,
      options: {
        data: {
          ...rest,
        },
      },
    };

    const {
      data: { session, user },
      error,
    } = await supabase.auth.signUp(userData);

    if (!error && user && session) {
      console.log(session, user);

      setItem("user", { user: user.user_metadata, access_token: session?.access_token, refresh_token: session?.refresh_token });

      toast.success("You successfully registered");
      closeModal();

      // window.location.reload();

      // setCookie("token", session?.access_token);
    } else if (error && error.status === 400) {
      setError("email", { message: error.message });
      toast.error("Registration failed. Please check your inputs.");
    } else {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="p-4">
      <header className="grid gap-3 mb-5">
        <h4 className="text-3xl font-semibold text-oranged">Sign up</h4>
        <Oauth2 />
      </header>

      <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ field, type, placeholder }, i) => (
          <CustomInput error={errors[field]?.message} key={i} placeholder={placeholder} type={type} field={field} register={register} />
        ))}

        <CustomButton disabled={!isValid || isSubmitting} variant="primary" type="submit" className="disabled:opacity-50">
          {!isSubmitting ? "Sign up" : <MySpinner />}
        </CustomButton>
      </form>

      <CustomButton variant="transparent" size="xs" onClick={() => openModal(<LoginForm />)} className="underline">
        Have an account? Login
      </CustomButton>
    </div>
  );
}

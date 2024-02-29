import { MySpinner } from "@/assets/icons";
import { CustomButton } from "@/components";
import { useLocalStorage } from "@/hooks";
import { loginUser } from "@/services/api/auth";
import { closeModal, openModal } from "@/stores/modal";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { ForgotPasswordForm, SignUpForm } from "../..";
import { CustomInput } from "../../custom-elements";
import Oauth2 from "../oauth2";
import { LoginInputs, fields } from "./fields-validation";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
    setError,
  } = useForm<LoginInputs>();

  const navigate = useNavigate();
  const location = useLocation();
  const { setItem } = useLocalStorage("user");

  const onSubmit: SubmitHandler<LoginInputs> = async (values) => {
    // const {
    //   data: { session, user },
    //   error,
    // } = await supabase.auth.signInWithPassword(values);
    const {
      data: { session, user },
      error,
    } = await loginUser(values);

    if (!error && session && user) {
      console.log(session, user);

      toast.success("You logged in succesfully");
      const userData = { user: { ...user.user_metadata }, access_token: session.access_token, refresh_token: session.refresh_token };
      setItem(userData);
      closeModal();
      // window.location.reload();
    } else if (error && error.status === 400) {
      setError("password", { message: error.message });
      toast.error("Unmatched fields ☹ Please check your inputs.");
    } else {
      toast.error("Something went wrong");
    }
  };

  const [check, setCheck] = useState(false);

  return (
    <div className="p-4">
      <header className="grid gap-3 mb-5 ">
        <h4 className="text-3xl font-semibold text-primary ">Sign in</h4>
        <Oauth2 />
      </header>

      <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ field, type, placeholder }, i) => (
          <CustomInput error={errors[field]?.message} key={i} placeholder={placeholder} type={type} field={field} register={register} />
        ))}

        <div className="flex items-center justify-between ">
          <div className="flex items-center justify-center gap-1 px-1">
            <input checked={check} onChange={() => setCheck(!check)} id="remember" type="checkbox" className="w-4 h-4 accent-primary" />
            <label htmlFor="remember" className="text-sm">
              Remember me
            </label>
          </div>
          <CustomButton
            variant="outlined"
            size="sm"
            onClick={() => openModal(<ForgotPasswordForm />)}
            className="hover:underline  w-auto font-semibold !p-0"
          >
            Forgot password ?
          </CustomButton>
        </div>

        <CustomButton disabled={!isValid || isSubmitting} variant="primary" type="submit" className="disabled:opacity-50 text-md">
          {!isSubmitting ? "Sign in" : <MySpinner />}
        </CustomButton>
      </form>

      <CustomButton variant="outlined" size="xs" onClick={() => openModal(<SignUpForm />)} className="underline">
        Don't have an account? Sign up now
      </CustomButton>
    </div>
  );
}

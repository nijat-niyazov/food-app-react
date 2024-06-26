import { MySpinner } from "@/assets/icons";
import { CustomButton } from "@/components/ui";
import { UserInterface } from "@/constants/types/auth";
import useAuth from "@/hooks/auth/useAuth";
import { loginUser } from "@/services/api/auth";
import { closeModal, openModal } from "@/stores/modal";
import { parseUser } from "@/utils";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ForgotPasswordForm, SignUpForm } from "../..";
import { CustomInput } from "../../custom-elements";
import Oauth2 from "../oauth2";
import { LoginInputs, fields } from "./fields-validation";

export default function LoginForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const prevVisited = searchParams.get("redirectTo") ?? "/";

  const varis = "/some";
  const urlComponent = encodeURIComponent(varis);
  const urlVe = encodeURI(varis);

  const norComponent = decodeURIComponent(urlVe);
  const normVe = decodeURI(urlVe);
  console.log({ varis, urlComponent, urlVe, norComponent, normVe });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
    setError,
  } = useForm<LoginInputs>();

  const { login } = useAuth();

  const onSubmit: SubmitHandler<LoginInputs> = async (values) => {
    const {
      data: { session, user },
      error,
    } = await loginUser(values);

    if (!error && session && user) {
      const { access_token: token, refresh_token } = session;
      const loggedUser = parseUser(user as UserInterface);

      login(token, refresh_token, loggedUser);
      navigate(prevVisited);
      closeModal();
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
        <h4 className="text-3xl font-semibold text-primary ">Login</h4>
        <Oauth2 />
      </header>

      <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ field, type, placeholder }) => (
          <CustomInput error={errors[field]?.message} key={field} placeholder={placeholder} type={type} field={field} register={register} />
        ))}

        <div className="flex items-center justify-between ">
          <div className="flex items-center justify-center gap-1 px-1">
            <input checked={check} onChange={() => setCheck(!check)} id="remember" type="checkbox" className="w-4 h-4 accent-primary" />
            <label htmlFor="remember" className="text-sm font-medium">
              Remember me
            </label>
          </div>
          <CustomButton
            variant="transparent"
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

      <CustomButton variant="transparent" size="xs" onClick={() => openModal(<SignUpForm />)} className="underline">
        Don't have an account? Sign up now
      </CustomButton>
    </div>
  );
}

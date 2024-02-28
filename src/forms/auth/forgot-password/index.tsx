import { MySpinner } from "@/assets/icons";
import { CustomButton } from "@/components";
import { projectURL } from "@/constants/config";
import { supabase } from "@/constants/supabase";
import { useCountDown } from "@/hooks";
import { openModal } from "@/stores/modal";
import { SubmitHandler, useForm } from "react-hook-form";

import { CustomInput } from "@/forms/custom-elements";
import LoginForm from "../login";
import { fields } from "./fields-validation";

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
    setError,
  } = useForm<{ email: string }>();

  const { remainingTime, start } = useCountDown(10);

  const onSubmit: SubmitHandler<{ email: string }> = async (values) => {
    start();
    // const { success } = await delay(3000);

    const { data, error } = await supabase.auth.resetPasswordForEmail(values.email, {
      redirectTo: projectURL,
    });

    console.log(data, error);

    // console.log({ data, error });

    // if (!error && session && user) {
    //   console.log({ session, user });

    //   toast.success("Sent to you");

    // } else if (error && error.status === 400) {
    //   // setError("password", { message: error.message });
    //   toast.error("Unmatched fields ☹ Please check your inputs.");
    // } else {
    //   toast.error("Something went wrong");
    // }
  };

  return (
    <div className="p-4">
      <header className="grid gap-3 mb-5 ">
        <h4 className="text-3xl font-semibold text-primary ">Login</h4>
        <span className="flex gap-2 text-sm">
          Back to
          <button onClick={() => openModal(<LoginForm />)} className="underline">
            Login
          </button>
        </span>
      </header>

      <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ field, type, placeholder }, i) => (
          <div key={i}>
            <label htmlFor={field} className="font-semibold pl-1">
              Your email
            </label>
            <CustomInput id={field} error={undefined} placeholder={placeholder} type={type} field={field} register={register} />
          </div>
        ))}

        <CustomButton
          disabled={!isValid || isSubmitting || remainingTime > 0}
          variant="primary"
          type="submit"
          className="disabled:opacity-50 text-md"
        >
          {remainingTime > 0 ? remainingTime : !isSubmitting ? "Submit" : <MySpinner />}
        </CustomButton>
      </form>
    </div>
  );
}

import { CustomButton } from "@/components/ui";
import { projectURL } from "@/constants/config";
import { supabase } from "@/constants/supabase";
import { useCountDown, useLocalStorage } from "@/hooks";
import { openModal } from "@/stores/modal";
import { SubmitHandler, useForm } from "react-hook-form";

import { CustomInput } from "@/forms/custom-elements";
import { cn } from "@/utils";
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

  const { remainingTime, start, timeIsOver } = useCountDown(120, "clicked");
  const { setItem } = useLocalStorage();

  const onSubmit: SubmitHandler<{ email: string }> = async (values) => {
    const currentTime = new Date().getTime();
    setItem("clicked", currentTime);

    start();

    const { data, error } = await supabase.auth.resetPasswordForEmail(values.email, {
      redirectTo: projectURL,
    });

    console.log(data, error);
  };

  return (
    <div className="p-4">
      <header className="grid gap-3 mb-5 ">
        <h4 className="text-3xl font-semibold text-primary ">Send message to email</h4>
      </header>

      <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ field, type, placeholder }, i) => (
          <div key={i}>
            <label htmlFor={field} className="font-semibold pl-1 flex items-center justify-between">
              Your email
            </label>
            <CustomInput id={field} error={undefined} placeholder={placeholder} type={type} field={field} register={register} />
          </div>
        ))}

        <footer className="flex items-center justify-between gap-3">
          <CustomButton
            disabled={!isValid || isSubmitting || !timeIsOver}
            variant="primary"
            type="submit"
            className="disabled:opacity-50 text-md flex-1"
          >
            Send Message
          </CustomButton>
          <CustomButton
            size="md"
            variant="secondary"
            className={cn("w-auto !px-2 bg-opacity-80 min-w-16  pointer-events-none", {
              "opacity-50": timeIsOver,
            })}
          >
            {remainingTime}
          </CustomButton>
        </footer>
      </form>
      <CustomButton variant="transparent" size="xs" onClick={() => openModal(<LoginForm />)} className="underline">
        Back to Login
      </CustomButton>
    </div>
  );
}

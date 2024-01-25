import { MySpinner } from "@/assets/icons";
import { CustomButton } from "@/components";
import { delay } from "@/libs/delay";
import { closeModal, openModal } from "@/stores/modal";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { SignUpForm } from "..";
import { CustomInput } from "../custom-elements";
import { LoginInputs, fields } from "./fields-validation";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
    setError,
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    const { success } = await delay(3000);

    if (success) {
      toast.success("You logged in succesfully");
      console.log(data);
      closeModal();
    } else {
      setError("password", { message: "Email and password is unmatched" });
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="p-4">
      <header className="grid gap-3 mb-5 ">
        <h4 className="text-3xl font-semibold text-primary ">Login</h4>
        <span className="flex gap-2 text-sm">
          Not have an account?
          <button onClick={() => openModal(<SignUpForm />)} className="underline">
            Sign up now
          </button>
        </span>
      </header>

      <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ field, type, placeholder }, i) => (
          <CustomInput error={errors[field]?.message} key={i} placeholder={placeholder} type={type} field={field} register={register} />
        ))}

        <button onClick={() => openModal(<SignUpForm />)} className="hover:underline font-semibold place-self-end px-3">
          Forgot password ?
        </button>

        <CustomButton disabled={!isValid || isSubmitting} variant="primary" type="submit" className="disabled:opacity-50 text-md">
          {!isSubmitting ? "Submit" : <MySpinner />}
        </CustomButton>
      </form>
    </div>
  );
}

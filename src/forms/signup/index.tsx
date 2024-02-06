import { MySpinner } from "@/assets/icons";
import { CustomButton } from "@/components";
import { delay } from "@/libs/delay";
import { closeModal, openModal } from "@/stores/modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { LoginForm } from "..";
import { CustomInput } from "../custom-elements";
import { SignUpInputs, SignUpSchema, SignUpSchemaType, fields } from "./fields-validation";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
    setError,
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit: SubmitHandler<SignUpInputs> = async (data) => {
    const { success } = await delay(3000);

    if (!success) {
      console.log(data);
      toast.success("You successfully registered");
      closeModal();
    } else {
      setError("email", {
        message: "Email is already taken",
      });
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="p-4">
      <header className="grid gap-3 mb-5">
        <h4 className="text-3xl font-semibold text-primary">Sign up</h4>
        <span className="flex gap-2 text-sm">
          Already registered?
          <button onClick={() => openModal(<LoginForm />)} className="underline">
            Login
          </button>
        </span>
      </header>
      <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ field, type, placeholder }, i) => (
          <CustomInput error={errors[field]?.message} key={i} placeholder={placeholder} type={type} field={field} register={register} />
        ))}

        <CustomButton disabled={isSubmitting} variant="primary" type="submit" className="disabled:opacity-50">
          {!isSubmitting ? "Submit" : <MySpinner />}
        </CustomButton>
      </form>
    </div>
  );
}

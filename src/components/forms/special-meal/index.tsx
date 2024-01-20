import { burger, chicken, meat, tuna } from "@/assets/images";
import { closeModal } from "@/stores/modal";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CustomButton } from "../..";
import { Checkbox, Input, Radio } from "../elements";

type Gender = {
  female: "female";
  male: "male";
  other: "other";
};

export type Inputs = {
  email: string;
  password: string;
  size: string;
  gender: Gender;
};

const SpecialMealForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors,
      isDirty,
      isValid,
      isSubmitting,
      isSubmitSuccessful,
      isLoading,
      dirtyFields,
      isValidating,
      disabled,
      isSubmitted,
      submitCount,
      touchedFields,
      defaultValues,
    },
    getValues,
    setValue,
    control,
    clearErrors,
    getFieldState,
    reset,
    resetField,
    trigger,
    unregister,
    setError,
    setFocus,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    closeModal();
  };

  const sizes = [
    {
      img: burger,
      name: "Med",
      des: "14 cm",
      id: "md",
      price: 5.99,
    },
    {
      img: burger,
      name: "Large",
      des: "18 cm",
      id: "l",
      price: 7.99,
    },
    { img: burger, name: "XL", des: "20 cm", id: "xl", price: 9.99 },
    { img: burger, name: "XXL", des: "25 cm", id: "xxl", price: 12.99 },
  ];

  const vegs = [
    {
      name: "Beef",
      id: "beef",
      img: meat,
    },
    {
      name: "Chicken",
      id: "chicken",
      img: chicken,
    },
    {
      name: "Tuna",
      id: "tuna",
      img: tuna,
    },
    {
      name: "Goki",
      id: "goki",
      img: tuna,
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4  grid gap-2">
      {currentStep === 1 && (
        <>
          <Input
            label="Your Email"
            register={register}
            required
            placeholder="Your Email..."
            // error={errors.email}
          />
          {errors.email && (
            <span className="text-red-600 font-medium">Email is required</span>
          )}

          <label htmlFor="password">
            Password <span className="text-red-500 font-medium">*</span>
          </label>

          <input
            id="password"
            className="rounded-lg border-1 border-black/50 p-2"
            placeholder="password"
            {...register("password", { required: true })}
          />

          {errors.password && (
            <span className="text-red-600 font-medium">
              This field is required
            </span>
          )}
        </>
      )}

      {currentStep === 0 && (
        <Radio label="Gender" register={register} required options={sizes} />
      )}

      {currentStep === 2 && (
        <Checkbox label="Vegs" register={register} required options={vegs} />
      )}

      <div className="flex gap-2 items-center justify-between">
        <CustomButton
          disabled={currentStep === 0}
          onClick={() => setCurrentStep((p) => p - 1)}
          type="button"
          variant="primary"
        >
          Go back
        </CustomButton>
        <CustomButton
          type={currentStep < 2 ? "button" : "submit"}
          variant="success"
          onClick={() => setCurrentStep((p) => p + 1)}
        >
          {currentStep < 2 ? "Next" : "Finish"}
        </CustomButton>
      </div>
    </form>
  );
};

export default SpecialMealForm;

import { options } from "@/constants/data/special-meal";
import { closeModal } from "@/stores/modal";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Checkbox, Radio } from "../elements";
import { Buttons, CategoryName, Step, TotalPrice } from "./form-parts";

export type Inputs = {
  size: string;
  ingredients: { category: string; options: string[] }[];
  condiments: { category: string; options: string[] }[];
  note: string;
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

  const [currentStep, setCurrentStep] = useState(0);

  const selectedMeal = options["pizza"];
  const maxSteps = selectedMeal.length + 1; // additional one for note
  const lastStep = currentStep + 1 === maxSteps;

  return (
    <div className="p-4   scale-75">
      <Step currentStep={currentStep} maxSteps={maxSteps} />

      <CategoryName
        name={
          currentStep < maxSteps - 1 // removing one for note
            ? selectedMeal[currentStep].categoryName
            : "Special Note"
        }
      />

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
        {currentStep === 0 && (
          <Radio
            label="Size"
            register={register}
            required
            choices={selectedMeal[currentStep].choices}
          />
        )}

        {currentStep === 1 && (
          <Checkbox
            label="Vegs"
            register={register}
            options={selectedMeal[currentStep].options}
          />
        )}

        {currentStep === 2 && (
          <Checkbox
            label="Condiments"
            register={register}
            options={selectedMeal[currentStep].options}
          />
        )}

        {currentStep === 3 && (
          <textarea
            placeholder="Write your special instructions here..."
            className="border-1 w-full border-black/30 rounded-md p-4 outline-none"
            {...register("note")}
          />
        )}

        <TotalPrice />

        <Buttons {...{ currentStep, setCurrentStep, lastStep, isValid }} />
      </form>
    </div>
  );
};

export default SpecialMealForm;

import { meals } from "@/constants/data/special-meal";
import { StepType } from "@/constants/types/spcieal-meal";
import { closeModal } from "@/stores/modal";
import { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Buttons, CategoryName, Step, TotalPrice } from "./form-parts";
import { Step1, Step2 } from "./steps";

type Inputs = {
  size: string;
  ingredients: {
    meat: string;
    cheese: string[] | false;
    vegitable: false | string[];
  };
  condiments: { condiments: string[] | false; extras: false | string[] };
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
    // clearErrors,
    // getFieldState,
    // reset,
    // resetField,
    // trigger,
    // unregister,
    // setError,
    // setFocus,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    closeModal();
  };

  console.log(watch("size"));

  /* ------------------------------- Step State ------------------------------- */
  const [currentStep, setCurrentStep] = useState<number>(0);

  const selectedMeal = meals["pizza"];
  const maxSteps = selectedMeal.length + 1; // additional one for note
  const lastStep = currentStep + 1 === maxSteps;

  const handleStep = useCallback((route?: "next") => setCurrentStep((prev) => prev + (route === "next" ? 1 : -1)), []);

  const [totalPrice, setTotalPrice] = useState(0);

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
          <Step1
            register={register}
            options={selectedMeal[0].options as StepType["options"]}
            // getTotalPrice={getTotalPrice}
          />
        )}

        {currentStep === 1 && <Step2 categories={selectedMeal[1].sub_catagories as StepType[]} register={register} />}

        {/* {currentStep === 2 && (
          <Checkbox
            fieldName="condiments"
            register={register}
            // // getTotalPrice={getTotalPrice}
            options={selectedMeal[currentStep].sub_catagories as StepType[]}
          />
        )} */}

        {currentStep === maxSteps + 1 && (
          <textarea
            placeholder="Write your special instructions here..."
            className="border-1 w-full border-black/30 rounded-md p-4 outline-none"
            {...register("note")}
          />
        )}

        {/* <CustomButton
          variant="primary"
          // onClick={() => getTotalPrice(watch("size"))}
        >
          Get
        </CustomButton> */}

        <TotalPrice totalPrice={totalPrice} />

        <Buttons
          {...{
            currentStep,
            handleStep,
            lastStep,
            isValid,
            disabled: watch("size"),
          }}
        />
      </form>
    </div>
  );
};

export default SpecialMealForm;

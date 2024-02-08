import { FC, useCallback, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Buttons, CategoryName, StepInfo, TotalPrice } from "./form-parts";
import { MultipleChoices, Note, Size } from "./steps";

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

type Props = {
  mealId: "burger" | "pizza";
  meals: any;
};

const SpecialMealForm: FC<Props> = ({ mealId, meals }) => {
  const stepsOfSelectedMeal = meals[mealId];
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
    // closeModal();
  };

  /* ------------------------------- Step State ------------------------------- */
  const [currentStep, setCurrentStep] = useState<number>(0);
  const maxSteps = stepsOfSelectedMeal.length + 1; // additional one for note
  const lastStep = currentStep + 1 === maxSteps;

  const handleStep = useCallback((route?: "next") => setCurrentStep((prev) => (route === "next" ? prev + 1 : prev - 1)), []);

  const steps = useMemo(
    () =>
      stepsOfSelectedMeal.map((step: any) => {
        const fieldName = step.categoryName.toLowerCase();

        switch (fieldName) {
          case "size":
            return {
              component: Size,
              options: step.options,
              fieldName,
            };
          default:
            return {
              component: MultipleChoices,
              options: step.sub_catagories,
              fieldName,
            };
        }
      }),
    [stepsOfSelectedMeal]
  );

  /* ------------------------------- Price State ------------------------------ */
  // const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className="p-10">
      <header>
        <StepInfo currentStep={currentStep} maxSteps={maxSteps} />

        <CategoryName
          name={
            currentStep < maxSteps - 1 // removing one for note
              ? stepsOfSelectedMeal[currentStep].categoryName
              : "Special Note"
          }
        />
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
        {steps.map(
          ({ component: Component, options, fieldName }, i) =>
            i === currentStep && <Component key={i} options={options} register={register} fieldName={fieldName} />
        )}

        {currentStep + 1 === maxSteps && <Note register={register} />}

        <footer className="flex items-center justify-between">
          <TotalPrice totalPrice={0} />

          <Buttons
            {...{
              currentStep,
              handleStep,
              lastStep,
              isValid,
              disabled: watch("size"),
            }}
          />
        </footer>
      </form>
    </div>
  );
};

export default SpecialMealForm;

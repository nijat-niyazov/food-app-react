import { meals } from "@/constants/data/special-meal";
import { SpecialMealType } from "@/constants/types/spcieal-meal";
import { delay } from "@/services/api/delay";
import { CustomOrderType, addCustomOrderToBasket } from "@/stores/custom-order";
import { closeModal } from "@/stores/modal";
import { useCallback, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Buttons, ConfirmList, StepInfo, TotalPrice } from "./form-parts";
import { MultipleChoices, Note, Size } from "./steps";
import { FormInputValues, InputValue, Price } from "./types";

import { v4 as uuidv4 } from "uuid";

type Props = {
  mealId: "burger" | "pizza";
  meals?: { [key: string]: SpecialMealType[] };
  defaultValues?: CustomOrderType;
};

const SpecialMealForm = ({ mealId, meals: milli, defaultValues }: Props) => {
  /* ------------------------------- Form State ------------------------------- */

  // console.log(defaultValues?.totalPrice);

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
      // defaultValues,
    },
    getValues,
    setValue,
    control,
    reset,
  } = useForm<FormInputValues>({
    defaultValues: defaultValues?.order,
  });

  const onSubmit: SubmitHandler<FormInputValues> = async (order) => {
    const id = uuidv4();

    const { success } = await delay(3000);
    if (success) {
      const data = { meal: mealId, order, totalPrice, price, id: defaultValues?.id ?? id };

      addCustomOrderToBasket(data);
      toast.success("Your order has been added to the draft");
      closeModal();
      reset();
    } else {
      toast.error("Something went wrong");
    }
  };

  const stepsOfSelectedMeal = meals[mealId];

  /* ------------------------------- Step State ------------------------------- */
  const [currentStep, setCurrentStep] = useState(0);
  const handleStep = useCallback((route?: "next") => setCurrentStep((prev) => prev + (route === "next" ? 1 : -1)), []);

  const maxSteps = stepsOfSelectedMeal.length + 2; // additionals for note and confirm list
  const lastStep = currentStep === maxSteps - 1;
  const noteStep = currentStep === maxSteps - 2;

  /* ------------------------------- Price State ------------------------------ */
  const [totalPrice, setTotalPrice] = useState<Price[]>(defaultValues?.totalPrice ?? []);

  function handleTotalPrice(values: Price, checked: boolean | null) {
    const { fieldName, id, price, name } = values;
    const exists = totalPrice.some((el) => el.fieldName === fieldName);

    let fields = [...totalPrice, values];
    if (typeof checked === "boolean") {
      fields = checked ? fields : totalPrice.filter((element) => element.id !== id);
    } else {
      fields = !exists ? fields : totalPrice.map((element) => (element.fieldName === fieldName ? { ...element, price, id } : element));
    }
    setTotalPrice(fields);
  }

  function handleChange(fieldName: keyof FormInputValues, value: InputValue, checked?: boolean) {
    handleTotalPrice({ fieldName, ...value }, checked ?? null);
  }

  const price = parseFloat(useMemo(() => totalPrice.reduce((acc, { price }) => acc + price, 0), [totalPrice]).toFixed(2));

  return (
    <div className="p-10 relative">
      <StepInfo
        currentStep={currentStep}
        maxSteps={maxSteps}
        name={!noteStep && !lastStep ? stepsOfSelectedMeal[currentStep].categoryName : noteStep ? "Special Note" : "Confirm List"}
      />

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2 ">
        {/* ---------------------------------- Size ---------------------------------- */}

        {stepsOfSelectedMeal.map((step, i) => {
          const field = step.categoryName.toLowerCase() as keyof FormInputValues;

          return i === 0 && currentStep === 0 ? (
            <div style={{ display: currentStep === i ? "block" : "none" }} key={i}>
              <Size fieldName={field} handleChange={handleChange} register={register} options={step.options!} />
            </div>
          ) : (
            <div style={{ display: currentStep === i ? "block" : "none" }} key={i}>
              <MultipleChoices fieldName={field} handleChange={handleChange} options={step.sub_categories!} register={register} />
            </div>
          );
        })}

        {noteStep && <Note register={register} />}
        {lastStep && <ConfirmList note={watch("note")} values={totalPrice} />}

        <footer className="flex items-center justify-between">
          <TotalPrice price={price} />

          <Buttons
            {...{
              isSubmitting,
              currentStep,
              handleStep,
              lastStep,
            }}
          />
        </footer>
      </form>
    </div>
  );
};

export default SpecialMealForm;

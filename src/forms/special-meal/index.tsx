import { options } from "@/constants/data/special-meal";
import { closeModal } from "@/stores/modal";
import { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Radio } from "../elements";
import { Buttons, CategoryName, Step, TotalPrice } from "./form-parts";

export type Inputs = {
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

  const [currentStep, setCurrentStep] = useState(0);

  const selectedMeal = options["pizza"];
  const maxSteps = selectedMeal.length + 1; // additional one for note
  const lastStep = currentStep + 1 === maxSteps;

  const handleStep = useCallback((route?: "forward") => setCurrentStep((prev) => prev + (route === "forward" ? 1 : -1)), []);

  const [totalPrice, setTotalPrice] = useState(0);

  // const getTotalPrice = (price: number, action: "reduce" | "increase") =>
  //   setTotalPrice((prev) =>
  //     action === "reduce" ? prev - price : prev + price
  //   );
  // //   []
  // // );

  // const disabled  =watch("size")

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
            fieldName="size"
            register={register}
            required
            // getTotalPrice={getTotalPrice}
            choices={selectedMeal[currentStep].choices!}
          />
        )}

        {/* {currentStep === 0 && (
          <ul className="grid gap-3 text-2xl font-semibold">
            {selectedMeal[currentStep]?.choices?.map((choice, i) => (
              <li key={choice.id} className="flex items-center gap-4">
                <input
                  id={choice.id}
                  value={choice.id}
                  type="radio"
                  className="rounded-md border-1 border-black/50 p-2 w-7 h-7 mr-3"
                  required
                  {...register("size")}
                />

                <label htmlFor={choice.id} className="flex items-center gap-2">
                  <img
                    src={choice.img}
                    alt={choice.des}
                    className="w-12 h-12"
                    style={{
                      width: (i + 10) * 5 + "px",
                      height: (i + 10) * 5 + "px",
                    }}
                  />
                  {choice.name}
                </label>

                <p className="italic font-normal ml-auto">${choice.price}</p>
              </li>
            ))}
          </ul>
        )} */}

        {/* {currentStep === 1 && (
          <Checkbox
            fieldName="ingredients"
            register={register}
            // // getTotalPrice={getTotalPrice}
            options={selectedMeal[currentStep].options}
          />
        )}

        {currentStep === 2 && (
          <Checkbox
            fieldName="condiments"
            register={register}
            // // getTotalPrice={getTotalPrice}
            options={selectedMeal[currentStep].options}
          />
        )}

        {currentStep === 3 && (
          <textarea
            placeholder="Write your special instructions here..."
            className="border-1 w-full border-black/30 rounded-md p-4 outline-none"
            {...register("note")}
          />
        )} */}

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

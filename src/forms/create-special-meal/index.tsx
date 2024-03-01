import { HeroPlus, Remove } from "@/assets/icons";
import { CustomButton } from "@/components/ui";
import { MealType } from "@/constants/types/meal";
import { SpecialMealType } from "@/constants/types/spcieal-meal";
import { cn } from "@/utils";
import { FC } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

type Props = {
  meals: { [key: string]: MealType[] };
};

type Inputs = {
  mealName: string;
} & SpecialMealType;

const CreateSpecialMealForm: FC<Props> = ({ meals }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
    setError,
    getValues,
    setValue,
    control,
  } = useForm<Inputs>({
    defaultValues: {
      // options: [{ name: "", price: 0,id:1 }],
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { mealName } = data;
    const values = { [mealName.toLowerCase()]: mealName };

    console.log(data, values);
  };

  const {
    fields: options,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "options",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3 w-1/2 mx-auto">
      <div>
        <label className="pl-0.5 font-semibold" htmlFor="mealName">
          Meal Name :
        </label>

        <div className={"rounded-md border-1  border-black/30 relative overflow-hidden"}>
          <input
            type="text"
            id="mealName"
            className="bg-outlined w-full  p-2 outline-none text-sm md:text-base"
            placeholder="Salad"
            {...register("mealName", { required: true })}
          />
        </div>
      </div>

      {/* -------------------------------- Title -------------------------------- */}
      {/* <MealTitle register={register} /> */}

      {/* -------------------------------- Description -------------------------------- */}
      {/* <MealDescription register={register} /> */}

      {/* --------------------------------- Options -------------------------------- */}

      <div>
        <label className="pl-0.5 font-semibold">Options:</label>

        <ul className="border-1 border-black/30 rounded-t-md transition-all duration-200">
          {options.map(({ id }, i) => (
            <li
              key={id}
              className={cn("w-full pt-2", {
                "border-t-1 ": i !== 0,
              })}
            >
              <label className="pl-3 font-semibold" htmlFor="option">
                Option {i + 1}
              </label>

              <div className="">
                {/* ---------------------------------- Name ---------------------------------- */}
                <div className="grid">
                  <label className="font-semibold" htmlFor="option">
                    Option Name
                  </label>
                  <input
                    className="border-1 border-black/30 p-2 rounded-md text-sm md:text-base outline-none"
                    type="text"
                    placeholder="Option name"
                    {...register(`options.${i}.name`, { required: true })}
                  />
                </div>
                {/* ---------------------------------- Price --------------------------------- */}
                <div className="grid">
                  <label className="font-semibold" htmlFor="option">
                    Price
                  </label>
                  <input
                    className="border-1 border-black/30 p-2 rounded-md text-sm md:text-base outline-none"
                    type="number"
                    placeholder="10"
                    {...register(`options.${i}.price`, { required: true })}
                  />
                </div>
                {/* ------------------------------- Description ------------------------------ */}
                <div className="grid">
                  <label className="font-semibold" htmlFor="option">
                    Description
                  </label>
                  <input
                    className="border-1 border-black/30 p-2 rounded-md text-sm md:text-base outline-none"
                    type="number"
                    placeholder="10"
                    {...register(`options.${i}.des`, { required: true })}
                  />
                </div>

                {/* ------------------------------- Remove BTN ------------------------------- */}
                <CustomButton disabled={options.length === 1} variant="outlined" onClick={() => remove(i)} className="!p-0">
                  <Remove />
                </CustomButton>
              </div>
            </li>
          ))}
        </ul>

        <CustomButton
          className="bg-bej text-black rounded-t-none"
          variant="secondary"
          disabled={options.length > 4}
          // onClick={() => append({ name: "", price: 0 })}
        >
          Add another option <HeroPlus />
        </CustomButton>
      </div>

      {/* <MealOptions register={register} control={control} /> */}

      {/* -------------------------------- Submit Button -------------------------------- */}
      <CustomButton
        // disabled={!isValid}
        variant="secondary"
        type="submit"
      >
        Submit Form
      </CustomButton>
    </form>
  );
};

export default CreateSpecialMealForm;

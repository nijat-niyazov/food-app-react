import { CustomButton } from "@/components";
import { cn } from "@/utils";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MealDescription, MealImage, MealOptions, MealTitle } from "./sections";

type Option = {
  name: string;
  price: number;
};

type Inputs = {
  category: string;
  file: any;
  title: string;
  description: string;
  options: Option[];
};

const statCategories = [
  { id: "fast-food", name: "Fast Food" },
  { id: "drinks", name: "Drinks" },
  { id: "main", name: "Main" },
  { id: "snacks", name: "Snacks" },
];

type Props = {
  defaultValues?: Inputs;
};

const defaultOptions = { options: [{ name: "", price: 0 }] };
const CreateMealForm: FC<Props> = ({ defaultValues }) => {
  /* ------------------------------ RH Form State ----------------------------- */
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
    setError,
    getValues,
    setValue,
    control,
  } = useForm<Inputs>({ defaultValues: Object.assign(defaultOptions, defaultValues) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { category, ...rest } = data;
    const findedCategory = statCategories.find((cat) => cat.name === category)?.id;
    const values = Object.assign(rest, { category: findedCategory });

    console.log(values);
  };

  /* ----------------------------- Category State ----------------------------- */
  const [show, setShow] = useState<boolean>(false);
  function handleSelectCategory(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    setValue("category", e.currentTarget.textContent as string);
    setShow(false);
  }

  const [categories, setCategories] = useState<{ id: string; name: string }[]>(statCategories);
  const categoryValue = watch("category");

  // useEffect(() => {
  //   if (categoryValue !== undefined) {
  //     setCategories(categories.filter(({ name }) => name.toLowerCase().includes(categoryValue?.toLowerCase())));
  //   }
  // }, [categoryValue]);

  return (
    <div className="container md:w-1/3 mx-auto mt-10">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
        {/* -------------------------------- Image -------------------------------- */}

        <MealImage setValue={setValue} defImg={getValues("file")} register={register} />

        {/* -------------------------------- Category -------------------------------- */}
        <div>
          <label className="pl-0.5 font-semibold" htmlFor="category">
            Category :
          </label>

          <div
            className={cn("rounded-md border-1  border-black/30 relative overflow-hidden", {
              "min-h-52": show,
            })}
          >
            <input
              onFocus={() => setShow(true)}
              type="text"
              id="category"
              className="bg-transparent w-full  p-2 outline-none text-sm md:text-base"
              placeholder="Fast-Food"
              {...register("category", { required: true })}
            />

            <ul
              className={cn("z-20 rounded-b-md absolute w-full none", {
                block: show,
              })}
            >
              {categories.length > 0 ? (
                categories.map(({ id, name }) => (
                  <li key={id} id={id} className="hover:bg-gray-300 p-2 cursor-pointer " onClick={handleSelectCategory}>
                    {name}
                  </li>
                ))
              ) : (
                <li
                  className="w-[80%] h-full mx-auto text-xl text-gray-500 font-semibold bg-red-500"
                  onClick={() => {
                    statCategories.push({ id: "new", name: watch("category") });

                    setCategories(statCategories);
                    setShow(false);
                  }}
                >
                  Click here to create new category
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* -------------------------------- Title -------------------------------- */}
        <MealTitle register={register} />

        {/* -------------------------------- Description -------------------------------- */}
        <MealDescription register={register} />

        {/* --------------------------------- Options -------------------------------- */}

        <MealOptions register={register} control={control} />

        {/* -------------------------------- Submit Button -------------------------------- */}
        <CustomButton disabled={!isValid} variant="secondary" type="submit">
          Submit Form
        </CustomButton>
      </form>
    </div>
  );
};

export default CreateMealForm;

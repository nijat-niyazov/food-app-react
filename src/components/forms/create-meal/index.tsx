import { Remove } from "@/assets/icons";
import { CustomButton } from "@/components";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Option = {
  name: string;
  price: number;
};

type Inputs = {
  file: any;
  title: string;
  description: string;
  options: {
    option1: Option;
    option2: Option;
    option3: Option;
    option4: Option;
    option5: Option;
  };
};

const CreateMealForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
    setError,
    getValues,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const fileRef = useRef<HTMLInputElement>(null);

  const [hasOptions, setHasOptions] = useState<boolean>(false);

  const [options, setOptions] = useState<number[]>([0]);

  const isNameAndPriceSetForLastOption = watch("options.option1.name") && watch("options.option1.price");

  let canAddAnotherOption = false;
  if (hasOptions && getValues()?.options) {
    canAddAnotherOption = Object.values(getValues()?.options?.option1).every((opt) => opt);
  }

  const [show, setShow] = useState<boolean>(false);
  const [selectedCat, setSelectedCat] = useState<string>("");

  function handleSelectCategory(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {}

  return (
    <div className="container md:w-1/3 mx-auto mt-10">
      {/* <CustomButton variant="primary">Create New Meal</CustomButton> */}

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
        <ul className="border-1 border-black/30 rounded-md p-2">
          <li onClick={handleSelectCategory}>Select Category</li>
          <li onClick={handleSelectCategory}>Fast Food</li>
          <li onClick={handleSelectCategory}>Drinks</li>
          <li onClick={handleSelectCategory}>Main</li>
          <li onClick={handleSelectCategory}>Snacks</li>
        </ul>

        <input className="hidden" type="file" ref={fileRef} />

        <div
          onClick={() => fileRef.current?.click()}
          className="w-full h-20 border-dashed border-1 rounded-md flex items-center justify-center border-black/20"
        >
          <span>Select your Image</span>
        </div>
        <div>
          <label htmlFor="title">Title :</label> <br />
          <input
            id="title"
            placeholder="Burger"
            type="text"
            className="border-1 border-black/30 rounded-md p-2 outline-none w-full"
            {...register("title", { required: true })}
          />
        </div>

        <div>
          <label htmlFor="description">Description :</label> <br />
          <textarea
            id="description"
            placeholder="Hot and spicy burger with extra cheese and fries."
            className="border-1 border-black/30 p-2 outline-none rounded-md w-full"
            cols={30}
            rows={10}
            {...register("description", { required: true })}
          ></textarea>
        </div>

        <CustomButton onClick={() => setHasOptions((p) => !p)} variant={!hasOptions ? "primary" : "secondary"}>
          {hasOptions ? "Remove" : "Set"} options of meal
        </CustomButton>

        {/* --------------------------------- Options -------------------------------- */}

        {hasOptions && (
          <>
            {options.map((option, i) => (
              <div key={i} className="flex items-center justify-between gap-2">
                <div className="grid border-1 p-2 border-black/50 rounded-md">
                  <label htmlFor="option">Option {i + 1}</label>
                  <div className="flex gap-4 ">
                    <input
                      className="grow border-1 border-black/30 p-2 rounded-md"
                      id="option"
                      type="text"
                      placeholder="Option name"
                      {...register(`options.option1.name`, { required: true })}
                    />

                    <input
                      className="border-1 border-black/30 p-2 rounded-md"
                      type="number"
                      placeholder="Price"
                      {...register(`options.option1.price`, { required: true })}
                    />
                  </div>
                </div>

                <CustomButton
                  disabled={options.length === 1}
                  className="p-0"
                  variant="transparent"
                  onClick={() => setOptions(options.filter((opt) => opt !== i))}
                >
                  <Remove />
                </CustomButton>
              </div>
            ))}

            <CustomButton
              onClick={() => setOptions((p) => [...p, (options.at(-1) as number) + 1])}
              disabled={options.length > 4}
              className="text-black"
              variant="transparent"
            >
              Add another option ➕
            </CustomButton>
          </>
        )}

        <CustomButton disabled={!isValid} variant="secondary" type="submit">
          Submit Form
        </CustomButton>
      </form>
    </div>
  );
};

export default CreateMealForm;

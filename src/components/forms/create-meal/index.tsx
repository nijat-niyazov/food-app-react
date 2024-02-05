import { Remove } from "@/assets/icons";
import { CustomButton } from "@/components";
import { cn } from "@/utils";
import { ChangeEvent, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Option = {
  name: string;
  price: number;
};

type Inputs = {
  category: string;
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

const statCategories = [
  { id: "fast-food", name: "Fast Food" },
  { id: "drinks", name: "Drinks" },
  { id: "main", name: "Main" },
  { id: "snacks", name: "Snacks" },
];

const CreateMealForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
    setError,
    getValues,
    setValue,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { category, ...rest } = data;
    const findedCategory = statCategories.find((cat) => cat.name === category)?.id;

    const values = Object.assign({}, rest, { category: findedCategory });
    console.log(values);
  };

  /* ------------------------------ Options State ----------------------------- */
  const isNameAndPriceSetForLastOption = watch("options.option1.name") && watch("options.option1.price");
  let canAddAnotherOption = false;

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

  /* ------------------------------- Image State ------------------------------ */
  const fileRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<any>(null);

  const [options, setOptions] = useState<{ id: number }[]>([{ id: 1 }]);

  return (
    <div className="container md:w-1/3 mx-auto mt-10">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
        {/* -------------------------------- Image -------------------------------- */}
        <input
          className="hidden"
          type="file"
          {...register("file", { required: true })}
          ref={fileRef}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const image = e.target.files as HTMLInputElement["files"];
            if (image) {
              setImage(image[0]);
              setValue("file", URL.createObjectURL(image[0]));
            }
          }}
        />
        {!image ? (
          <div
            onClick={() => fileRef.current?.click()}
            className="w-full h-40 border-dashed border-1 rounded-md flex items-center justify-center border-black/20 hover:border-black cursor-pointer group"
          >
            <span className="opacity-50  group-hover:opacity-100">Select meal image</span>
          </div>
        ) : (
          <>
            <div className="relative group cursor-pointer transition-all duration-200">
              <img className="md:group-hover:opacity-50 " src={URL.createObjectURL(image)} alt="avatar" />
              <span
                onClick={() => fileRef.current?.click()}
                className="hidden absolute inset-0 w-full h-full md:flex items-center justify-center text-white opacity-0 group-hover:opacity-100"
              >
                Change Image
              </span>
            </div>
            <CustomButton onClick={() => fileRef.current?.click()} variant="transparent" className="border-1 border-black/30">
              Change Image
            </CustomButton>
          </>
        )}

        {/* -------------------------------- Category -------------------------------- */}
        <div>
          <label className="pl-0.5 font-semibold" htmlFor="category">
            Category :
          </label>
          <br />
          <div
            className={cn("rounded-md border-1  border-black/30 relative overflow-hidden", {
              "min-h-52": show,
            })}
          >
            <input
              onFocus={() => setShow(true)}
              // autoFocus
              type="text"
              className="bg-transparent w-full  p-2 outline-none text-sm md:text-base"
              placeholder="Fast-Food"
              {...register("category", { required: true })}
              // onBlur={() => setShow(false)}
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
        <div>
          <label className="pl-0.5 font-semibold" htmlFor="title">
            Title :
          </label>
          <br />
          <input
            id="title"
            placeholder="Burger"
            type="text"
            className="border-1 border-black/30 rounded-md p-2 outline-none w-full text-sm md:text-base"
            {...register("title", { required: true })}
          />
        </div>

        {/* -------------------------------- Description -------------------------------- */}
        <div>
          <label className="pl-0.5 font-semibold" htmlFor="description">
            Description :
          </label>
          <textarea
            id="description"
            placeholder="Hot and spicy burger with extra cheese and fries."
            className="border-1 border-black/30 p-2 outline-none rounded-md w-full text-sm md:text-base"
            cols={30}
            rows={10}
            {...register("description", { required: true })}
          ></textarea>
        </div>

        {/* --------------------------------- Options -------------------------------- */}
        <div>
          <label className="pl-0.5 font-semibold" htmlFor="option">
            Options:
          </label>

          <div className="border-1 border-black/30 rounded-md transition-all duration-200">
            <ul className="">
              {options.map(({ id }, i) => (
                <li
                  key={i}
                  className={cn("w-full pt-2", {
                    "border-t-1 ": i !== 0,
                  })}
                >
                  <label className="pl-0.5 font-semibold px-2" htmlFor="option">
                    Option {i + 1}
                  </label>

                  <div className="grid grid-cols-[1fr_80px_auto] gap-2 items-center px-2 pb-2">
                    <input
                      className="border-1 border-black/30 p-2 rounded-md text-sm md:text-base"
                      id="option"
                      type="text"
                      placeholder="Option name"
                      // {...register(`options.option${id}.name`, { required: true })}
                    />

                    <input
                      className="border-1 border-black/30 p-2 rounded-md text-sm md:text-base"
                      type="number"
                      placeholder="Price"
                      tabIndex={-1}
                      // {...register(`options.option${id}.price`, { required: true })}
                    />
                    <CustomButton
                      tabIndex={-1}
                      disabled={options.length === 1}
                      variant="transparent"
                      onClick={() => setOptions(options.filter((opt) => opt.id !== id))}
                      className="!p-0"
                    >
                      <Remove />
                    </CustomButton>
                  </div>
                </li>
              ))}
            </ul>

            <CustomButton
              onClick={() => setOptions((p) => [...p, { id: p.length + 1 }])}
              disabled={options.length > 4}
              className="border-t-1 border-b-1 border-black/30 my-2 rounded-none "
              variant="transparent"
            >
              Add another option ➕
            </CustomButton>
          </div>
        </div>
        {/* -------------------------------- Submit Button -------------------------------- */}
        <CustomButton disabled={!isValid} variant="secondary" type="submit">
          Submit Form
        </CustomButton>
      </form>
    </div>
  );
};

export default CreateMealForm;

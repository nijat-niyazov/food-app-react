import { CustomButton } from "@/components";
import { useNavigate, useParams } from "react-router-dom";

import { Remove } from "@/assets/icons";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const meal = {
  description: "Hot, crispy, tender chicken breast in a soft bun with a spicy sauce and fresh lettuce",
  id: 3,
  img: "../src/assets/images/offer.png",

  title: "Fryday Burger",
};

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

const EditorPage = () => {
  const { id } = useParams();

  console.log(id);

  const navigate = useNavigate();

  // useEffect(() => {
  //   function handleBeforeUnload(e: BeforeUnloadEvent) {
  //     e.preventDefault();
  //     e.returnValue = "";
  //   }

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  // }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
    setError,
    getValues,
  } = useForm<Inputs>({
    defaultValues: {
      title: meal.title,
      description: meal.description,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const fileRef = useRef<HTMLInputElement>(null);
  const [hasOptions, setHasOptions] = useState<boolean>(false);
  const [options, setOptions] = useState<number[]>([0]);

  return (
    <div className="container ">
      <div className=" md:w-1/2 mx-auto grid gap-10 border-1 place-items-start  ">
        <CustomButton variant="transparent" className="underline font-medium w-auto p-1" onClick={() => navigate(-1)}>
          Go Back
        </CustomButton>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3 w-full">
          {/* <input className="hidden" type="file" ref={fileRef} /> */}

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
            Submit Edit
          </CustomButton>
        </form>
      </div>
    </div>
  );
};
export default EditorPage;

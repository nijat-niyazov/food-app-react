import { StepType } from "@/constants/types/spcieal-meal";
import { Checkbox } from "@/forms/elements";
import { FC } from "react";
import { UseFormRegister } from "react-hook-form";

type Step2Props = {
  categories: StepType[];
  register: UseFormRegister<any>;
};

const Step2: FC<Step2Props> = ({ categories, register }) => {
  return (
    <div className="grid gap-14 mt-10">
      {categories.map((category, i) => (
        <ul key={i} className="grid grid-cols-3 relative  border-1 border-black/30 px-6 py-[70px] rounded-xl">
          <li className="absolute top-0 left-20 -translate-y-1/2">
            <div className="bg-text text-white rounded-r-xl font-bold text-3xl relative py-4 px-14">
              <div className="py-5 px-2 -translate-x-1/2 absolute left-0   rounded-full bg-primary">
                <img src={category.imgHeading} alt="" className="w-18 h-8 object-cover" />
              </div>
              <p className="text-center">{category.heading} Toppings</p>
            </div>
          </li>

          {category.options.map((option) => (
            <Checkbox
              register={register}
              key={option.id}
              fieldName={`ingredients.${category.heading.toLowerCase()}`}
              option={option}
              type={category.type}
            />
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Step2;

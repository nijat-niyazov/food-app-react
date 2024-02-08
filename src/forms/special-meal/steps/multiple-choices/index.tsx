import { ChoicesType } from "@/constants/types/spcieal-meal";
import { cn } from "@/utils";
import { FC, InputHTMLAttributes, memo } from "react";
import { UseFormRegister } from "react-hook-form";
import CategoryHeader from "./CategoryHeader";

type MultipleChoicesProps = {
  fieldName: string;
  options: ChoicesType[];
  register: UseFormRegister<any>;
} & InputHTMLAttributes<HTMLInputElement>;

const MultipleChoices: FC<MultipleChoicesProps> = ({ fieldName, options: categories, register, ...rest }) => {
  return (
    <div className="grid gap-14 mt-10">
      {categories.map((category, i) => (
        <div key={i} className="relative  border-1 border-black/30 p-10 rounded-md">
          <CategoryHeader img={category.imgTitle} title={category.title} />

          <ul className="grid grid-cols-3 gap-x-20">
            {category.options.map((option) => {
              const registerName = `${fieldName}.${category.title.toLowerCase()}`;

              return (
                <li key={option.id} className="flex gap-2 items-center font-bold text-text text-xl">
                  <input
                    {...rest}
                    id={option.id}
                    value={option.id}
                    type={category.type}
                    className="w-5 h-5"
                    {...register(registerName, {
                      required: category.type === "radio",
                    })}
                  />

                  <label htmlFor={option.id} className="select-none flex items-center gap-3 grow">
                    {option.img && <img src={option.img} alt={option.id} className="w-10 h-6 " />}
                    {option.name}
                    <span
                      className={cn("text-lg font-medium italic", {
                        "ml-auto": category.type === "checkbox",
                      })}
                    >
                      {option.price}$
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default memo(MultipleChoices);

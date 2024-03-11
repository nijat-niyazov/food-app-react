import { ChoicesType } from "@/constants/types/spcieal-meal";
import { cn } from "@/utils";
import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

import { FormInputValues, InputValue } from "../../types";
import CategoryTitle from "./CategoryTitle";

type MultipleChoicesProps = {
  fieldName: keyof FormInputValues;
  options: ChoicesType[];
  handleChange: (registerName: keyof FormInputValues, values: InputValue, checked?: boolean) => void;
  register: UseFormRegister<any>;
} & InputHTMLAttributes<HTMLInputElement>;

const MultipleChoices = ({ fieldName, options: categories, register, handleChange, ...rest }: MultipleChoicesProps) => {
  return (
    categories && (
      <div className="grid gap-14 mt-10">
        {categories.map((category, i) => (
          <div key={i} className="relative  border-1 border-black/30 p-10 rounded-md">
            <CategoryTitle img={category.imgTitle} title={category.title} />

            <ul className="grid grid-cols-3 gap-x-20">
              {category.options.map((values) => {
                const registerName = `${fieldName}.${category.title.toLowerCase()}` as keyof FormInputValues;
                const { id, price, name } = values;
                return (
                  <li key={id} className="flex gap-2 items-center font-bold text-darkblue text-xl">
                    {category.type === "radio" ? (
                      <input
                        id={id}
                        value={id}
                        type={category.type === "radio" ? "radio" : "checkbox"}
                        className="w-4 h-4 accent-oranged"
                        {...register(registerName)}
                        onChange={() => handleChange(registerName, values)}
                      />
                    ) : (
                      <input
                        id={id}
                        value={id}
                        type="checkbox"
                        className="w-4 h-4 accent-oranged"
                        {...register(registerName)}
                        onChange={({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) =>
                          handleChange(registerName, values, checked)
                        }
                      />
                    )}

                    <label htmlFor={id} className="select-none flex items-center gap-3 grow">
                      {name}
                      <span className={cn("text-lg font-medium italic")}>{price}$</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    )
  );
};

export default MultipleChoices;

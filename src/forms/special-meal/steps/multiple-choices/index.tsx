import { ChoicesType } from "@/constants/types/spcieal-meal";
import { cn } from "@/utils";
import { motion } from "framer-motion";
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
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: i * 0.1 } }}
            key={i}
            className="relative  border-1 border-black/30 p-5 rounded-md"
          >
            <CategoryTitle img={category.imgTitle} title={category.title} />

            <ul className="grid grid-cols-3 gap-x-20">
              {category.options.map((values) => {
                const registerName = `${fieldName}.${category.title.toLowerCase()}` as keyof FormInputValues;
                const { id, price, name } = values;
                return (
                  <motion.li
                    whileHover={{
                      x: 20,
                      transition: { duration: 0.3 },
                    }}
                    key={id}
                    className="flex gap-2 items-center font-bold text-text text-xl cursor-pointer"
                  >
                    {category.type === "radio" ? (
                      <input
                        id={id}
                        value={id}
                        type={category.type === "radio" ? "radio" : "checkbox"}
                        className="w-4 h-4 accent-primary"
                        {...register(registerName)}
                        onChange={() => handleChange(registerName, values)}
                      />
                    ) : (
                      <input
                        id={id}
                        value={id}
                        type="checkbox"
                        className="w-4 h-4 accent-primary"
                        {...register(registerName)}
                        onChange={({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) =>
                          handleChange(registerName, values, checked)
                        }
                      />
                    )}

                    <label htmlFor={id} className="cursor-pointer flex items-center gap-3 grow">
                      {name}
                      <span className={cn("text-lg font-medium italic")}>{price}$</span>
                    </label>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    )
  );
};

export default MultipleChoices;

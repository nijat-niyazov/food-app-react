import { Option } from "@/constants/types/spcieal-meal";
import { motion } from "framer-motion";
import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { FormInputValues, InputValue } from "../../types";

type SizeProps = {
  options: Option[];
  register: UseFormRegister<any>;
  fieldName: keyof FormInputValues;
  handleChange: (name: keyof FormInputValues, values: InputValue) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Size = ({ fieldName, options, register, required, handleChange, ...rest }: SizeProps) => {
  return (
    <ul className="grid gap-3 text-lg font-semibold">
      {options.map((option, i) => {
        const { id, price, name, des, img } = option;

        return (
          <motion.li
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: i * 0.1 } }}
            key={id}
            className="flex items-center "
          >
            <motion.div whileHover={{ x: 20, transition: { duration: 0.3 } }} className="grow flex items-center gap-3">
              <input
                {...rest}
                id={id}
                value={id}
                type="radio"
                className="w-5 h-5 accent-red-800"
                {...register(fieldName)}
                onChange={() => handleChange(fieldName, { id, price, name })}
              />

              <label htmlFor={id} className="grow flex items-center gap-2">
                <img src={img} alt={des} className={"w-12 h-12"} style={{ width: `${(i + 10) * 4}px`, height: `${(i + 10) * 4}px` }} />
                {name}
              </label>
            </motion.div>
            <p className="italic font-normal ml-auto z-10">${price}</p>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default Size;

import { Option } from "@/constants/types/spcieal-meal";
import { InputHTMLAttributes, memo } from "react";
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
          <li key={id} className="flex items-center gap-3">
            <input
              {...rest}
              id={id}
              value={id}
              type="radio"
              className="w-5 h-5"
              {...register(fieldName)}
              onChange={() => handleChange(fieldName, { id, price, name })}
            />

            <label htmlFor={id} className="grow flex items-center gap-2">
              <img
                src={img}
                alt={des}
                className={"w-12 h-12"}
                style={{
                  width: `${(i + 10) * 4}px`,
                  height: `${(i + 10) * 4}px`,
                }}
              />
              {name}
            </label>

            <p className="italic font-normal ml-auto">${price}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default memo(Size);

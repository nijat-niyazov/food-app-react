import { Option } from "@/constants/types/spcieal-meal";
import { FC, InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

type RadioInputProps = {
  fieldName: string;
  required?: boolean;
  error?: string;
  option: Option;
  i: number;
  register: UseFormRegister<any>;
} & InputHTMLAttributes<HTMLInputElement>;

const Radio: FC<RadioInputProps> = ({ fieldName, option, required, error, i, register, ...rest }) => {
  return (
    <li className="flex items-center gap-4">
      <input
        {...rest}
        id={option.id}
        value={option.id}
        type="radio"
        required={required}
        className="rounded-md border-1 border-black/50 p-2 w-7 h-7 mr-3"
        {...register(fieldName)}
      />

      <label htmlFor={option.id} className="flex items-center gap-2">
        <img
          src={option.img}
          alt={option.des}
          className={"w-12 h-12"}
          style={{
            width: `${(i + 10) * 5}px`,
            height: `${(i + 10) * 5}px`,
          }}
        />
        {option.name}
      </label>

      <p className="italic font-normal ml-auto">${option.price}</p>
    </li>
  );
};
export default Radio;

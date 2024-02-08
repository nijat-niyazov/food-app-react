import { StepType } from "@/constants/types/spcieal-meal";
import { FC, InputHTMLAttributes, memo } from "react";
import { UseFormRegister } from "react-hook-form";

type SizeProps = {
  options: StepType["options"];
  register: UseFormRegister<any>;
  fieldName: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Size: FC<SizeProps> = ({ fieldName, options, register, ...rest }) => {
  return (
    <ul className="grid gap-3 text-lg font-semibold">
      {options.map((option, i) => (
        <li key={i} className="flex items-center gap-3">
          <input
            {...rest}
            id={option.id}
            value={option.id}
            type="radio"
            required={rest.required}
            className="w-5 h-5"
            {...register(fieldName)}
          />

          <label htmlFor={option.id} className="grow flex items-center gap-2">
            <img
              src={option.img}
              alt={option.des}
              className={"w-12 h-12"}
              style={{
                width: `${(i + 10) * 4}px`,
                height: `${(i + 10) * 4}px`,
              }}
            />
            {option.name}
          </label>

          <p className="italic font-normal ml-auto">$C{option.price}</p>
        </li>
      ))}
    </ul>
  );
};

export default memo(Size);

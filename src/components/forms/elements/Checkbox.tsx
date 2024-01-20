import { Option } from "@/constants/types/spcieal-meal";
import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

type CheckboxInputProps = {
  label: string;
  register: UseFormRegister<{ [key: string]: string }>;
  required?: boolean;
  error?: string;
  options: Option[];
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
  label,
  register,
  required,
  error,

  options,
  ...rest
}: CheckboxInputProps) => {
  return (
    <>
      <label htmlFor={rest.id}>{label}</label>
      <ul className="grid gap-3 ">
        {options.map((size, i) => (
          <li key={i} className="flex items-center gap-4">
            <input
              {...register(label, { required })}
              id={size.id}
              type="checkbox"
              value={size.id}
              className="rounded-md border-1 border-black/50 p-2"
              {...rest}
            />
            <label
              htmlFor={size.id}
              className="flex items-center gap-2 select-none"
            >
              <img
                src={size.img}
                alt="size"
                className="w-12 h-12"
                style={{
                  width: (i + 10) * 5 + "px",
                  height: (i + 10) * 5 + "px",
                }}
              />
              {size.name}
            </label>

            <p className="italic font-normal ml-auto">${size.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Checkbox;

import { Choices } from "@/constants/types/spcieal-meal";
import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

type RadioInputProps = {
  label: string;
  // register: UseFormRegister<Partial<Inputs>>;
  register: UseFormRegister<{ [key: string]: string }>;

  required?: boolean;
  error?: string;
  choices: Choices[];
} & InputHTMLAttributes<HTMLInputElement>;

const Radio = ({
  label,
  register,
  required,
  error,

  choices,
  ...rest
}: RadioInputProps) => {
  return (
    <ul className="grid gap-3 text-2xl font-semibold">
      {choices.map((choice, i) => (
        <li key={i} className="flex items-center gap-4">
          <input
            {...rest}
            id={choice.id}
            type="radio"
            value={choice.id}
            className="rounded-md border-1 border-black/50 p-2 w-7 h-7 mr-3"
            {...register(label.toLowerCase(), { required })}
          />
          <label htmlFor={choice.id} className="flex items-center gap-2">
            <img
              src={choice.img}
              alt="choice"
              className="w-12 h-12"
              style={{
                width: (i + 10) * 5 + "px",
                height: (i + 10) * 5 + "px",
              }}
            />
            {choice.name}
          </label>

          <p className="italic font-normal ml-auto">${choice.price}</p>
        </li>
      ))}
    </ul>
  );
};
export default Radio;

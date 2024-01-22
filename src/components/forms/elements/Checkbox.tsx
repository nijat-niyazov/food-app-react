import { StepType } from "@/constants/types/spcieal-meal";
import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

type CheckboxInputProps = {
  label: string;
  register: UseFormRegister<{ [key: string]: string }>;
  required?: boolean;
  error?: string;
  options: StepType[];
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
    <div className="grid gap-14 mt-10">
      {options.map((option, i) => (
        <ul
          key={i}
          className="grid grid-cols-3 relative  border-1 border-black/30 px-6 py-[70px] rounded-xl"
        >
          {/* <li className="absolute top-0 left-20 -translate-y-1/2">
            <div className="bg-text text-white rounded-r-xl font-bold text-3xl relative py-4 px-14">
              <div className="py-5 px-2 -translate-x-1/2 absolute left-0   rounded-full bg-primary">
                <img
                  src={option.imgHeading}
                  alt=""
                  className="w-18 h-8 object-cover"
                />
              </div>
              <p className="text-center">{option.heading}</p>
            </div>
          </li> */}

          {option.choices.map((option, index) => (
            <li
              key={index}
              className="flex gap-2 items-center mt-1 font-bold text-text text-3xl"
            >
              <input
                id={option.id}
                type="checkbox"
                value={option.id}
                className="w-7 h-7"
                {...rest}
                {...register(label.toLowerCase(), { required })}
              />
              <label
                htmlFor={option.id}
                className="select-none flex items-center gap-3"
              >
                {option.img && (
                  <img src={option.img} alt="" className="w-12 h-8 " />
                )}
                {option.name}
              </label>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};
export default Checkbox;

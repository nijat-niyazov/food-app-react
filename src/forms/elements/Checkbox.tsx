import { Option } from "@/constants/types/spcieal-meal";
import { FC, InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

type CheckboxInputProps = {
  fieldName: string;

  option: Option;
  type?: "radio" | "checkbox";
  register: UseFormRegister<any>;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox: FC<CheckboxInputProps> = ({
  // getTotalPrice,
  fieldName,
  register,
  option,
  type,
  ...rest
}) => {
  // const { register } = useForm();

  // let registerName = `${fieldName}.${option.heading.toLowerCase()}`;

  return (
    <li className="flex gap-2 items-center mt-1 font-bold text-text text-3xl">
      <input
        {...rest}
        id={option.id}
        value={option.id}
        type={type}
        className="w-7 h-7"
        {...register(fieldName, {
          required: type === "radio",
        })}
      />

      <label htmlFor={option.id} className="select-none flex items-center gap-3">
        {option.img && <img src={option.img} alt={option.id} className="w-12 h-8 " />}
        {option.name} <span className="text-lg font-medium">($ {option.price})</span>
      </label>
    </li>
  );
};
export default Checkbox;

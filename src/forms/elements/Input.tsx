import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

type TextInputProps = {
  label: string;
  register: UseFormRegister<{ [key: string]: string }>;
  required: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  label,
  register,
  required,
  error,
  ...rest
}: TextInputProps) => {
  return (
    <>
      <label htmlFor={rest.id}>{label}</label>
      <input
        {...register(label, { required })}
        id={rest.id}
        className="rounded-md border-1 border-black/50 p-2"
        {...rest}
      />

      {/* {error && (
        <span className="text-red-600 font-medium">Email is required</span>
      )} */}
    </>
  );
};
export default Input;

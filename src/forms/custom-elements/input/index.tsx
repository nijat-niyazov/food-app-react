import { EyeSlash, PasswordEye } from "@/assets/icons";
import { cn } from "@/utils";
import { InputHTMLAttributes, useState } from "react";
import ErrorOfField from "../error";

type Props = {
  placeholder: string;
  type?: "text" | "email" | "password";
  field: string;
  className?: string;
  register: any;
  error: string | undefined;
} & InputHTMLAttributes<HTMLInputElement>;

const CustomInput = ({ placeholder, type = "text", className, register, field, error }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="flex items-center p-2 pl-4  rounded-full w-full border-2 border-black/30 text-text outline-none">
        <input
          placeholder={placeholder}
          type={type === "password" ? (showPassword ? "text" : type) : type}
          className={cn("bg-outlined outline-none w-full", className)}
          {...register(field, { required: true })}
        />

        {type === "password" && (
          <button type="button" onClick={() => setShowPassword((p) => !p)}>
            {!showPassword ? <PasswordEye /> : <EyeSlash />}
          </button>
        )}
      </div>

      <ErrorOfField error={error} />
    </div>
  );
};

export default CustomInput;

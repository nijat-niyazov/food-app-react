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
  const [focused, setFocused] = useState(false);

  console.log(focused, field);

  return (
    <div>
      <div
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={cn("flex items-center p-2 pl-4  rounded-lg w-full border-2 border-black/30 text-text outline-none outline-offset-0", {
          "border-primary/80": focused,
          "outline-primary/50": focused,
        })}
      >
        <input
          placeholder={placeholder}
          type={type === "password" ? (showPassword ? "text" : type) : type}
          className={cn("bg-outlined outline-none w-full ", className)}
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

import { cn } from "@/utils";
import { ButtonHTMLAttributes } from "react";

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "success" | "danger" | "warning" | "primary" | "secondary";
};

let defaultClasses =
  "hover:opacity-80 duration-200 transition-all text-white rounded-md text-2xl px-8 py-2 font-bold disabled:opacity-50";

const CustomButton = ({
  variant,
  className = "",

  children,
  type = "button",
  ...otherProps
}: CustomButtonProps) => {
  let cls;

  switch (variant) {
    case "primary":
      cls = "bg-primary ";
      break;
    case "success":
      cls = "bg-secondary ";
      break;
  }

  return (
    <button
      {...otherProps}
      type={type}
      className={cn(defaultClasses, cls, className)}
    >
      {children}
    </button>
  );
};

export default CustomButton;

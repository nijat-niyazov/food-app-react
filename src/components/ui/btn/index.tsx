import { cn } from "@/utils";
import { ButtonHTMLAttributes } from "react";

type CustomButtonProps = {
  variant?: "success" | "danger" | "warning" | "primary" | "secondary" | "black" | "outlined" | "transparent";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xl2" | "xl3" | "xl4" | "xl5";
  borderRadius?: "sm" | "md" | "lg" | "xl" | "full";
  font?: "normal" | "medium" | "semibold" | "bold";
} & ButtonHTMLAttributes<HTMLButtonElement>;

function createBtnClasses(
  variant: CustomButtonProps["variant"] = "primary",
  size: CustomButtonProps["size"] = "md",
  borderRadius: CustomButtonProps["borderRadius"] = "md",
  font: CustomButtonProps["font"] = "semibold"
) {
  let cls = "";

  const variants = {
    primary: "bg-primary border-1 border-transparent",
    secondary: "bg-secondary border-1 border-transparent",
    black: "bg-text border-1 border-transparent",
    danger: "bg-red-500 border-1 border-transparent",
    outlined: "bg-outlined text-black border-1 border-black/50 ",
    transparent: "bg-outlined text-black border-1 border-transparent",
    success: "bg-success border-1 border-transparent",
    warning: "bg-warning border-1 border-transparent",
  };

  const sizes = {
    xs: "text-xs ",
    sm: "text-sm ",
    md: "text-base ",
    lg: "text-lg ",
    xl: "text-xl ",
    xl2: "text-2xl ",
    xl3: "text-3xl ",
    xl4: "text-4xl ",
    xl5: "text-5xl ",
  };

  const borderRadiuses = {
    sm: "rounded-sm ",
    md: "rounded-md ",
    lg: "rounded-lg ",
    xl: "rounded-xl ",
    full: "rounded-full ",
  };

  const fonts = {
    normal: "font-normal ",
    medium: "font-medium ",
    semibold: "font-semibold ",
    bold: "font-bold ",
  };

  cls += variants[variant] + sizes[size] + borderRadiuses[borderRadius] + fonts[font];

  return cls;
}

const defaultClasses =
  "hover:bg-opacity-90 active:bg-opacity-100  transition-all duration-200  text-white rounded-md md:px-8 py-2 px-6 disabled:opacity-50 disabled:pointer-events-none outline-none ease-in-out w-full text-white disabled:select-none flex items-center gap-2 justify-center";

const CustomButton = ({ variant, type = "button", borderRadius, size, children, className = "", ...rest }: CustomButtonProps) => {
  const cls = createBtnClasses(variant, size, borderRadius);

  return (
    <button type={type} className={cn(defaultClasses, cls, className)} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;

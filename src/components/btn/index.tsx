import { ButtonHTMLAttributes } from "react";

const CustomButton = ({
  className,
  children,
  ...otherProps
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...otherProps} className={className}>
      {children}
    </button>
  );
};

export default CustomButton;

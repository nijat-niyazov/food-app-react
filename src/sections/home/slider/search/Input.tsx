import { usePlaceHolders } from "@/hooks";
import { ChangeEvent, useRef } from "react";

const placeholders = ["Burger", "Coffee", "Pizza", "Beer"];

type InputProps = { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void };
const Input = ({ onChange, value }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  usePlaceHolders(placeholders, inputRef);

  return (
    <input
      ref={inputRef}
      type="text"
      name="search"
      placeholder="Burger"
      className="outline-none px-1 w-[calc(100%-20px)] text-black"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;

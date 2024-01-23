import { Choices } from "@/constants/types/spcieal-meal";
import { InputHTMLAttributes } from "react";

type RadioInputProps = {
  fieldName: string;
  // register: UseFormRegister<Partial<Inputs>>;
  // register: UseFormRegister<{ [key: string]: string }>;
  // getTotalPrice: (price: number, action: string) => void;
  register: any;
  required?: boolean;
  error?: string;
  choices: Choices[];
} & InputHTMLAttributes<HTMLInputElement>;

const Radio = ({
  fieldName,
  register,
  required,
  error,
  // getTotalPrice,
  choices,
  ...rest
}: RadioInputProps) => {
  // console.log(choices);

  return (
    <ul className="grid gap-3 text-2xl font-semibold">
      {choices.map((choice, i) => (
        <li key={choice.id} className="flex items-center gap-4">
          <input
            {...rest}
            id={choice.id}
            value={choice.id}
            type="radio"
            // price={choice.price}
            required={required}
            className="rounded-md border-1 border-black/50 p-2 w-7 h-7 mr-3"
            {...register(fieldName)}
            // onChange={(e) =>
            //   getTotalPrice(
            //     // parseFloat(e.target.getAttribute("price") as string),
            //     choice.price,
            //     e.target.checked ? "increase" : "reduce"
            //   )
            // }
          />

          <label htmlFor={choice.id} className="flex items-center gap-2">
            <img
              src={choice.img}
              alt={choice.des}
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

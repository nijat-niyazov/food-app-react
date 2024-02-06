import { StepType } from "@/constants/types/spcieal-meal";
import { InputHTMLAttributes } from "react";

type CheckboxInputProps = {
  fieldName: string;
  // register: UseFormRegister<{ [key: string]: string }>;
  register: any;
  getTotalPrice: (price: number, action: string) => void;
  options: StepType[];
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
  fieldName,
  register,

  getTotalPrice,
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
          <li className="absolute top-0 left-20 -translate-y-1/2">
            <div className="bg-text text-white rounded-r-xl font-bold text-3xl relative py-4 px-14">
              <div className="py-5 px-2 -translate-x-1/2 absolute left-0   rounded-full bg-primary">
                <img
                  src={option.imgHeading}
                  alt=""
                  className="w-18 h-8 object-cover"
                />
              </div>
              <p className="text-center">{option.heading} Toppings</p>
            </div>
          </li>

          {option.choices.map((choice) => {
            let registerName = `${fieldName}.${option.heading.toLowerCase()}`;

            return (
              <li
                key={choice.id}
                className="flex gap-2 items-center mt-1 font-bold text-text text-3xl"
              >
                <input
                  {...rest}
                  id={choice.id}
                  value={choice.id}
                  type={option.type}
                  className="w-7 h-7"
                  {...register(registerName, {
                    required: option.type === "radio" ? true : false,
                  })}
                  // onChange={(e) => {
                  //   getTotalPrice(
                  //     choice.price,
                  //     e.target.checked ? "increase" : "reduce"
                  //   );
                  // }}
                />

                <label
                  htmlFor={choice.id}
                  className="select-none flex items-center gap-3"
                >
                  {choice.img && (
                    <img
                      src={choice.img}
                      alt={choice.id}
                      className="w-12 h-8 "
                    />
                  )}
                  {choice.name}{" "}
                  <span className="text-lg font-medium">
                    ($ {choice.price})
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      ))}
    </div>
  );
};
export default Checkbox;

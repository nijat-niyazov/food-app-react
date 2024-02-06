import { FC, forwardRef } from "react";

const RadioType: FC<{ option: any }> = forwardRef(({ option }, ref) => {
  return (
    <li className="flex items-center gap-2 font-bold text-text text-3xl">
      <input
        className="w-8 h-8"
        type="radio"
        name="meat"
        id={option.id}
        // checked={selectedOptions.includes(option.id)}
        // onChange={() =>
        //   setSelectedOptions((prev) => [...prev, option.id])
        // }
      />
      <label htmlFor={option.id} className="select-none flex items-center gap-3">
        <img src={option.img} alt="" className="w-12 h-8 " />
        {option.name}
      </label>
    </li>
  );
});

export default RadioType;

import { FC } from "react";
import { UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<{ title: string }>;
};

const MealTitle: FC<Props> = ({ register }) => {
  return (
    <div>
      <label className="pl-0.5 font-semibold" htmlFor="title">
        Title :
      </label>
      <br />
      <input
        id="title"
        placeholder="Burger"
        type="text"
        className="border-1 border-black/30 rounded-md p-2 outline-none w-full text-sm md:text-base"
        {...register("title", { required: true })}
      />
    </div>
  );
};

export default MealTitle;

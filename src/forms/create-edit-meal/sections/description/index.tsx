import { FC } from "react";
import { UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<{ description: string }>;
};

const MealDescription: FC<Props> = ({ register }) => {
  return (
    <div>
      <label className="pl-0.5 font-semibold" htmlFor="description">
        Description :
      </label>
      <textarea
        id="description"
        placeholder="Hot and spicy burger with extra cheese and fries."
        className="border-1 border-black/30 p-2 outline-none rounded-md w-full text-sm md:text-base"
        cols={20}
        rows={6}
        {...register("description", { required: true })}
      ></textarea>
    </div>
  );
};

export default MealDescription;

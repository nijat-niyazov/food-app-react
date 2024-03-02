import { HeroPlus, Remove } from "@/assets/icons";
import { CustomButton } from "@/components/ui";
import { cn } from "@/utils";
import { FC } from "react";
import { useFieldArray } from "react-hook-form";

type Props = {
  register: any;
  control: any;
};

const MealOptions: FC<Props> = ({ register, control }) => {
  const {
    fields: options,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "options",
  });

  return (
    <div>
      <label className="pl-0.5 font-semibold">Options:</label>

      <div className="border-1 border-black/30 rounded-t-md transition-all duration-200">
        <ul>
          {options.map(({ id }, i) => (
            <li
              key={id}
              className={cn("w-full pt-2", {
                "border-t-1 ": i !== 0,
              })}
            >
              <label className="pl-3 font-semibold px-2" htmlFor="option">
                Option {i + 1}
              </label>

              <div className="grid grid-cols-[1fr_80px_auto] gap-2 items-center px-2 pb-2">
                <input
                  className="border-1 border-black/30 p-2 rounded-md text-sm md:text-base outline-none"
                  type="text"
                  placeholder="Option name"
                  {...register(`options.${i}.name`, { required: true })}
                />

                <input
                  className="border-1 border-black/30 p-2 rounded-md text-sm md:text-base outline-none"
                  type="number"
                  placeholder="10"
                  tabIndex={-1}
                  {...register(`options.${i}.price`, { required: true })}
                />
                <CustomButton disabled={options.length === 1} variant="transparent" onClick={() => remove(i)} className="!p-0">
                  <Remove />
                </CustomButton>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <CustomButton
        className="bg-bej text-black rounded-t-none"
        variant="secondary"
        disabled={options.length > 4}
        onClick={() => append({ name: "", price: 0 })}
      >
        Add another option <HeroPlus />
      </CustomButton>
    </div>
  );
};

export default MealOptions;

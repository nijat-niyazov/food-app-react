import { Option } from "@/components";
import { MealType, OptionType } from "@/constants/types/meal";
import { useState } from "react";
import AddToOrderBtn from "../add-to-order";

const Options = ({
  options,
  meal,
}: {
  meal: MealType;
  options: OptionType[];
}) => {
  const [selected, setSelected] = useState<OptionType | undefined>(undefined);

  const handleSelect = (id: number) =>
    setSelected(options.find((option) => option.id === id));

  return (
    <div className="flex flex-wrap justify-between gap-2">
      {options.map((option) => (
        <Option
          key={option.id}
          option={option}
          onClick={handleSelect}
          selected={selected?.id}
        />
      ))}
      {selected && <AddToOrderBtn meal={meal} selected={selected} />}
    </div>
  );
};

export default Options;

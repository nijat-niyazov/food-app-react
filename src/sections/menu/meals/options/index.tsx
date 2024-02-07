import { Option } from "@/components";
import { MealType, OptionType } from "@/constants/types/meal";
import { useState } from "react";

const Options = ({ options, meal }: { meal: MealType; options: OptionType[] }) => {
  const [selected, setSelected] = useState<OptionType | null>(null);

  const handleSelect = (id: number | null) =>
    setSelected(typeof id === "number" ? (options.find((option) => option.id === id) as OptionType) : null);

  return (
    <div className="flex flex-wrap justify-between gap-y-3">
      {options.map((option) => (
        <Option key={option.id} option={option} onClick={handleSelect} selected={selected?.id} />
      ))}
      {/* {selected && <AddToOrderBtn meal={meal} selected={selected} handleSelect={handleSelect} />} */}
    </div>
  );
};

export default Options;

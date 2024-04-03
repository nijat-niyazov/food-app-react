import { Option } from "@/components";
import { MealType, OptionType } from "@/constants/types/meal";
import { useState } from "react";
import AddToOrderBtn from "../add-to-order";

const Options = ({ options, meal }: { meal: MealType; options: OptionType[] }) => {
  const [selected, setSelected] = useState<OptionType | null>(null);

  function handleSelect(id: string) {
    setSelected(options.find((option) => option.id === id) as OptionType);
  }

  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <Option key={option.id} option={option} onClick={handleSelect} selected={selected?.id} />
      ))}

      {selected && <AddToOrderBtn meal={meal} selected={selected} handleSelect={handleSelect.bind(null, "")} />}
    </div>
  );
};

export default Options;

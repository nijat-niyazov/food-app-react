import { cn } from "@/utils";
import { useMemo } from "react";
import { Price } from "../../types";

type Props = {  values: Price[];  note: string;
};

type Groupped = {  [key: string]: Price[];};

const ConfirmList = ({ values, note }: Props) => {
  const byGroups = useMemo(() => {
    return values.reduce((group: Groupped, element) => {
      const { fieldName } = element;
      const field = fieldName.split(".").at(-1) as string;
      group[field] = group[field] ?? [];
      group[field].push(element);
      return group;
    }, {});
  }, [values]);

  const groups = Object.entries(byGroups);

  return (
    <div className="grid gap-5">
      {groups.map(([category, list], i) => {
        return (
          <div key={i} className={cn("border-black/30 pb-2 border-b-1", { "border-none ": i !== groups.length - 1 && !note })}>
            <h3 className="text-lg font-semibold">{category.charAt(0).toUpperCase() + category.slice(1)} :</h3>
            <ul className="grid gap-2">
              {list.map((element, i) => {
                return (
                  <li key={element.id} className="flex items-center justify-between w-full">
                    {i + 1}. {element.name} <span>${element.price}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <div>
        <h3 className="text-lg font-semibold">Note :</h3>
        <p className="w-full">{note}</p>
      </div>
    </div>
  );
};

export default ConfirmList;

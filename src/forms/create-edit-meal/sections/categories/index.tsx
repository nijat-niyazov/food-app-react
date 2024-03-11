import { useClickOutside } from "@/hooks";
import { cn } from "@/utils";
import { useRef, useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

type Props = {
  statCategories: { category_name: string; category_id: string }[];
  setValue: UseFormSetValue<{ category_name: string }>;
  register: UseFormRegister<{ category_name: string }>;
};

const statCategories2 = [
  { category_id: "fast-food", category_name: "Fast Food" },
  { category_id: "drinks", category_name: "Drinks" },
  { category_id: "main", category_name: "Main" },
  { category_id: "snacks", category_name: "Snacks" },
];

const MealCategories = ({ statCategories, setValue, register }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [categories, setCategories] = useState<Props["statCategories"]>(statCategories2);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleOptionClick = (option: string) => {
    setSelectedCategory(option);
    setShow(false);
  };

  function handleSelectCategory(name: string) {
    setValue("category_name", name);
    setShow(false);
  }

  const divRef = useRef<HTMLDivElement>(null);
  useClickOutside(divRef, () => {
    setShow(false);
  });

  return (
    <div>
      <label className="pl-0.5 font-semibold" htmlFor="category_name">
        Category :
      </label>

      <div ref={divRef} className={cn("rounded-md border-1  border-black/30 relative overflow-hidden", { "min-h-52": show })}>
        <input
          type="text"
          id="category_name"
          {...register("category_name", { required: true })}
          value={selectedCategory}
          className="bg-outlined w-full  p-2 outline-none text-sm md:text-base"
          placeholder="Fast-Food"
          onChange={handleInputChange}
          onFocus={() => setShow(true)}
        />

        <ul className={cn("z-20 rounded-b-md absolute w-full none", { block: show })}>
          {categories.map(({ category_name: name, category_id: id }) => (
            <li key={id} className="hover:bg-gray-300 p-2 cursor-pointer " onClick={() => handleOptionClick(name)}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MealCategories;

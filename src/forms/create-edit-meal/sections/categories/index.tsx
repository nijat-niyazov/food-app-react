import { cn } from "@/utils";
import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";

type Props = {
  statCategories: { category_name: string; category_id: string }[];
  setValue: UseFormSetValue<any>;
  register: any;
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

  function handleSelectCategory(name: string) {
    setValue("category_name", name);
    setShow(false);
  }

  return (
    <div>
      <label className="pl-0.5 font-semibold" htmlFor="category">
        Category :
      </label>

      <div className={cn("rounded-md border-1  border-black/30 relative overflow-hidden", { "min-h-52": show })}>
        <input
          onFocus={() => setShow(true)}
          type="text"
          id="category"
          className="bg-outlined w-full  p-2 outline-none text-sm md:text-base"
          placeholder="Fast-Food"
          {...register("category_name", { required: true })}

          // onBlur={() => setShow(false)}
        />

        <ul className={cn("z-20 rounded-b-md absolute w-full none", { block: show })}>
          {categories.length > 0 ? (
            categories.map(({ category_name: name, category_id: id }) => (
              <li key={id} className="hover:bg-gray-300 p-2 cursor-pointer " onClick={() => handleSelectCategory(name)}>
                {name}
              </li>
            ))
          ) : (
            <li
              className="w-[80%] h-full mx-auto text-xl text-gray-500 font-semibold bg-red-500"
              onClick={() => {
                // statCategories.push({ id: "new", name: watch("category") });

                setCategories(statCategories);
                setShow(false);
              }}
            >
              Click here to create new category
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MealCategories;

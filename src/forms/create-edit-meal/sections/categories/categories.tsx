import { cn } from "@/utils";
import { useState } from "react";
import { Controller } from "react-hook-form";

type Props = { statCategories: { category_name: string; category_id: string }[]; control: any };

const statCategories2 = [
  { category_id: "fast-food", category_name: "Fast Food" },
  { category_id: "drinks", category_name: "Drinks" },
  { category_id: "main", category_name: "Main" },
  { category_id: "snacks", category_name: "Snacks" },
];

const MealCategoriesSec = ({ statCategories, control }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [categories, setCategories] = useState<Props["statCategories"]>(statCategories2);

  return (
    <Controller
      control={control}
      name="category_name"
      rules={{ required: true }}
      render={({ field: { value, onChange, ref, onBlur, ...field } }) => {
        return (
          <div
            onFocus={() => {
              setShow(true);
            }}
          >
            <label className="pl-0.5 font-semibold" htmlFor="category_name">
              Category :
            </label>

            <div className={cn("rounded-md border-1  border-black/30 relative overflow-hidden", { "min-h-52": show })}>
              <input
                {...field}
                value={value.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                onBlur={() => {
                  setShow(false);
                }}
                id="category_name"
                type="text"
                className="bg-outlined w-full  p-2 outline-none text-sm md:text-base"
                placeholder="Fast-Food"
              />

              <ul className={cn("z-20 rounded-b-md absolute w-full none", { block: show })}>
                {categories.length > 0 ? (
                  categories.map(({ category_name: name, category_id: id }) => (
                    <li
                      key={id}
                      className="hover:bg-gray-300 p-2 cursor-pointer "
                      onClick={() => {
                        onChange(name);
                      }}
                    >
                      {name}
                    </li>
                  ))
                ) : (
                  <li
                    className="w-[80%] h-full mx-auto text-xl text-gray-500 font-semibold bg-red-500"
                    onClick={() => {
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
      }}
    />
  );
};

export default MealCategoriesSec;

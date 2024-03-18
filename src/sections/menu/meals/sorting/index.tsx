import { CustomButton } from "@/components/ui";
import DropdownMenu from "@/components/ui/dropdown";
import { cn, kebabToString } from "@/utils";
import { Menu } from "@headlessui/react";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const options = [
  { id: "", label: "Clear" },
  { id: "price", label: "Price" },
  { id: "rating", label: "Rating" },
  { id: "popularity", label: "Popularity" },
];

const Sorting = ({ category }: { category: string }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeId = searchParams.get("sortBy") || "";

  const activeLabel = useMemo(() => (activeId ? options.find((option) => option.id === activeId)?.label : ""), [activeId]);

  function filterByCategory(category: string) {
    category ? searchParams.set("sortBy", category) : searchParams.delete("sortBy");

    setSearchParams(searchParams);
  }

  const triggerer = (
    <CustomButton variant="outlined" borderRadius="full" className="min-w-52 border-black/30 text-opacity-70">
      Sort by {activeLabel}
    </CustomButton>
  );

  return (
    <header className="flex items-center justify-between  sticky top-0 backdrop-blur-md	py-6 ">
      <h4 className="text-3xl font-semibold">{kebabToString(category)}</h4>

      <DropdownMenu triggerer={triggerer}>
        <ul className="px-1 py-1 ">
          {options.map(({ id, label }) => (
            <Menu.Item as="li" key={label}>
              {() => (
                <button
                  onClick={() => filterByCategory(id)}
                  className={cn("group flex w-full items-center rounded-md px-2 py-2 text-sm", {
                    "bg-primary text-white font-semibold": activeId === id && id,
                    "opacity-50": !id,
                  })}
                >
                  {label}
                </button>
              )}
            </Menu.Item>
          ))}
        </ul>
      </DropdownMenu>
    </header>
  );
};

export default Sorting;

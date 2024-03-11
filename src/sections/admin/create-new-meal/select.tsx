import { useClickOutside } from "@/hooks";
import { cn } from "@/utils";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";

const stats = [
  { id: "fast-food", name: "Fast Food" },
  { id: "drinks", name: "Drinks" },
  { id: "main", name: "Main" },
  { id: "snacks", name: "Snacks" },
];

const Selecting = () => {
  const [allCategories, setAllCategories] = useState<{ id: string | number; name: string }[]>(stats);
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [initialFocus, setInitialFocus] = useState(true);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1); // Track focused category index

  const filteredCategories = useMemo(() => {
    if (value && !initialFocus) {
      return allCategories.filter((cat) => cat.name.toLowerCase().includes(value.toLowerCase()));
    }
    return allCategories;
  }, [value, initialFocus]);

  function selectCategory(name: string) {
    setValue(name);
    reset();
  }

  /* ---------------------------- Add New Category ---------------------------- */

  function addNewCategory() {
    setAllCategories((prev) => {
      const newCat = { id: prev.length + 1, name: value };
      return [...prev, newCat];
    });

    reset();
  }

  useEffect(() => {
    const handleKeyboardEvent = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Enter":
          addNewCategory();
          break;
        case "Escape":
          reset();
          break;
        case "ArrowDown":
          // e.preventDefault(); // Prevent scrolling the page
          if (filteredCategories.length > 0) {
            const newIndex = (focusedIndex + 1) % filteredCategories.length;
            setFocusedIndex(newIndex);
            focusedElement.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
            setValue(filteredCategories[newIndex].name);
          }
          break;
        case "ArrowUp":
          // e.preventDefault(); // Prevent scrolling the page
          if (filteredCategories.length > 0) {
            const newIndex = (focusedIndex - 1 + filteredCategories.length) % filteredCategories.length;
            setFocusedIndex(newIndex);
            focusedElement.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
            setValue(filteredCategories[newIndex].name);
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyboardEvent);
    return () => {
      window.removeEventListener("keydown", handleKeyboardEvent);
    };
  }, [value, filteredCategories]);

  /* ------------------------------ Filter Query ------------------------------ */
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    if (initialFocus) {
      setInitialFocus(false);
    }
  }

  /* ----------------------------- Reseting State ----------------------------- */
  const inputRef = useRef<HTMLInputElement>(null);
  function reset() {
    setShow(false);
    setInitialFocus(true);
    inputRef.current?.blur();
    setFocusedIndex(-1);
  }

  /* ------------------------------ Click outside ----------------------------- */
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, reset);

  const focusedElement = useRef<HTMLLIElement>(null);

  return (
    <Fragment>
      <div ref={ref} className={cn("w-1/3 mx-auto my-10")}>
        <div
          className={cn("rounded-md border-1 border-black/30 relative overflow-y-hidden", {
            "min-h-52": show,
          })}
        >
          <input
            onFocus={() => setShow(true)}
            ref={inputRef}
            type="text"
            value={value}
            onChange={handleChange}
            id="category"
            className="bg-outlined w-full  p-2 outline-none text-sm md:text-base"
            placeholder="Fast-Food"
          />

          <ul
            className={cn("z-20 list rounded-b-md absolute w-full pb-10", {
              "max-h-52 overflow-y-scroll ": show,
            })}
          >
            {filteredCategories.length > 0 ? (
              filteredCategories.map(({ id, name }, i) => (
                <li
                  key={id}
                  ref={focusedIndex === i ? focusedElement : null}
                  className={cn("p-2 cursor-pointer focus:bg-red-500", {
                    "hover:bg-gray-300": value !== name,
                    "bg-gray-300": value === name,
                    "bg-red-400": i === focusedIndex, // Apply different background color for focused category
                  })}
                  onClick={() => selectCategory(name)}
                >
                  {name}
                </li>
              ))
            ) : (
              <li
                onClick={addNewCategory}
                className="h-full mx-auto text-base text-gray-800 font-semibold bg-red-500 mr-2 px-3 truncate text-center"
              >
                Click here
              </li>
            )}
          </ul>
        </div>
      </div>
      {/* <div className={cn("w-1/3 mx-auto my-10 rounded-md border-1 border-black/30")}>
        <input
          type="text"
          value={""}
          // onChange={handleChange}

          className="bg-outlined w-full  p-2 outline-none text-sm md:text-base"
          placeholder="Fast-Food"
        />
      </div> */}
    </Fragment>
  );
};

export default Selecting;

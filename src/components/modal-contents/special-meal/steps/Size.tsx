import { SizeType } from "@/constants/types/spcieal-meal";

const Sizes = ({
  sizes,
}: // setSize,
// selected,
{
  sizes: SizeType[];
  // selected: string | undefined;
  // setSize: (size: { size: string }) => void;
}) => {
  return (
    <ul className="grid gap-3 text-2xl font-semibold">
      {sizes.map((size, i) => (
        <li key={size.id} className="flex items-center gap-4">
          <input
            type="radio"
            id={size.id}
            name="{size.id}"
            value={size.id}
            className="w-7 h-7 mr-3"
            // checked={selected === size.id}
            // onChange={() => setSize({ size: size.id })}
          />
          <label htmlFor={size.id} className="flex items-center gap-2">
            <img
              src={size.img}
              alt="size"
              className="w-12 h-12"
              style={{
                width: (i + 10) * 5 + "px",
                height: (i + 10) * 5 + "px",
              }}
            />
            {size.name}
          </label>

          <p className="italic font-normal ml-auto">${size.price}</p>
        </li>
      ))}
    </ul>
  );
};

export default Sizes;

import { CustomModal } from "@//components";
import { useState } from "react";

const AddToOrderBtn = ({
  selected,
  notable = true,
}: {
  selected: number | boolean;
  notable?: boolean;
}) => {
  const [note, setNote] = useState(false);

  return (
    <div className="flex items-center justify-center gap-3 overflow-hidden w-full mt-4">
      <button
        style={{
          height: selected ? "40px" : "0px",
        }}
        className="bg-primary rounded-s  w-full  text-white font-semibold transition-all duration-200 ease-in-out offer-shadow"
      >
        Add To Order
      </button>
      {notable && (
        <button
          onClick={() => setNote(true)}
          style={{
            height: selected ? "40px" : "0px",
          }}
          className="bg-secondary rounded-s px-3 py-2   text-white font-semibold transition-all duration-200 ease-in-out offer-shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
      )}
      <CustomModal isOpen={note} closeModal={() => setNote(false)} />
    </div>
  );
};

export default AddToOrderBtn;

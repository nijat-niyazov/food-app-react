import { FC, memo } from "react";
import { UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<any>;
};

const Note: FC<Props> = ({ register }) => {
  return (
    <textarea
      placeholder="Write your special instructions here..."
      className="border-1 w-full border-black/30 rounded-md p-4 outline-none"
      {...register("note")}
    />
  );
};

export default memo(Note);

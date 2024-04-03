import { HTMLAttributes } from "react";

type MenuSearchProps = {} & HTMLAttributes<HTMLDivElement>;

const MenuSearch = ({ className }: MenuSearchProps) => {
  return <input type="text" className={`w-full p-3 rounded-full border-2 border-black/30 ${className}`} placeholder="Search from menu" />;
};

export default MenuSearch;

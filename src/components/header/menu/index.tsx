import { useState } from "react";
import { CustomModal } from "../..";

const MenuToggler = () => {
  const [toggle, setToggle] = useState(false);

  const handleOpen = () => setToggle(true);
  const handleClose = () => setToggle(false);

  return (
    <>
      <button onClick={handleOpen} className="grid gap-2 w-10 md:hidden">
        <span
          style={{
            rotate: toggle ? "45deg" : "0deg",
            transform: toggle ? `translate(10px,6px)` : "",
          }}
          className="w-full h-1 rounded-full text-text bg-text transition-all duration-200 "
        ></span>
        <span
          style={{
            opacity: toggle ? "0" : "1",
          }}
          className="w-full h-1 rounded-full text-text bg-text transition-all duration-200"
        ></span>
        <span
          style={{
            rotate: toggle ? "-45deg" : "0deg",
            transform: toggle ? `translate(10px,-6px)` : "",
          }}
          className="w-full h-1 rounded-full text-text bg-text transition-all duration-200"
        ></span>
      </button>
      <CustomModal isOpen={toggle} closeModal={handleClose} />
    </>
  );
};

export default MenuToggler;

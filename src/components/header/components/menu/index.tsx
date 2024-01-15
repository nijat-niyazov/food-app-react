import { MenuModal } from "@/components/c-modal/modal-contents";
import useModalStore, { openModal } from "@/stores/modal";
import { useEffect, useState } from "react";

const MenuToggler = () => {
  const modalIsOpened = useModalStore((state) => state.opened);
  const [toggle, setToggle] = useState(false);

  const handleOpen = () => {
    setToggle(true);
    openModal(<MenuModal />);
  };

  useEffect(() => {
    if (!modalIsOpened) {
      setToggle(false);
    }
  }, [modalIsOpened]);

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
    </>
  );
};

export default MenuToggler;

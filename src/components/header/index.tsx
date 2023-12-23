import { useState } from "react";
import { Link } from "react-router-dom";
import { basket, girl, logo } from "../../assets/images";
import CustomModal from "../c-modal";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header>
      <nav className=" flex items-center justify-between p-4">
        <img src={logo} />

        <input
          type="text"
          className="p-2 w-full border-black outline-none border-1"
        />

        <button onClick={handleToggle} className="grid gap-2 w-10">
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
      </nav>

      <CustomModal isOpen={toggle} closeModal={handleToggle} />

      <div className="border-t-2 flex  w-full">
        <div className="w-1/2 p-4  bg-bej flex items-center justify-center gap-4">
          <img src={girl} className="w-11 h-11 rounded-full object-cover" />
          <div>
            <h3 className="text-primary text-sm font-semibold">Aycan</h3>
            <Link
              className="text-text text-xs border-b-2 border-text font-normal"
              to={"/"}
            >
              My Account
            </Link>
          </div>
        </div>

        <div className="w-1/2 p-4  bg-secondary flex items-center justify-center gap-4">
          <img src={basket} className="w-11 h-11 object-cover" />
          <p className="text-white text-base  font-semibold font-poppins">
            GBP 79.89
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

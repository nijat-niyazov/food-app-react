import { NavLink } from "react-router-dom";

const NavigationOfHeader = () => {
  return (
    <nav className="hidden md:flex items-center gap-5">
      <NavLink
        // onClick={() => console.log()}
        to="/"
        className={({ isActive }) =>
          [
            isActive ? "bg-primary text-white" : "hover:bg-primary/50 ",
            " px-9 py-2  font-medium text-lg rounded-full transition-colors duration-200",
          ].join(" ")
        }
      >
        Home
      </NavLink>
      <NavLink
        // onClick={() => console.log()}
        to="/menu/fast-food"
        className={({ isActive }) =>
          [
            isActive ? "bg-primary text-white" : "hover:bg-primary/50 ",
            " px-9 py-2  font-medium text-lg rounded-full transition-colors duration-200",
          ].join(" ")
        }
      >
        Browse Menu
      </NavLink>
      <NavLink
        // onClick={() => console.log()}
        to="/branches"
        className={({ isActive }) =>
          [
            isActive ? "bg-primary text-white" : "hover:bg-primary/50 ",
            " px-9 py-2  font-medium text-lg rounded-full transition-colors duration-200",
          ].join(" ")
        }
      >
        Branches
      </NavLink>
      {/* <NavLink
            // onClick={() => console.log()}
            to="/branches"
            className={({ isActive }) =>
              [
                isActive ? "bg-primary text-white" : "",

                " px-9 py-2  font-medium text-lg rounded-full transition-colors duration-200",
              ].join(" ")
            }
          >
            Special Offers
          </NavLink>
          <NavLink
            // onClick={() => console.log()}
            to="/branches"
            className={({ isActive }) =>
              [
                isActive ? "bg-primary text-white" : "",

                " px-9 py-2  font-medium text-lg rounded-full transition-colors duration-200",
              ].join(" ")
            }
          >
            Branches
          </NavLink> */}
    </nav>
  );
};

export default NavigationOfHeader;

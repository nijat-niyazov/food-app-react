import { Moon, Sun } from "@/assets/icons";
import { useEffect, useState } from "react";

const Theme = () => {
  const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? systemPreference);

  const toggleTheme = () => {
    const currentTheme = theme === "light" ? "dark" : "light";
    setTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // const [isOpened, setIsOpened] = useState(false);

  // function handleOpen() {
  //   console.log("opened");

  //   setIsOpened(true);
  // }
  // function handleClose() {
  //   console.log("closed");

  //   setIsOpened(false);
  // }

  // const [aciqdir, setAciqdir] = useState(false);
  // function handleaciqdir() {
  //   setAciqdir(false);
  // }

  return (
    <button
      style={{
        color: theme === "dark" ? "#F8F8F8" : "#000",
        backgroundColor: theme === "dark" ? "#000" : "#F8F8F8",
      }}
      onClick={toggleTheme}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
    // <button
    //   style={{
    //     color: theme === "dark" ? "#F8F8F8" : "#000",
    //     backgroundColor: theme === "dark" ? "#000" : "#F8F8F8",
    //   }}
    //   onClick={(e) => {
    //     handleOpen();

    //     console.log("buttonluq");
    //   }}
    // >
    //   {theme === "dark" ? "Light Mode" : "Dark Mode"}

    //   <CustomModal isOpened={isOpened} handleClose={handleClose}>
    //     <div className="p-10">
    //       <CustomButton
    //         variant="primary"
    //         onClick={(e) => {
    //           e.stopPropagation();
    //           setAciqdir(true);
    //         }}
    //       >
    //         Open another one
    //       </CustomButton>
    //       {/* <CustomModal isOpened={aciqdir} handleClose={handleaciqdir}> */}
    //       <p className="p-20e">Bax bu ikincidi uje</p>
    //       {/* </CustomModal> */}
    //     </div>
    //   </CustomModal>
    // </button>
  );
};

export default Theme;

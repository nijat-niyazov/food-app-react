import { useEffect, useState } from "react";
import { CustomButton } from "..";

const GoToUp = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => setVisible(window.scrollY > (window.innerWidth > 640 ? 700 : 300) ? true : false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <CustomButton
      variant="primary"
      size="lg"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      style={{
        transform: visible ? "scale(1)" : "scale(0)",
      }}
      className="w-auto fixed bottom-7 right-6 px-5 py-3 z-50"
    >
      ⬆
    </CustomButton>
  );
};

export default GoToUp;

import { useEffect, useState } from "react";

const GoToUp = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => setVisible(window.scrollY > 700 ? true : false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      style={{
        transform: visible ? "scale(1)" : "scale(0)",
      }}
      className="bg-primary rounded-xl fixed bottom-7 right-6 px-5 py-3 text-lg z-50 text-white transition-all duration-200"
    >
      ⬆
    </button>
  );
};

export default GoToUp;

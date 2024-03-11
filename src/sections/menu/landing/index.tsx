import { Clock } from "@/assets/icons";
import { fast_food, happy_girl } from "@/assets/images";
import { MotionDiv } from "@/components";
import { useChangeImages } from "@/hooks";
import { cn } from "@/utils";

const images = [fast_food, happy_girl];
const LandingMenu = () => {
  const imageIndex = useChangeImages(images.length, 4000);

  return (
    <MotionDiv
      initial={{ x: "10%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2 }}
      className="hidden md:block  relative mb-20 container bg-darkblue rounded-xl"
    >
      <img src={fast_food} alt="fast_food" className=" brightness-50 opacity-30 " />

      <MotionDiv
        initial={{ y: "0%", opacity: 0 }}
        animate={{ y: "-50%", opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
        className="absolute top-1/2 right-20 -translate-y-1/2  w-[500px] h-[320px] object-cover"
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="slider_img"
            className={cn("w-full h-full object-cover rounded-xl absolute inset-0 transition-opacity duration-1000", {
              "opacity-100": imageIndex === index,
              "opacity-0": imageIndex !== index,
            })}
          />
        ))}
        {/* <img src={fast_food} alt="fast_food" className="w-full h-full object-cover rounded-xl" /> */}
      </MotionDiv>

      <p className="bg-oranged flex-centered rounded-r-xl absolute bottom-0 left-0 translate-y-1/2 py-4 px-16 gap-4 ">
        <Clock />
        <span className="text-white text-lg font-semibold">Open until 3:00 AM</span>
      </p>
    </MotionDiv>
  );
};

export default LandingMenu;

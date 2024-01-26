import { MotionDiv } from "@/components";

const LandingMenu = () => {
  return (
    <MotionDiv
      initial={{
        x: "10%",
      }}
      animate={{
        x: 0,
      }}
      transition={{
        duration: 0.2,
      }}
      className="relative mb-20 container"
    >
      {/* <img
        src={fast_food}
        alt="fast_food"
        className=" brightness-50 opacity-30"
      />
      <p className="bg-primary flex-centered rounded-r-xl absolute bottom-0 left-0 translate-y-1/2 py-4 px-16 gap-4 ">
        <Clock />

        <span className="text-white text-lg font-semibold">
          Open until 3:00 AM
        </span>
      </p> */}
    </MotionDiv>
  );
};

export default LandingMenu;

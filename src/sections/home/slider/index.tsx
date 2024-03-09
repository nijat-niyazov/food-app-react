import { madmazel, madmazel_pizza } from "@/assets/images";
import Notifications from "./notifications";
import Searching from "./searching";

const HomeSlider = () => {
  return (
    <section className="min-h-[600px] bg-text rounded-xl w-full relative hidden md:block opacity-100">
      <Searching />

      {/* <div className="w-[420px] pointer-events-none h-[410px] absolute left-1/2 bottom-0 -translate-x-[60%] z-10 bg-[url('@/assets/images/madmazel_pizza.png')] bg-no-repeat bg-center  opacity-20 grayscale" /> */}

      <img
        src={madmazel_pizza}
        alt="background_girl"
        className="w-[380px] pointer-events-none h-[500px] absolute left-1/2 bottom-0 -translate-x-[60%] z-10 grayscale opacity-20 object-cover"
      />

      <img
        src={madmazel}
        alt="madmazel"
        className="w-[480px] h-[500px] absolute left-1/2 bottom-0 -translate-x-32 z-10 object-contain pointer-events-none"
      />

      <Notifications />
    </section>
  );
};

export default HomeSlider;

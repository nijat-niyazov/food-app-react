import { madmazel, madmazel_pizza } from "@/assets/images";
import Notifications from "./notifications";
import HomeSearch from "./search";

const HomeSlider = () => {
  return (
    <section className="md:min-h-[600px] bg-text rounded-xl w-full relative opacity-100">
      <div className="px-6 py-10 text-white text-center  md:absolute md:top-1/2 md:-translate-y-1/2 md:left-10 md:min-h-96  md:text-start md:p-0">
        <p className="text-base  md:text-base mb-5">Order to your table without waiter </p>
        <p className="font-semibold  text-3xl md:text-5xl mb-5">
          Feast Your Senses, <br /> <span className="text-primary">Fast and Fresh</span>
        </p>

        <HomeSearch className="md:w-[90%]" />
      </div>

      <img
        src={madmazel_pizza}
        alt="background_girl"
        className="w-[380px] pointer-events-none h-[500px] absolute left-1/2 bottom-0 -translate-x-[60%] z-10 grayscale opacity-20 object-cover hidden md:block"
      />

      <img
        src={madmazel}
        alt="madmazel"
        className="w-[480px] h-[500px] absolute left-1/2 bottom-0 -translate-x-32 z-10 object-contain pointer-events-none hidden md:block"
      />

      <Notifications />
    </section>
  );
};

export default HomeSlider;

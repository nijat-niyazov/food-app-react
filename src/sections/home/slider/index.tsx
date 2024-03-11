import { madmazel, madmazel_pizza } from "@/assets/images";
import Notifications from "./notifications";
import HomeSearch from "./search";

const HomeSlider = () => {
  return (
    <section className="min-h-[600px] bg-text rounded-xl w-full relative hidden md:block opacity-100">
      <div className="w-auto absolute top-1/2 -translate-y-1/2 min-h-96 text-white left-10">
        <p className="text-base mb-5">Order food without waiter to your table</p>
        <p className="font-semibold text-5xl mb-5">
          Feast Your Senses, <br /> <span className="text-primary">Fast and Fresh</span>
        </p>

        <HomeSearch className="w-[90%]" />
      </div>

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

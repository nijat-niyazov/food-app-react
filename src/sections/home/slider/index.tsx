import { logo, madmazel, madmazel_pizza } from "@/assets/images";
import HeaderSearchCopy from "@/components/header/components/search/Copy";

const HomeSlider = () => {
  return (
    <section className="min-h-[600px] bg-text rounded-xl w-full relative">
      <div className="w-auto absolute top-1/2 -translate-y-1/2 min-h-96 text-white left-10">
        <p className="text-base mb-5">Order Restaurant food, takeaway and groceries.</p>
        <p className="font-semibold text-5xl mb-5">
          Feast Your Senses, <br /> <span className="text-primary">Fast and Fresh</span>
        </p>

        <div className="w-[90%]">
          <HeaderSearchCopy />
        </div>
      </div>

      <img
        src={madmazel_pizza}
        alt="pizza"
        className="w-[480px] h-[500px] absolute left-1/2 bottom-0 -translate-x-[60%] z-10 grayscale opacity-20 object-cover"
      />
      <img src={madmazel} alt="madmazel" className="w-[480px] h-[500px] absolute left-1/2 bottom-0 -translate-x-32 z-10 object-contain" />

      <div className="w-[550px] z-0 ml-auto h-[90%] rounded-tl-[300px] absolute bottom-0 right-0  w-500 bg-primary ">
        <ul className="relative">
          <li className="p-4 rounded-xl bg-white w-[300px] absolute top-20 left-1/4 ">
            <div className="flex items-center justify-between mb-3">
              <img src={logo} alt="logo" className="w-14 object-cover" />
              <span className="opacity-40 text-sm">now</span>
            </div>
            <p className="font-semibold text-sm">We’ve Received your order!</p>
            <p className="text-sm">Awaiting Restaurant acceptance </p>
          </li>

          <li className="p-4 rounded-xl bg-white w-[300px] absolute top-60 right-3 ">
            <div className="flex items-center justify-between mb-3">
              <img src={logo} alt="logo" className="w-14 object-cover" />
              <span className="opacity-40 text-sm">now</span>
            </div>
            <p className="font-semibold text-sm">Order accepted! ✅</p>
            <p className="text-sm">Your order will be delivered shortly </p>
          </li>

          <li className="p-4 rounded-xl bg-white w-[300px] absolute top-96 left-1/3 ">
            <div className="flex items-center justify-between mb-3">
              <img src={logo} alt="logo" className="w-14 object-cover" />
              <span className="opacity-40 text-sm">now</span>
            </div>
            <p className="font-semibold text-sm">We’ve Received your order!</p>
            <p className="text-sm">Awaiting Restaurant acceptance </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeSlider;

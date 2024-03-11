import { download, family, logo } from "@/assets/images";

const Order = () => {
  return (
    <section className="min-h-[530px] md:min-h-[480px] rounded-xl relative text-darkblue  py-10 md:pr-5 md:py-20  bej md:my-20 ">
      <div className="md:ml-auto grid  gap-6 place-items-center md:w-[60%]  relative">
        <header className="flex items-center justify-center text-3xl md:text-6xl  font-bold ">
          <img src={logo} alt="family" className="w-28 h-7 object-cover md:w-64 md:h-16" />
          <span className=" [text-shadow:_0_4px_4px_rgb(0_0_0_/_30%)]">ing </span>
          <p className="ml-5">is more</p>
        </header>

        <aside className="rounded-full bg-black min-h-20 w-[150%]  absolute z-0 -translate-y-5 right-0 hidden md:block" />

        <p className="font-medium text-2xl md:text-[50px]  rounded-full text-center md:text-white w-full z-20 md:my-10">
          <span className="text-oranged underline">Personalised</span> & Instant
        </p>

        <p className="text-base md:text-2xl">Download the Order.uk app for faster ordering</p>

        <img src={download} alt="app_store" className="w-72 md:w-[400px]" />
      </div>

      <img
        src={family}
        alt="family"
        className="absolute bottom-1 left-1/2 -translate-x-[53%] w-84 h-64 grayscale opacity-20 md:w-[650px] md:h-[515px] md:left-[300px] md:bottom-3 object-cover"
      />

      <img
        src={family}
        alt="family"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-84 h-64 md:w-[650px] md:h-[510px] md:left-64 md:bottom-14 object-cover "
      />

      {/* <div className="absolute bg-[url('@/assets/images/family.png')] bottom-0 left-1/2 -translate-x-1/2 w-80 h-64 bg-center "></div> */}
    </section>
  );
};

export default Order;

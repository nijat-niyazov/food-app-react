import { ArrowDown } from "@/assets/icons";
import { MotionDiv } from "@/components";

const DiscountMenu = () => {
  return (
    <>
      <div className="flex text-black  items-center justify-between ">
        <span className="text-[16px] md:text-3xl font-bold">Up to -40% Discount Offers</span>
        <div className="p-2 rounded-full border-1  border-black flex gap-1 text-[10px] items-center ">
          <button>
            <ArrowDown />
          </button>
          <span>Pizza & Fast Food</span>
        </div>
      </div>

      <ul className="flex items-center gap-4 overflow-x-auto">
        <MotionDiv
        // initial={{ x: "100%" }}
        // animate={{
        //   x: 0,
        // }}
        >
          <li className="relative min-w-[150px] min-h-[150px]">
            <div className="absolute discount-linear w-full h-full z-10  rounded-xl"></div>
            <span className="bg-darkblue text-white absolute right-5 text-base font-bold rounded-b-[4px] py-2 px-1">-17%</span>
            {/* <img src={burger} alt="burger" className="object-cover" /> */}

            <span className="text-white text-sm font-bold absolute bottom-0 left-0 w-full h-10 bg-black/50 flex-centered">Burger</span>
          </li>
        </MotionDiv>
        <li className="relative min-w-[150px] min-h-[150px]">
          <div className="absolute discount-linear w-full h-full z-10  rounded-xl"></div>
          <span className="bg-darkblue text-white absolute right-5 text-base font-bold rounded-b-[4px] py-2 px-1">-17%</span>
          {/* <img src={burger} alt="burger" className="object-cover" /> */}

          {/* <span className="text-white text-sm font-bold absolute bottom-0 left-0 w-full h-10 bg-black/50 flex-centered">
            Burger
          </span> */}
        </li>
        <li className="relative min-w-[150px] min-h-[150px]">
          <div className="absolute discount-linear w-full h-full z-10  rounded-xl"></div>
          <span className="bg-black text-white absolute right-5 text-base font-bold rounded-b-[4px] py-2 px-1">-17%</span>
          {/* <img src={burger} alt="burger" className="object-cover" /> */}

          {/* <span className="text-white text-sm font-bold absolute bottom-0 left-0 w-full h-10 bg-black/50 flex-centered">
            Burger
          </span> */}
        </li>
        <li className="relative min-w-[150px] min-h-[150px]">
          <div className="absolute discount-linear w-full h-full z-10  rounded-xl"></div>
          <span className="bg-darkblue text-white absolute right-5 text-base font-bold rounded-b-[4px] py-2 px-1">-17%</span>
          {/* <img src={burger} alt="burger" className="object-cover" /> */}

          {/* <span className="text-white text-sm font-bold absolute bottom-0 left-0 w-full h-10 bg-black/50 flex-centered">
            Burger
          </span> */}
        </li>
      </ul>
    </>
  );
};

export default DiscountMenu;

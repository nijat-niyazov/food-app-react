import { hire } from "@/assets/images";

const Hire = () => {
  return (
    <div className="relative rounded-xl bg-[url('../../../assets/images/hire.png')] w-full h-[420px]">
      <img src={hire} alt="" />

      <span className="bg-white text-darkblue font-bold text-lg rounded-b-xl absolute top-0 left-5 px-7 py-5">
        Earn more with lower fees
      </span>
    </div>
  );
};

export default Hire;

import HeaderSearchCopy from "@/components/header/components/search/Copy";

const Searching = () => {
  return (
    <div className="w-auto absolute top-1/2 -translate-y-1/2 min-h-96 text-white left-10">
      <p className="text-base mb-5">Order Restaurant food, takeaway and groceries.</p>
      <p className="font-semibold text-5xl mb-5">
        Feast Your Senses, <br /> <span className="text-primary">Fast and Fresh</span>
      </p>

      <div className="w-[90%] ">
        <HeaderSearchCopy />
      </div>
    </div>
  );
};

export default Searching;

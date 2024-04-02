import { fast_food } from "@/assets/images";
import { Link } from "react-router-dom";

function Skeletons() {
  return Array.from({ length: 3 }).map((_, i) => (
    <li key={i} className="flex items-center gap-3 bg-primary p-2 ">
      <div className="w-14 h-14 bg-gray-500 rounded-full animate-pulse" />
      <div className="grow">
        <div className="w-9/12 h-4 bg-gray-500 rounded-full animate-pulse mb-4" />
        <div className="w-full h-3 bg-gray-500 rounded-full animate-pulse mb-1" />
      </div>
    </li>
  ));
}

function Meals() {
  return Array.from({ length: 3 }).map((_, i) => (
    <li key={i}>
      <Link to={"/"} className="flex items-center gap-3 bg-primary p-2 z-50">
        <img src={fast_food} className="w-14 object-cover h-14 rounded-full" />
        <div className="grow overflow-hidden">
          <p className="mb-2 text-text font-semibold">Farm House Xtreme Pizza</p>
          <p className="mb-1 truncate text-sm ">
            1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks
          </p>
        </div>
      </Link>
    </li>
  ));
}

const Results = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <ul className="absolute w-full bg-white left-0 top-full mt-2 rounded-lg overflow-auto z-50">{isLoading ? <Skeletons /> : <Meals />}</ul>
  );
};

export default Results;

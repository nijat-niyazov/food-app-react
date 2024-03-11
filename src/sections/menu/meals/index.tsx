import { MealType } from "@/constants/types/meal";
import { useGetData, useScrollDirection } from "@/hooks";
import { getMenuItems } from "@/services/api/menu";

import { CustomButton } from "@/components/ui";
import { useState } from "react";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";

function MealSkeleton({ index }: { index: number }) {
  return (
    <li style={{ animationDelay: index * 5 + "s" }} className="rounded-xl bg-white border-1 border-black/10 px-4 py-8  offer-shadow">
      <div className="grid grid-cols-[1fr_auto] gap-3 mb-5 items-start justify-between px-4">
        <span className="text-xl font-semibold text-text bg-gray-200 rounded-full animate-pulse h-8"></span>

        <div className="w-28 h-28 bg-gray-200 rounded-full animate-pulse row-span-2"></div>

        <p className="bg-gray-200 rounded-full animate-pulse h-14"></p>
      </div>
    </li>
  );
}

type QueryType = {
  data: MealType[];
  isPending: boolean;
  error?: string | null;
};

const Meals = () => {
  const scrollDirection = useScrollDirection();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = useState(0);
  const { pathname, search } = useLocation();

  const { category } = useParams() as { category: "fast-food" | "drinks" };

  const navigate = useNavigate();

  // : { data: MealType[]; isPending: boolean; error?: string | null }
  const { isPending, error, data: meals } = useGetData(["menuData", category], getMenuItems);

  console.log(meals);

  return (
    <div className="container">
      {/* <div
        style={{
          top: scrollDirection === "down" ? "-100%" : "10px",
        }}
        className="border-black border-1 rounded-lg px-5 py-2 flex mb-5 items-center justify-between sticky transitial-all duration-300 ease-in-out bg-white"
      >
        <div className="flex items-center gap-2">
          <img src={menu_book} alt="menu_book" />
          <h4 className="text-3xl font-semibold">Menu</h4>
        </div>

        <p>Pizzas</p>
      </div> */}

      <header className="flex items-center justify-between  sticky top-0 backdrop-blur-md	py-6 ">
        <h4 className="text-3xl font-semibold">Pizzas</h4>
        <CustomButton
          variant="outlined"
          onClick={() => console.log("sort")}
          // className="px-6 py-4 bg-grey text-base rounded-full  border-1 border-black/10"
          borderRadius="full"
          className="w-auto"
        >
          Sort by Price
        </CustomButton>
      </header>

      {/* <ul className="flex flex-col gap-10">
        {isPending ? [...new Array(4)].map((_, i) => <MealSkeleton index={i} key={i} />) : <Militos meals={meals} category={category} />}
      </ul> */}
    </div>
  );
};

export default Meals;

import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Body from "./body";
import Categories from "./header";

const AllMeals = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    return () => {
      searchParams.delete("category");
      setSearchParams(searchParams, { replace: true });
    };
  }, []);

  return (
    <div className=" rounded-md border-black/30 container mt-5">
      <Categories />

      <Body />
    </div>
  );
};

export default AllMeals;

/* -------------------------------- Skeletons ------------------------------- */

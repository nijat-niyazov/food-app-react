import { CustomButton } from "@/components/ui";
import { cn } from "@/utils";
import { Fragment } from "react";
import { useSearchParams } from "react-router-dom";

type Positions = {
  [key: string]: number;
};

type Props = {
  data: { category_id: string; category_name: string }[];
};

const CategoriesTabs = ({ data }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activecategory = searchParams.get("category");

  function selectCategory(category: string) {
    category ? searchParams.set("category", category) : searchParams.delete("category");
    setSearchParams(searchParams, { replace: true });
  }

  return (
    <Fragment>
      <CustomButton
        className={cn(" z-10", { "text-white": !activecategory })}
        borderRadius="full"
        onClick={() => selectCategory("")}
        variant={!activecategory ? "primary" : "outlined"}
      >
        All
      </CustomButton>
      {data.map(({ category_id: id, category_name: name }) => (
        <CustomButton
          key={id}
          className={cn(" z-10", { "text-white": activecategory === id })}
          borderRadius="full"
          onClick={() => selectCategory(id)}
          variant={activecategory === id ? "primary" : "outlined"}
        >
          {name}
        </CustomButton>
      ))}
    </Fragment>
  );
};

export default CategoriesTabs;

// const sessionPositions = JSON.parse(sessionStorage.getItem("positions") as string);
// const [positions, setPositions] = useState<Positions>(sessionPositions ?? { top: 0, left: 0, width: 0, height: 0 });

// function getPositions(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, tab: string) {
//   const { top, left, width, height } = (e.target as HTMLButtonElement).getBoundingClientRect();
//   const positions = { top, left, width, height };

//   setPositions(positions);
//   sessionStorage.setItem("positions", JSON.stringify(positions));

// }

{
  /* {positions && (
        <div
          style={{
            left: positions.left + "px",
            top: 267 + "px",
            width: positions.width + "px",
            height: positions.height + "px",
          }}
          className="bg-primary absolute left-0 top-0 transition-all duration-300 ease-in-out z-0 rounded-full"
        ></div>
      )} */
}

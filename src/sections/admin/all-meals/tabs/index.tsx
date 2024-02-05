import { CustomButton } from "@/components";
import { cn, kebabToString } from "@/utils";
import { FC, useState } from "react";

type Positions = {
  top: number;
  left: number;
  width: number;
  height: number;
};

type Props = {
  activeTab: number;
  handleActiveTab: (tab: number) => void;
  data: string[];
};

const CategoriesTabs: FC<Props> = ({ activeTab, handleActiveTab, data }) => {
  const [positions, setPositions] = useState<Positions>(
    JSON.parse(sessionStorage.getItem("positions") as string) ?? { top: 0, left: 0, width: 0, height: 0 }
  );

  function getPositions(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, tab: number) {
    const { top, left, width, height } = (e.target as HTMLButtonElement).getBoundingClientRect();
    const positions = { top, left, width, height };

    setPositions(positions);
    sessionStorage.setItem("positions", JSON.stringify(positions));

    handleActiveTab(tab);
  }

  return (
    <>
      {positions && (
        <div
          style={{
            left: positions.left + "px",
            top: 267 + "px",
            width: positions.width + "px",
            height: positions.height + "px",
          }}
          className="bg-primary absolute left-0 top-0 transition-all duration-300 ease-in-out z-0 rounded-full"
        ></div>
      )}

      <CustomButton
        className={cn(" z-10", {
          "text-white": activeTab === 0,
        })}
        borderRadius="full"
        onClick={(e) => getPositions(e, 0)}
        variant="transparent"
      >
        All
      </CustomButton>
      {data.map((category, i) => (
        <CustomButton
          key={i}
          className={cn(" z-10", {
            "text-white": activeTab === i + 1,
          })}
          borderRadius="full"
          onClick={(e) => getPositions(e, i + 1)}
          variant="transparent"
        >
          {kebabToString(category)}
        </CustomButton>
      ))}
      {/* <CustomButton
        className={cn(" z-10", {
          "text-white": activeTab === 3,
        })}
        borderRadius="full"
        onClick={(e) => getPositions(e, 3)}
        variant="transparent"
      >
        Pasta
      </CustomButton>
      <CustomButton
        className={cn(" z-10", {
          "text-white": activeTab === 4,
        })}
        borderRadius="full"
        onClick={(e) => getPositions(e, 4)}
        variant="transparent"
      >
        Main
      </CustomButton>
      <CustomButton
        className={cn(" z-10", {
          "text-white": activeTab === 5,
        })}
        borderRadius="full"
        onClick={(e) => getPositions(e, 5)}
        variant="transparent"
      >
        Vegetarian
      </CustomButton>
      <CustomButton
        className={cn(" z-10", {
          "text-white": activeTab === 6,
        })}
        borderRadius="full"
        onClick={(e) => getPositions(e, 6)}
        variant="transparent"
      >
        Soup
      </CustomButton> */}
    </>
  );
};

export default CategoriesTabs;

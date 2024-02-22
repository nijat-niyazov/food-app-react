import { CustomButton } from "@/components";
import { useEffect, useRef, useState } from "react";

type Props = {
  activeTab: number;
  handleActiveTab: (tab: number) => void;
};

const tabs = ["Meals", "Create New Meal", "Customize Special Meal", "FAQ"];

type Positions = {
  x: number;
  y: number;
  height: number;
  width: number;
};

const MainTabs = ({ activeTab, handleActiveTab }: Props) => {
  const [positions, setPositions] = useState<Positions[]>([]);
  const [indicatorVisible, setIndicatorVisible] = useState(false);

  useEffect(() => {
    const parentElement = tabsRef.current;
    let positions: Positions[] = [];
    if (parentElement) {
      const childs = Array.from(parentElement.children);

      childs.forEach((child, i) => {
        const { x, y, height, width } = child.getBoundingClientRect();

        positions[i + 1] = { x, y, height, width };
      });
    }

    setPositions(positions);
    setIndicatorVisible(true);
  }, []);

  const tabsRef = useRef<HTMLDivElement>(null);

  return (
    <header className="bg-bej py-2 ">
      <div ref={tabsRef} className="flex w-[90%] mx-auto items-center gap-5 overflow-x-scroll whitespace-nowrap ">
        {indicatorVisible && (
          <div
            style={{
              left: positions[activeTab].x + "px",
              width: positions[activeTab].width + "px",
              top: positions[activeTab].y + "px",
              height: positions[activeTab].height + "px",
            }}
            className="bg-primary absolute top-0 transition-all duration-300 ease-in-out rounded-full h-5 w-20 z-0"
          ></div>
        )}
        {tabs.map((tab, i) => (
          <CustomButton
            key={i}
            // className={cn({ "hover:bg-primary/50": activeTab !== i + 1 })}
            className="z-10"
            onClick={() => handleActiveTab(i + 1)}
            borderRadius="full"
            variant={"outlined"}
            // variant={activeTab === i + 1 ? "secondary" : "outlined"}
          >
            {tab}
          </CustomButton>
        ))}
      </div>
    </header>
  );
};

export default MainTabs;

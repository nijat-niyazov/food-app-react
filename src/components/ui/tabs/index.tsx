import { CustomButton } from "@/components/ui";
import { cn } from "@/utils";
import { useEffect, useRef, useState } from "react";
import Indicator from "./indicator";

type Props = {
  activeTab: number;
  handleActiveTab: (tab: number) => void;
  tabs: string[];
};

export type Positions = {
  left: number;
  top: number;
  height: number;
  width: number;
};

const Tabs = ({ tabs, activeTab, handleActiveTab }: Props) => {
  const [positions, setPositions] = useState<Positions[]>([]);
  const [indicatorVisible, setIndicatorVisible] = useState(false);

  useEffect(() => {
    const parentElement = tabsRef.current;
    let positions: Positions[] = [];
    if (parentElement) {
      const childs = Array.from(parentElement.children);

      childs.forEach((child, i) => {
        const { left, top, height, width } = child.getBoundingClientRect();

        positions[i + 1] = { left, top, height, width };
      });
    }

    setPositions(positions);
    setIndicatorVisible(true);

    function handleClick(e: MouseEvent) {
      // console.log({
      //   x: e.clientX,
      //   y: e.clientY,
      // });
    }

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const tabsRef = useRef<HTMLDivElement>(null);

  return (
    <header className="bg-bej py-2 ">
      <div ref={tabsRef} className="flex max-w-[90%] mx-auto items-center gap-5 overflow-x-auto whitespace-nowrap ">
        {indicatorVisible && <Indicator positions={positions} activeTab={activeTab} />}
        {tabs.map((tab, i) => (
          <CustomButton
            key={i}
            className={cn("z-10", { "text-white": i + 1 === activeTab })}
            onClick={() => handleActiveTab(i + 1)}
            borderRadius="full"
            variant="transparent"
          >
            {tab}
          </CustomButton>
        ))}
      </div>
    </header>
  );
};

export default Tabs;
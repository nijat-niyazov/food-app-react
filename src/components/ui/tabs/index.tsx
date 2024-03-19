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

let tabbes = [
  { id: "world", label: "World" },
  { id: "ny", label: "N.Y." },
  { id: "business", label: "Business" },
  { id: "arts", label: "Arts" },
  { id: "science", label: "Science" },
];

const Tabs = ({ tabs, activeTab, handleActiveTab }: Props) => {
  const [positions, setPositions] = useState<Positions[]>([]);
  const [indicatorVisible, setIndicatorVisible] = useState(false);
  let [activeOne, setActiveOne] = useState(tabbes[0].id);

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
      {/* <div className="flex space-x-1 bg-gray-400 p-2 items-center justify-between">
        {tabbes.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveOne(tab.id)}
            className={cn(
              "relative rounded-full px-3 py-1.5 text-sm font-medium text-gray-800 outline-sky-400 transition focus-visible:outline-2 md:text-4xl z-50",
              { "hover:text-white/60 z-50": activeOne === tab.id }
            )}
          >
            {activeOne === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-40 bg-yellow-800  rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="z-50">{tab.label}</span>
          </button>
        ))}
      </div> */}

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

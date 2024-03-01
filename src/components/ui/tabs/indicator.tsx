import { Positions } from ".";

type IndicatorPrps = { positions: Positions[]; activeTab: number };

const Indicator = ({ positions, activeTab }: IndicatorPrps) => {
  return (
    <div
      style={{
        left: positions[activeTab].x + "px",
        width: positions[activeTab].width + "px",
        top: positions[activeTab].y + "px",
        height: positions[activeTab].height + "px",
      }}
      className="bg-primary absolute top-0 transition-all duration-300 ease-in-out rounded-full h-5 w-20 z-0"
    />
  );
};

export default Indicator;

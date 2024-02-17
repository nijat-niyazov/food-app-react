import { CustomButton } from "@/components";
import { cn } from "@/utils";

type Props = {
  activeTab: number;
  handleActiveTab: (tab: number) => void;
};

const MainTabs = ({ activeTab, handleActiveTab }: Props) => {
  const tabs = ["Meals", "Create New Meal", "Set Special Meals"];
  return (
    <header className="bg-bej py-2">
      <div className="flex w-[90%] md:w-1/2 mx-auto items-center gap-10">
        {tabs.map((tab, i) => (
          <CustomButton
            key={i}
            className={cn({ "hover:bg-primary/50": activeTab !== i + 1 })}
            onClick={() => handleActiveTab(i + 1)}
            borderRadius="full"
            variant={activeTab === i + 1 ? "primary" : "outlined"}
          >
            {tab}
          </CustomButton>
        ))}
      </div>
    </header>
  );
};

export default MainTabs;

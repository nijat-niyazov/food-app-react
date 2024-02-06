import { CustomButton } from "@/components";
import { cn } from "@/utils";

type Props = {
  activeTab: number;
  handleActiveTab: (tab: number) => void;
};

const MainTabs = ({ activeTab, handleActiveTab }: Props) => {
  return (
    <header className="bg-bej py-2">
      <div className="flex w-[90%] md:w-1/3 mx-auto items-center gap-2">
        <CustomButton
          className={cn({ "hover:bg-primary/50": activeTab !== 1 })}
          onClick={() => handleActiveTab(1)}
          borderRadius="full"
          variant={activeTab === 1 ? "primary" : "transparent"}
        >
          Meals
        </CustomButton>
        <CustomButton
          className={cn({ "hover:bg-primary/50": activeTab !== 2 })}
          onClick={() => handleActiveTab(2)}
          borderRadius="full"
          variant={activeTab === 2 ? "primary" : "transparent"}
        >
          Create New Meal
        </CustomButton>
      </div>
    </header>
  );
};

export default MainTabs;

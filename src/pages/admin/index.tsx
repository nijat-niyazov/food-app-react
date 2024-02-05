import { CustomButton } from "@/components";
import { getMenuItems } from "@/libs/menu";
import { AllMeals } from "@/sections/admin";
import CreateNewMeal from "@/sections/admin/create";
import { cn } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const AdminPage = () => {
  const {
    isPending,
    error,
    data: meals,
  } = useQuery({
    queryKey: ["menuData"],
    queryFn: getMenuItems,
  });

  const { pathname } = useLocation();

  const [activeTab, setActiveTab] = useState<number>(
    sessionStorage.getItem("activeTab") ? parseInt(sessionStorage.getItem("activeTab") as string) : 2
  );

  function handleActiveTab(tab: number) {
    setActiveTab(tab);
    sessionStorage.setItem("activeTab", tab.toString());
  }

  return (
    <div className="">
      <>
        {/* ---------------------------------- Tabs ---------------------------------- */}
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

        {activeTab === 1 && <AllMeals isPending={isPending} data={meals} />}

        {activeTab === 2 && <CreateNewMeal />}
      </>
    </div>
  );
};

export default AdminPage;

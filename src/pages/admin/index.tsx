import { AllMeals, MainTabs } from "@/sections/admin";
import CreateNewMeal from "@/sections/admin/create";
import { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";

const AdminPage = () => {
  const { pathname } = useLocation();

  const [activeTab, setActiveTab] = useState<number>(
    sessionStorage.getItem("activeTab") ? parseInt(sessionStorage.getItem("activeTab") as string) : 2
  );

  const handleActiveTab = useCallback((tab: number) => {
    setActiveTab(tab);
    sessionStorage.setItem("activeTab", tab.toString());
  }, []);

  return (
    <div className="">
      <>
        {/* ---------------------------------- Tabs ---------------------------------- */}

        <MainTabs activeTab={activeTab} handleActiveTab={handleActiveTab} />

        {activeTab === 1 && (
          <AllMeals
          //  isPending={isPending} data={meals}
          />
        )}

        {activeTab === 2 && <CreateNewMeal />}
      </>
    </div>
  );
};

export default AdminPage;

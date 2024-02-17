import { AllMeals, CreateNewMeal, CreateSpecialMeal, MainTabs } from "@/sections/admin";

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

  const components = [<AllMeals />, <CreateNewMeal />, <CreateSpecialMeal />];

  return (
    <div className="">
      {/* ---------------------------------- Tabs ---------------------------------- */}

      <MainTabs activeTab={activeTab} handleActiveTab={handleActiveTab} />

      {/* ------------------------------- Components -------------------------------- */}

      {components.map((component, i) => (
        <div key={i} className={activeTab === i + 1 ? "block" : "hidden"}>
          {component}
        </div>
      ))}
    </div>
  );
};

export default AdminPage;

import { AllMeals, CreateSpecialMeal, FaqContent, MainTabs } from "@/sections/admin";
import CreateNewMeal from "@/sections/admin/create-new-meal";

import { Fragment, useCallback, useEffect, useState } from "react";

const components = [AllMeals, CreateNewMeal, CreateSpecialMeal, FaqContent];

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState(parseInt(sessionStorage.getItem("activeTab") ?? "1"));

  const handleActiveTab = useCallback((tab: number) => setActiveTab(tab), []);

  useEffect(() => {
    sessionStorage.setItem("activeTab", activeTab.toString());
    return () => sessionStorage.removeItem("activeTab");
  }, [activeTab]);

  return (
    <Fragment>
      {/* ---------------------------------- Tabs ---------------------------------- */}

      <MainTabs activeTab={activeTab} handleActiveTab={handleActiveTab} />

      {/* ------------------------------- Components -------------------------------- */}

      {components.map((Component, i) => i + 1 === activeTab && <Component key={i} />)}
    </Fragment>
  );
};

export default AdminPage;

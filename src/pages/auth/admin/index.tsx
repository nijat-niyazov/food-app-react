import Tabs from "@/components/ui/tabs";
import { useTabs } from "@/hooks";
import { AllMeals } from "@/sections/admin";
import CreateNewMeal from "@/sections/admin/create-new-meal";

import { Fragment } from "react";

const components = [
  { title: "Meals", component: AllMeals },
  { title: "Create New Meal", component: CreateNewMeal },
  // { title: "Customize Special Meal", component: CreateSpecialMeal },
  // { title: "FAQ", component: FaqContent },
];

const AdminPage = () => {
  const { activeTab, handleActiveTab } = useTabs("activeTab");

  return (
    <Fragment>
      {/* ---------------------------------- Tabs ---------------------------------- */}
      <Tabs tabs={components.map((tab) => tab.title)} activeTab={activeTab} handleActiveTab={handleActiveTab} />

      {/* ------------------------------- Components -------------------------------- */}

      {components.map(({ component: Component }, i) => i + 1 === activeTab && <Component key={i} />)}
    </Fragment>
  );
};

export default AdminPage;

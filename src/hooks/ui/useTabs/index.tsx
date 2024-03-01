import { useEffect, useState } from "react";

const useTabs = (key: string) => {
  const storageTab = parseInt(sessionStorage.getItem(key) ?? "1");

  const [activeTab, setActiveTab] = useState(storageTab);
  const handleActiveTab = (tab: number) => setActiveTab(tab);

  useEffect(() => {
    sessionStorage.setItem(key, activeTab.toString());
    return () => sessionStorage.removeItem(key);
  }, [activeTab]);

  return { activeTab, handleActiveTab };
};

export default useTabs;

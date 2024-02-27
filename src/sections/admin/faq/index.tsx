import { useGetData } from "@/hooks";
import { getFaqData } from "@/services/api/admin";

let tab: string = "canimsan";

if (typeof window !== "undefined") {
  // Check if we're running in the browser.
  // ✅ Only runs once per app load
  tab = localStorage.getItem("activeTab")!;
}

const FaqContent = () => {
  const { data, isPending, error } = useGetData(["faqData"], getFaqData);

  let content = null;

  if (isPending) {
    content = <div>Loading...</div>;
  } else {
    content = JSON.stringify(data, null, 2);
  }

  return <div>{content}</div>;
};

export default FaqContent;

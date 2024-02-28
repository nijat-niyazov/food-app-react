import { supabase } from "@/constants/supabase";
import { useGetData } from "@/hooks";
import { Fragment, useState } from "react";
import { ContentOfFaq, HeaderOfFaq } from "./components";

async function getData() {
  try {
    return await supabase.from("faqdata").select("*");
  } catch (error) {
    console.log("error", error);
    return error;
  }
}

const FAQ = () => {
  const { data, isPending, isError } = useGetData(["faq"], getData);

  if (isError) {
    console.log(isError);

    return;
  }

  const [activeTab, setActiveTab] = useState(0);
  const handleTab = (i: number) => setActiveTab(i);

  return (
    <Fragment>
      <HeaderOfFaq isPending={isPending} questions={data?.data!} activeTab={activeTab} setActiveTab={handleTab} />

      <ContentOfFaq key={activeTab} activeTab={activeTab} isPending={isPending} data={data?.data} />
    </Fragment>
  );
};

export default FAQ;

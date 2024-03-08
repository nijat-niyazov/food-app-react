import { supabase } from "@/constants/supabase";
import { useGetData } from "@/hooks";
import { useState } from "react";
import { ContentOfFaq, HeaderOfFaq } from "./components";

async function getData() {
  return await supabase.from("faqdata").select("*");
}

const FAQ = () => {
  const { data, isPending, isError } = useGetData<{ data: any }>(["faq"], getData);

  if (isError) {
    console.log(isError);

    return;
  }

  const [activeTab, setActiveTab] = useState(0);
  const handleTab = (i: number) => setActiveTab(i);

  return (
    <section className="bej rounded-xl">
      <div className="container md:py-20 py-10">
        <HeaderOfFaq isPending={isPending} questions={data?.data} activeTab={activeTab} setActiveTab={handleTab} />

        <ContentOfFaq key={activeTab} activeTab={activeTab} isPending={isPending} data={data?.data} />
      </div>
    </section>
  );
};

export default FAQ;

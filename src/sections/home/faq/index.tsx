import { getFaqData } from "@/services/api/admin";

import { useGetData } from "@/hooks";
import { Fragment, useCallback, useState } from "react";
import { ContentOfFaq, HeaderOfFaq } from "./components";

const FAQ = () => {
  const { data, isPending, isError } = useGetData(["faq"], getFaqData);

  const [activeTab, setActiveTab] = useState(0);
  const handleTab = useCallback((i: number) => setActiveTab(i), []);

  return (
    <Fragment>
      <HeaderOfFaq isPending={isPending} questions={data!} activeTab={activeTab} setActiveTab={handleTab} />

      <ContentOfFaq key={activeTab} activeTab={activeTab} isPending={isPending} data={data} />
    </Fragment>
  );
};

export default FAQ;

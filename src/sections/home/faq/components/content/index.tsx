import { Answer, FaqData } from "@/services/api";
import { useMemo, useState } from "react";
import { CardsOfFaq, TabKeys } from "..";

type FaqProps = { isPending: boolean; data: FaqData[]; activeTab: number };

const ContentOfFaq = ({ data, isPending, activeTab }: FaqProps) => {
  const [activeKey, setActiveKey] = useState(0);
  const handleKey = (i: number) => setActiveKey(i);

  const memos = useMemo(() => {
    if (!isPending) {
      const activeData = data[activeTab].answers;

      const keys = activeData.map(({ key }) => key);
      const answers = activeData[activeKey].answer;

      return { keys, answers };
    }
  }, [activeTab, data, isPending, activeKey]);

  const particularData = memos as { keys: string[]; answers: Answer["answer"] };

  if (isPending) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] bg-text rounded-xl min-h-80 p-10 gap-10 overflow-hidden">
      <TabKeys activeKey={activeKey} handleKey={handleKey} keys={particularData.keys} />

      <CardsOfFaq answers={particularData.answers} />
    </div>
  );
};

export default ContentOfFaq;

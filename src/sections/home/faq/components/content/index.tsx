import { FaqData } from "@/services/api";
import { useCallback, useMemo, useState } from "react";
import { CardsOfFaq, TabKeys } from "..";

type Props = {
  isPending: boolean;
  data: FaqData[];
  activeTab: number;
};

const ContentOfFaq = ({ data, isPending, activeTab }: Props) => {
  const [activeKey, setActiveKey] = useState(0);
  const handleKey = useCallback((i: number) => setActiveKey(i), []);

  const memos = useMemo(() => {
    if (!isPending) {
      const activeData = data[activeTab].answers;
      console.log(activeData);

      const keys = activeData.map(({ key }) => key);
      const answers = activeData[activeKey].answer;

      return { keys, answers };
    }
  }, [activeTab, data, isPending, activeKey]);

  console.log(memos?.answers);

  return (
    <div className="flex items-start flex-col md:flex-row bg-text rounded-xl min-h-80 p-10 gap-10 overflow-hidden">
      {isPending ? null : (
        <>
          <TabKeys activeKey={activeKey} handleKey={handleKey} keys={memos?.keys!} />

          <CardsOfFaq answers={memos?.answers!} />
        </>
      )}
    </div>
  );
};

export default ContentOfFaq;

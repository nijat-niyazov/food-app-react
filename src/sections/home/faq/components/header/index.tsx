import { CustomButton } from "@/components";
import { FaqData } from "@/services";
import { cn } from "@/utils";

type Props = {
  isPending: boolean;
  questions: FaqData[];
  setActiveTab: (i: number) => void;
  activeTab: number;
};

const HeaderOfFaq = ({ isPending, questions, activeTab, setActiveTab }: Props) => {
  return (
    <header className="flex items-center justify-between md:mb-16 mb-5">
      <h3 className="text-text text-3xl font-bold">Know more about project!</h3>

      <div className="hidden text-base text-text md:flex items-start justify-between gap-2">
        {isPending ? (
          <p className="grow">Loading...</p>
        ) : (
          questions.map(({ id, question }, i) => (
            <CustomButton
              onClick={() => setActiveTab(i)}
              key={id}
              borderRadius="full"
              variant="outlined"
              className={cn(" w-auto border-1 border-transparent", {
                "border-primary": activeTab === i,
              })}
            >
              {question}
            </CustomButton>
          ))
        )}
      </div>
    </header>
  );
};

export default HeaderOfFaq;

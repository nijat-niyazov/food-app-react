import { CustomButton } from "@/components/ui";
import { useMediaMatch } from "@/hooks";
import { FaqData } from "@/services/api";
import { cn } from "@/utils";

type Props = { isPending: boolean; questions: FaqData[]; setActiveTab: (i: number) => void; activeTab: number };

const HeaderOfFaq = ({ isPending, questions, activeTab, setActiveTab }: Props) => {
  const sm = useMediaMatch();

  return (
    <header className="flex flex-col md:flex-row items-center mb-10 md:mb-6 gap-y-5 justify-between">
      <h3 className="text-darkblue text-center md:text-start  text-2xl md:text-[32px] font-bold [text-shadow:_0_4px_4px_rgb(0_0_0_/_30%)]">
        Know more about project!
      </h3>

      <div className="flex flex-col md:flex-row text-base text-darkblue  md:items-start gap-2">
        {isPending ? (
          <p className="grow">Loading...</p>
        ) : (
          questions.map(({ id, question }, i) => (
            <CustomButton
              onClick={() => setActiveTab(i)}
              key={id}
              size="lg"
              borderRadius="full"
              variant={!sm ? (activeTab === i ? "primary" : "transparent") : "transparent"}
              className={cn("w-auto border-1 border-transparent text-darkblue !px-4", {
                "border-1 border-oranged": activeTab === i && sm,
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

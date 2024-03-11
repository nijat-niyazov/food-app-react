import { CustomButton } from "@/components/ui";
import { cn } from "@/utils";

type Props = {
  keys: string[];
  activeKey: number;
  handleKey: (i: number) => void;
};

const TabKeys = ({ keys, activeKey, handleKey }: Props) => {
  return (
    <header className="flex flex-col gap-2 ">
      {keys.map((key, i) => (
        <CustomButton
          variant={activeKey === i ? "primary" : "transparent"}
          key={i}
          onClick={() => handleKey(i)}
          borderRadius="full"
          className={cn("w-auto text-white font-bold py-4", {
            "text-text": activeKey === i,
            "hover:bg-primary/50 ": activeKey !== i,
          })}
        >
          {key}
        </CustomButton>
      ))}
    </header>
  );
};

export default TabKeys;

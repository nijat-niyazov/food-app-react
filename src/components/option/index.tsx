import { CustomButton } from "@/components/ui";
import { OptionType } from "@/constants/types/meal";
import { cn } from "@/utils";

type OptionComProps = {
  disabled?: boolean;
  onClick: (id: string) => void;
  option: OptionType;
  selected: string | undefined;
};

const Option = ({ disabled = false, onClick, option, selected }: OptionComProps) => {
  const active = selected === option.id;

  return (
    <CustomButton
      onClick={() => onClick(option.id)}
      disabled={disabled}
      size="xs"
      variant="outlined"
      className={cn("w-auto py-2 px-3 flex items-center justify-between", {
        "bg-text text-white": active,
        "hover:bg-text/50 hover:text-white": !active,
      })}
    >
      <span className={`${active ? "text-white" : "text-text"} mr-2`}>{option.name}</span>

      <span className="bg-secondary py-2 px-4 rounded-s text-white">£{option.price}</span>
    </CustomButton>
  );
};

export default Option;

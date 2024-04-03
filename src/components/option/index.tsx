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
      className={cn("w-auto !py-2 !px-3 flex items-center justify-between gap-2 hover:text-white", {
        "bg-text text-white ": active,
        "hover:bg-primary/90 ": !active,
      })}
    >
      <span className={cn("mr-2", { "text-white": active })}>{option.name}</span>

      <p className="bg-secondary min-w-20 py-2 px-4 rounded-s text-white">£{option.price}</p>
    </CustomButton>
  );
};

export default Option;

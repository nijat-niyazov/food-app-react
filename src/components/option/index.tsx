import { CustomButton } from "@/components/ui";
import { cn } from "@/utils";

type OptionComProps = {
  disabled?: boolean;
  onClick: (id: number) => void;
  option: { id: number; size?: string; price?: number };
  selected: number | undefined;
};

const Option = ({ disabled = false, onClick, option, selected }: OptionComProps) => {
  const handeClick = () => onClick(option.id);

  return (
    <CustomButton
      onClick={handeClick}
      disabled={disabled}
      size="xs"
      variant="outlined"
      className={cn("border-1 border-white hover:border-black/90   w-auto py-2 px-3 flex items-center", {
        "bg-text text-white": selected === option.id,
        "hover:bg-text/50 hover:text-white": selected !== option.id,
      })}
    >
      <span className={`${option.id === selected ? "text-white" : "text-text"} mr-2`}>{option.size}</span>
      {option.price && <span className="bg-secondary py-2 px-4 rounded-s text-white">£{option.price}</span>}
    </CustomButton>
  );
};

export default Option;

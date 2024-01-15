type OptionComProps = {
  disabled?: boolean;
  onClick: (id: number) => void;
  option: { id: number; size?: string; price?: number };
  selected: number | undefined;
};

const Option = ({
  disabled = false,
  onClick,
  option,
  selected,
}: OptionComProps) => {
  return (
    <button
      onClick={() => onClick(option.id)}
      disabled={disabled}
      className={`${
        selected === option.id ? "bg-text text-white" : ""
      } rounded-lg  font-bold text-sm flex items-center py-2 px-3 border-1 border-black/10`}
    >
      <span
        className={`${
          option.id === selected ? "text-white" : "text-text"
        } mr-2`}
      >
        {option.size}
      </span>
      {option.price && (
        <span className="bg-secondary py-2 px-4 rounded-s text-white">
          £{option.price}
        </span>
      )}
    </button>
  );
};

export default Option;

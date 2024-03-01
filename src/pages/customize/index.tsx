import { ArrowDown } from "@/assets/icons";
import { CustomButton } from "@/components/ui";
import { MealType } from "@/constants/types/meal";
import { FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  meals: { [key: string]: MealType[] };
};

const CustomizeSpecialMealPage: FC<Props> = ({ meals }) => {
  const alredyExist = useMemo(() => Object.keys(meals).map((label) => label), [meals]);

  const navigate = useNavigate();

  const goToTab = (tab: number) => navigate(`/customize/${tab}`);

  return (
    <header className="flex gap-4 items-center justify-center w-1/2">
      {alredyExist.map((label, i) => (
        <CustomButton className="w-auto" variant="primary" size="md" key={i} onClick={() => goToTab(i)}>
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </CustomButton>
      ))}

      <CustomButton
        className="w-auto opacity-50 hover:opacity-100 relative !pl-12 group"
        variant="secondary"
        size="md"
        borderRadius="full"
        onClick={() => console.log("")}
      >
        <span className="-rotate-90 absolute left-1 transition-all duration-200 group-hover:left-4">
          <ArrowDown />
        </span>
        Customize new one
      </CustomButton>
    </header>
  );
};

export default CustomizeSpecialMealPage;

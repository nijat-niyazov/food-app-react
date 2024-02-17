import { SpecialMealForm } from "@/forms";
import { getSpecialMealData } from "@/services";
import { CustomOrderType } from "@/stores/custom-order";
import { useQuery } from "@tanstack/react-query";

type Props = {
  mealId: "burger" | "pizza";
  defaultValues?: CustomOrderType;
};

const SpecialMealModal = ({ mealId, defaultValues }: Props) => {
  const { isPending, data: meals } = useQuery({
    queryKey: ["specialMealData"],
    queryFn: getSpecialMealData,
  });

  return isPending ? (
    <div className="p-10">Loadingoss...</div>
  ) : (
    <SpecialMealForm
      {...{
        mealId,
        meals,
        defaultValues,
      }}
    />
  );
};

export default SpecialMealModal;

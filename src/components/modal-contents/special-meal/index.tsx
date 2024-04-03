import { SpecialMealType } from "@/constants/types/spcieal-meal";
import { SpecialMealForm } from "@/forms";
import { useGetData } from "@/hooks";
import { getSpecialMealData } from "@/services/api";
import { CustomOrderType } from "@/stores/custom-order";

type Props = { mealId: "burger" | "pizza"; defaultValues?: CustomOrderType };

const SpecialMealModal = ({ mealId, defaultValues }: Props) => {
  const { isPending, data: meals } = useGetData<{ [key: string]: SpecialMealType[] }>(["specialMealData"], getSpecialMealData);

  return isPending ? (
    <div className="p-10 min-h-[85vh] flex items-center justify-center">Loadingoss...</div>
  ) : (
    <SpecialMealForm {...{ mealId, meals, defaultValues }} />
  );
};

export default SpecialMealModal;

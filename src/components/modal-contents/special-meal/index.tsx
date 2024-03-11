import { useGetData } from "@/hooks";
import { getSpecialMealData } from "@/services/api";
import { CustomOrderType } from "@/stores/custom-order";

type Props = {
  mealId: "burger" | "pizza";
  defaultValues?: CustomOrderType;
};

const SpecialMealModal = ({ mealId, defaultValues }: Props) => {
  const { isPending, data: meals } = useGetData(["specialMealData"], getSpecialMealData);

  return isPending ? (
    <div className="p-10">Loadingoss...</div>
  ) : null;
  // <SpecialMealForm
  //   {...{
  //     mealId,
  //     meals,
  //     defaultValues,
  //   }}
  // />
};

export default SpecialMealModal;

import { MealType } from "@/constants/types/meal";
import { useGetData } from "@/hooks";
import { getMenuItems } from "@/services/api/menu";

const OrderHistoryPage = () => {
  const { isPending, data, error } = useGetData<{ "fast-food": MealType[]; drinks: MealType[] }>(["orderHistory"], getMenuItems);

  if (isPending) return <div>Loading...</div>;

  return (
    <div className="container p-10 border-1 border-black">
      <ul>
        {data?.["fast-food"].map((meal) => (
          <li key={meal.id}>{meal.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistoryPage;

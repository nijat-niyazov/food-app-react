import { MealType } from "@/constants/types/meal";
import AdminMealCard from "./meal";

type Props = {
  meals: MealType[];
};

const AdminMeals = ({ meals }: Props) => {
  return meals.map((meal, i) => <AdminMealCard key={i} meal={meal} />);
};

export default AdminMeals;

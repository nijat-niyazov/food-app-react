import { MealType } from "@/constants/types/meal";
import AdminMealCard from "./meal";

const AdminMeals = ({ meals }: { meals: MealType[] }) => {
  return meals.map((meal, i) => <AdminMealCard key={i} meal={meal} />);
};

export default AdminMeals;

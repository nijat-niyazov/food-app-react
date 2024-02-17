import { MealType } from "@/constants/types/meal";
import Meal from "./meal";

type Props = {
  meals: { "fast-food": MealType[]; drinks: MealType[] };
  category: "fast-food" | "drinks";
};
const Militos = ({ meals, category = "fast-food" }: Props) => {
  return meals[category].map((meal: MealType) => <Meal key={meal.id} meal={meal} />);
};

export default Militos;

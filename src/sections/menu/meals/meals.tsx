import { MealType } from "@/constants/types/meal";
import Meal from "./meal";

type Props = { meals: MealType[] };

const Militos = ({ meals }: Props) => {
  return meals.map((meal: MealType) => <Meal key={meal.id} meal={meal} />);
};

export default Militos;

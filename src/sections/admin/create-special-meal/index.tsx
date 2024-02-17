import { CreateSpecialMealForm } from "@/forms";
import { getSpecialMealData } from "@/services";
import { useQuery } from "@tanstack/react-query";

const CreateSpecialMeal = () => {
  const { isPending, data: meals, error } = useQuery({ queryKey: ["specialMeals"], queryFn: getSpecialMealData });

  return (
    <div className="container border-1 border-black/50 my-10 rounded-md min-h-96 p-4">
      {isPending ? <div>Loading...</div> : <CreateSpecialMealForm meals={meals} />}
    </div>
  );
};

export default CreateSpecialMeal;

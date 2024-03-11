import { useGetData } from "@/hooks";
import { getSpecialMealData } from "@/services/api";

const CreateSpecialMeal = () => {
  const { isPending, data: meals, error } = useGetData(["specialMeals"], getSpecialMealData);

  return (
    <div className="container border-1 border-black/50 my-10 rounded-md min-h-96 p-4">
      {/* {isPending ? <div>Loading...</div> : <CreateSpecialMealForm meals={meals} />} */}
    </div>
  );
};

export default CreateSpecialMeal;

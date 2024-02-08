import { CustomButton } from "@/components";
import { SpecialMealForm } from "@/forms";
import { getSpecialMealData } from "@/services";
import { openModal } from "@/stores/modal";
import { useQuery } from "@tanstack/react-query";

const options = [
  { id: 1, name: "Pizza" },
  { id: 2, name: "Burger" },
];

const SpecialMeal = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["specialMealData"],
    queryFn: getSpecialMealData,
  });

  const handleFormOfMeal = (mealId: "pizza" | "burger") => openModal(<SpecialMealForm meals={data} mealId={mealId} />, 70);
  return isPending ? (
    <p>Loading...</p>
  ) : (
    <div className="flex flex-wrap gap-4">
      {options.map(({ name, id }) => (
        <CustomButton
          variant="secondary"
          key={id}
          onClick={() => handleFormOfMeal(name.toLowerCase() as "pizza" | "burger")}
          className="w-auto"
        >
          {name}
        </CustomButton>
      ))}
    </div>
  );
};

export default SpecialMeal;

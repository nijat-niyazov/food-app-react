import { CustomButton } from "@/components";
import SpecialMealForm from "@/components/forms/special-meal";
import { openModal } from "@/stores/modal";

const options = [
  {
    id: 1,
    name: "Pizza",
  },
  {
    id: 2,
    name: "Burger",
  },
];

const SpecialMeal = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {options.map((option) => (
        <CustomButton
          variant="success"
          key={option.id}
          onClick={() =>
            // openModal(<PreperaringSpecialMeal mealId={option.id} />, 80)
            openModal(<SpecialMealForm />)
          }
          className={`rounded-lg text3  font-bold text-xl flex items-center py-2 px-3 border-2 border-black/10`}
        >
          <span className={`mr-2`}>{option.name}</span>
        </CustomButton>
      ))}
    </div>
  );
};

export default SpecialMeal;
